/* force native POST to telegram.php even in SPA */
(function(){
  var bound=false;
  function wire(){
    if(bound) return;
    var f=document.getElementById('leadForm');
    if(!f) return;
    bound=true;
    // Replace node to drop prior listeners
    var nf=f.cloneNode(true);
    nf.setAttribute('action','telegram.php');
    nf.setAttribute('method','post');
    // add honeypot
    var hp=document.createElement('input'); hp.type='text'; hp.name='website'; hp.style.display='none'; nf.appendChild(hp);
    f.parentNode.replaceChild(nf,f);
  }
  if(document.readyState!=='loading') wire();
  document.addEventListener('DOMContentLoaded', wire);
  new MutationObserver(wire).observe(document.documentElement,{subtree:true,childList:true});
  setTimeout(wire,1000); setTimeout(wire,3000); setTimeout(wire,7000);
})();