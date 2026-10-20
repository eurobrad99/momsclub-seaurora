(function(){
  var t=document.querySelector('.menu-toggle'),m=document.getElementById('menu');
  if(t&&m){t.addEventListener('click',function(){var o=m.classList.toggle('open');t.setAttribute('aria-expanded',o);t.setAttribute('aria-label',o?'Close menu':'Open menu');});}
  var y=document.querySelector('[data-year]');if(y)y.textContent=new Date().getFullYear();
  var els=[].slice.call(document.querySelectorAll('.reveal'));
  function showAll(){els.forEach(function(e){e.classList.add('in')})}
  var vh=window.innerHeight||800;
  els.forEach(function(e){if(e.getBoundingClientRect().top<vh*1.1)e.classList.add('in')});
  setTimeout(showAll,1600);
  if(!('IntersectionObserver' in window)){showAll();return;}
  var io=new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}})},{rootMargin:'0px 0px -5% 0px',threshold:.05});
  els.forEach(function(e){io.observe(e)});
})();
(function(){
  var f=document.querySelector('form[name="contact"]');if(!f)return;
  var h=location.hostname;
  if(!/pplx\.app$|perplexity\.ai$|github\.io$/.test(h))return; /* real form works on Netlify */
  f.addEventListener('submit',function(e){
    e.preventDefault();
    var v=function(n){var el=f.querySelector('[name="'+n+'"]');return el?el.value:'';};
    var body='Name: '+v('name')+'\nEmail: '+v('email')+'\nAddress: '+v('address')+'\n\n'+v('message');
    location.href='mailto:momsclubseaurora@gmail.com?subject='+encodeURIComponent('Message from the MOMS Club SE Aurora website')+'&body='+encodeURIComponent(body);
  });
})();
