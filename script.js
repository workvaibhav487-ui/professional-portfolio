const body=document.body;
const themeButton=document.querySelector('.theme-toggle');
const savedTheme=localStorage.getItem('vaibhav-theme');
if(savedTheme==='dark') body.classList.add('dark');
function syncThemeIcon(){themeButton.textContent=body.classList.contains('dark')?'☀':'☾'}
syncThemeIcon();
themeButton.addEventListener('click',()=>{body.classList.toggle('dark');localStorage.setItem('vaibhav-theme',body.classList.contains('dark')?'dark':'light');syncThemeIcon()});
const menuButton=document.querySelector('.menu-toggle'),nav=document.querySelector('.desktop-nav');
menuButton.addEventListener('click',()=>{nav.classList.toggle('open');menuButton.textContent=nav.classList.contains('open')?'✕':'☰'});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton.textContent='☰'}));
const form=document.getElementById('hireForm');
form.addEventListener('submit',e=>{e.preventDefault();const data=new FormData(form);const message=`Hi Vaibhav! I would like to discuss a project.\n\nName: ${data.get('name')}\nEmail: ${data.get('email')}\nService: ${data.get('service')}\nProject details: ${data.get('details')}`;window.open(`https://wa.me/919081219487?text=${encodeURIComponent(message)}`,'_blank','noopener,noreferrer')});
const dot=document.querySelector('.cursor-dot'),ring=document.querySelector('.cursor-ring');
if(matchMedia('(hover:hover) and (pointer:fine)').matches){let x=innerWidth/2,y=innerHeight/2,rx=x,ry=y;addEventListener('mousemove',e=>{x=e.clientX;y=e.clientY;dot.style.left=x+'px';dot.style.top=y+'px'});function animate(){rx+=(x-rx)*.16;ry+=(y-ry)*.16;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(animate)}animate();document.querySelectorAll('a,button,input,textarea,select').forEach(el=>{el.addEventListener('mouseenter',()=>ring.classList.add('hover'));el.addEventListener('mouseleave',()=>ring.classList.remove('hover'))})}
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.tool-card,.project-card,.timeline-item,.certificate-grid a,.services-grid>div').forEach(el=>{el.classList.add('reveal');observer.observe(el)});
