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
// Project details modal (added without changing existing project layout or functionality)
const projectDetails = [
 {title:'CricketVerse',category:'Web Application · Sports Statistics',description:'CricketVerse is a cricket-focused web experience that presents player profiles and performance statistics in a clean, dashboard-style interface. It makes player information easier to explore and compare.',features:['Player profile and career information','Statistics presented in dashboard cards','Format-based performance filters','Focused, responsive data layout'],tech:['HTML','CSS','JavaScript','Statistics UI']},
 {title:'Hacker Login Form',category:'UI Experiment · Authentication Interface',description:'A dark, hacker-inspired login interface experiment with a high-contrast visual style. The project focuses on form layout, visual hierarchy and a polished authentication screen.',features:['Login form UI','Email or username field','Password field','Remember-me control','Login and sign-up interface elements'],tech:['HTML','CSS','JavaScript','Form UI']},
 {title:'Maa Sai Classes',category:'Education Website · Multi-page Website',description:'A website for Maa Sai Classes that introduces the coaching institute, highlights its courses and provides contact information for prospective students and parents.',features:['Home page','About the institute','Course information for different classes','Contact information and call links','Simple multi-page navigation'],tech:['HTML','CSS','JavaScript','Responsive Web Layout']},
 {title:'Neon Aura AR',category:'Interactive Experience · Real-time Hand Tracking',description:'An interactive browser experience that tracks hand movements and overlays colorful neon visual effects. Users can explore different visual themes while interacting with the live hand-tracking visuals.',features:['Live hand tracking','Gesture-responsive visual effects','Multiple visual themes','Tracking and gesture status panels','Interactive neon graphics'],tech:['HTML','CSS','JavaScript','Hand-tracking / Computer Vision']},
 {title:'Spam Message Detector',category:'AI / Machine Learning · Text Classification',description:'A simple interface for checking SMS text with a spam-detection classifier. Users can enter a message, run a classification, or try example messages.',features:['SMS text input','Message classification interaction','Load example messages','Clear input option','Spam-detection concept'],tech:['HTML','CSS','JavaScript','Text Classification / Machine Learning']},
 {title:'Vidora AI',category:'AI Learning Platform · Video-to-Learning',description:'Vidora AI is designed to help learners turn video content into useful study material. The interface guides users from adding a YouTube video to processing its transcript and exploring learning tools.',features:['YouTube video input','Transcript processing workflow','Notes and summaries','Context-aware Ask AI feature','Exam and MCQ mode'],tech:['HTML','CSS','JavaScript','AI-powered learning workflow']}
];
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card,index)=>{
 const meta=card.querySelector('.project-meta'); if(!meta||!projectDetails[index]) return;
 const arrow=meta.querySelector('.project-arrow');
 if(arrow){const btn=document.createElement('button');btn.className='project-arrow project-details-trigger';btn.type='button';btn.setAttribute('aria-label','View details for '+projectDetails[index].title);btn.textContent='↗';arrow.replaceWith(btn);}
 const view=document.createElement('button');view.type='button';view.className='project-view-details';view.textContent='VIEW PROJECT DETAILS ↗';view.addEventListener('click',()=>openProjectDetails(index));meta.appendChild(view);
 meta.querySelector('.project-details-trigger')?.addEventListener('click',()=>openProjectDetails(index));
});
function openProjectDetails(index){
 const data=projectDetails[index],card=projectCards[index],modal=document.getElementById('project-details-modal');if(!modal||!data)return;
 modal.querySelector('.project-detail-category').textContent=data.category;modal.querySelector('.project-detail-title').textContent=data.title;modal.querySelector('.project-detail-description').textContent=data.description;
 const features=modal.querySelector('.project-detail-features');features.replaceChildren();data.features.forEach(text=>{const li=document.createElement('li');li.textContent=text;features.appendChild(li);});
 const tech=modal.querySelector('.project-detail-tech');tech.replaceChildren();data.tech.forEach(text=>{const span=document.createElement('span');span.textContent=text;tech.appendChild(span);});
 const preview=modal.querySelector('.project-detail-preview');preview.src=card?.querySelector('.project-image img')?.getAttribute('src')||'';preview.alt=data.title+' project preview';
 modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');modal.querySelector('.project-modal-close').focus();
}
function closeProjectDetails(){const modal=document.getElementById('project-details-modal');if(!modal)return;modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');}
const projectModal=document.getElementById('project-details-modal');projectModal?.querySelectorAll('.project-modal-close').forEach(button=>button.addEventListener('click',closeProjectDetails));projectModal?.addEventListener('click',event=>{if(event.target===projectModal)closeProjectDetails();});addEventListener('keydown',event=>{if(event.key==='Escape'&&projectModal?.classList.contains('open'))closeProjectDetails();});
