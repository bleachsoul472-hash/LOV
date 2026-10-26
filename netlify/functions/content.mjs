import { getStore } from '@netlify/blobs';
const json=(data,status=200)=>new Response(JSON.stringify(data),{status,headers:{'content-type':'application/json; charset=utf-8','cache-control':'no-store'}});
export default async (req)=>{
 const store=getStore('ms3dh-content');
 if(req.method==='GET'){
  const data=await store.get('site-data',{type:'json'});
  return json({ok:true,data:data||null});
 }
 if(req.method!=='PUT') return json({ok:false,error:'Method not allowed'},405);
 const expected=process.env.SITE_CONTENT_ADMIN_KEY;
 if(!expected) return json({ok:false,error:'إعداد SITE_CONTENT_ADMIN_KEY مفقود في Netlify'},500);
 if(req.headers.get('x-site-admin-key')!==expected) return json({ok:false,error:'مفتاح الإدارة غير صحيح'},401);
 let body; try{body=await req.json()}catch{return json({ok:false,error:'بيانات غير صالحة'},400)}
 if(!body?.data||typeof body.data!=='object') return json({ok:false,error:'بيانات الموقع مفقودة'},400);
 const data={...body.data,_savedAt:new Date().toISOString()};
 await store.setJSON('site-data',data);
 return json({ok:true,savedAt:data._savedAt});
};
