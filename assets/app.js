const reveals=document.querySelectorAll('.reveal');
window.addEventListener('scroll',()=>{
reveals.forEach(el=>{if(el.getBoundingClientRect().top<window.innerHeight-80){el.classList.add('visible')}})
});
window.addEventListener('load',()=>{
document.getElementById('page-loader')?.remove();
});
