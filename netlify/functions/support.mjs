import { getStore } from '@netlify/blobs';
const json=(data,status=200)=>new Response(JSON.stringify(data),{status,headers:{'content-type':'application/json; charset=utf-8','cache-control':'no-store'}});
const store=()=>getStore('ms3dh-support');
async function discordDM(userId,message){const token=process.env.DISCORD_BOT_TOKEN;if(!token)return false;try{const h={Authorization:`Bot ${token}`,'Content-Type':'application/json'};let r=await fetch('https://discord.com/api/v10/users/@me/channels',{method:'POST',headers:h,body:JSON.stringify({recipient_id:userId})});if(!r.ok)return false;const ch=await r.json();r=await fetch(`https://discord.com/api/v10/channels/${ch.id}/messages`,{method:'POST',headers:h,body:JSON.stringify({content:message.slice(0,1900)})});return r.ok}catch{return false}}
export default async (req)=>{
 const url=new URL(req.url), action=url.searchParams.get('action')||'';
 if(req.method==='OPTIONS')return new Response('',{status:204});
 if(action==='submit'&&req.method==='POST'){
  let b;try{b=await req.json()}catch{return json({ok:false,error:'بيانات غير صالحة'},400)}
  const name=String(b.name||'').trim().slice(0,80), discordId=String(b.discordId||'').trim(),category=String(b.category||'استفسار').slice(0,50),message=String(b.message||'').trim().slice(0,2500);
  if(!name||!/^\d{17,20}$/.test(discordId)||!message)return json({ok:false,error:'تحقق من الاسم ومعرّف Discord والرسالة'},400);
  const s=store(), id=crypto.randomUUID(), ticket={id,name,discord_id:discordId,category,message,status:'مفتوح',reply:'',created_at:new Date().toISOString()};
  await s.setJSON(`ticket:${id}`,ticket);const ids=await s.get('ticket-ids',{type:'json'})||[];ids.unshift(id);await s.setJSON('ticket-ids',ids.slice(0,5000));
  return json({ok:true,ticket:{id}} ,201);
 }
 const adminKey=process.env.SUPPORT_ADMIN_KEY||process.env.APPLICATIONS_ADMIN_KEY;
 if(!adminKey)return json({ok:false,error:'إعداد SUPPORT_ADMIN_KEY مفقود في Netlify'},500);
 if(req.headers.get('x-admin-key')!==adminKey)return json({ok:false,error:'مفتاح الإدارة غير صحيح'},401);
 const s=store();
 if(action==='list'&&req.method==='GET'){
  const ids=await s.get('ticket-ids',{type:'json'})||[];const tickets=[];
  for(const id of ids){const t=await s.get(`ticket:${id}`,{type:'json'});if(t)tickets.push(t)}
  return json({ok:true,tickets});
 }
 if(action==='reply'&&req.method==='POST'){
  let b;try{b=await req.json()}catch{return json({ok:false,error:'بيانات غير صالحة'},400)}
  const id=String(b.id||''),reply=String(b.reply||'').trim().slice(0,2000);if(!id||!reply)return json({ok:false,error:'رقم الطلب والرد مطلوبان'},400);
  const ticket=await s.get(`ticket:${id}`,{type:'json'});if(!ticket)return json({ok:false,error:'الطلب غير موجود'},404);
  ticket.reply=reply;ticket.status='تم الرد';ticket.replied_at=new Date().toISOString();ticket.dmSent=await discordDM(ticket.discord_id,`رد إدارة MS3DH على طلبك #${ticket.id.slice(0,8)} (${ticket.category}):\n\n${reply}`);
  await s.setJSON(`ticket:${id}`,ticket);return json({ok:true,dmSent:ticket.dmSent,ticket});
 }
 return json({ok:false,error:'طلب غير مدعوم'},400);
};
