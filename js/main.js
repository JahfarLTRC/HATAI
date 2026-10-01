const menu=document.querySelector('.menu-btn');
const links=document.querySelector('.nav-links');
if(menu){menu.addEventListener('click',()=>links.classList.toggle('open'));}

document.querySelectorAll('.tab-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const target=btn.dataset.target;
    document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
    btn.classList.add('active');
    const panel=document.getElementById(target); if(panel) panel.classList.add('active');
  });
});

document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>links?.classList.remove('open')));
