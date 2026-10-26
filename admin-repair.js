/* MS3DH Admin recovery and footer text cleanup */
(function () {
  'use strict';
  function byId(id){ return document.getElementById(id); }
  function openLogin(){
    var modal=byId('modal'), title=byId('modalTitle'), body=byId('modalBody');
    if(!modal || !title || !body){ alert('تعذر فتح نافذة الإدارة: عناصر النافذة غير موجودة. حدّث الصفحة أو تأكد من رفع index.html كاملًا.'); return; }
    title.textContent='دخول إدارة الموقع';
    body.innerHTML='<form id="ms3dhRepairLogin" autocomplete="on"><div class="field"><label for="ms3dhRepairUser">اسم المستخدم</label><input id="ms3dhRepairUser" name="username" autocomplete="username" required></div><div class="field"><label for="ms3dhRepairPass">كلمة المرور</label><input id="ms3dhRepairPass" name="password" type="password" autocomplete="current-password" required></div><p id="ms3dhRepairError" role="alert" style="display:none;color:#ff8b82;margin:10px 0"></p><button class="btn red" type="submit">🔐 دخول</button></form>';
    modal.classList.add('show');
    var form=byId('ms3dhRepairLogin');
    form.addEventListener('submit',function(e){
      e.preventDefault();
      var u=(byId('ms3dhRepairUser').value||'').trim(), p=byId('ms3dhRepairPass').value||'';
      if(u!=='admin'||p!=='MS3DH2026!'){
        var err=byId('ms3dhRepairError');err.textContent='اسم المستخدم أو كلمة المرور غير صحيحة';err.style.display='block';return;
      }
      modal.classList.remove('show');
      if(typeof window.adminPanel==='function'){
        try { window.adminPanel(); }
        catch(err){ console.error('MS3DH admin panel error',err); alert('تم تسجيل الدخول لكن تعذر فتح لوحة الإدارة: '+(err.message||err)); }
      } else {
        alert('كود لوحة الإدارة الأساسي لم يتم تحميله. ارفع ملف index.html كاملًا مع admin-repair.js ولا تحذف بقية الأكواد.');
      }
    });
    setTimeout(function(){var u=byId('ms3dhRepairUser');if(u)u.focus();},60);
  }
  function bindAdmin(){
    var b=byId('ms3dhQuickAdmin');
    if(b && !b.dataset.repairBound){
      b.dataset.repairBound='1';
      b.addEventListener('click',function(e){e.preventDefault();e.stopImmediatePropagation();openLogin();},true);
    }
  }
  function cleanFooter(){
    var root=document.querySelector('footer')||document.body;
    if(!root)return;
    var walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT), nodes=[];
    while(walker.nextNode())nodes.push(walker.currentNode);
    nodes.forEach(function(n){
      var val=n.nodeValue||'';
      if(/^\s*n\s*\/\s*n\s*\/\s*$/i.test(val)) n.nodeValue='';
      else if(/n\s*\/\s*n\s*\//i.test(val)) n.nodeValue=val.replace(/n\s*\/\s*n\s*\//ig,'').replace(/\s{2,}/g,' ');
    });
    root.querySelectorAll('*').forEach(function(el){
      if(el.children.length===0 && /n\s*\/\s*n\s*\//i.test(el.textContent||'')){
        el.textContent=(el.textContent||'').replace(/n\s*\/\s*n\s*\//ig,'').trim();
        if(!el.textContent)el.remove();
      }
    });
  }
  function boot(){bindAdmin();cleanFooter();}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
  if(window.MutationObserver && document.documentElement){
    var queued=false;
    new MutationObserver(function(){if(queued)return;queued=true;setTimeout(function(){queued=false;bindAdmin();cleanFooter();},50);}).observe(document.documentElement,{subtree:true,childList:true,characterData:true});
  }
})();
