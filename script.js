const aboutImages = [

"https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80",

"https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=80",

"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",

"https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80",

"https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"

];

let aboutCurrent = 0;

function showAboutImage(){
const aboutImageEl = document.getElementById("aboutImage");
if(aboutImageEl) aboutImageEl.src = aboutImages[aboutCurrent];
}

function nextAbout(){

aboutCurrent++;

if(aboutCurrent >= aboutImages.length){
aboutCurrent = 0;
}

showAboutImage();
}

function prevAbout(){

aboutCurrent--;

if(aboutCurrent < 0){
aboutCurrent = aboutImages.length - 1;
}

showAboutImage();
}

if(document.getElementById("aboutImage")){
setInterval(() => {

nextAbout();

}, 4000);
}

const slides=document.querySelectorAll('.slide');
let current=0;

if(slides.length){
setInterval(()=>{

slides[current].classList.remove('active');

current=(current+1)%slides.length;

slides[current].classList.add('active');

},4000);
}

// fade-in-up/left/right reveal on scroll for elements with .reveal, .reveal-left, .reveal-right
const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
const revealObserver = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if(entry.isIntersecting){
entry.target.classList.add('in-view');
revealObserver.unobserve(entry.target);
}
});
}, { threshold: 0.05, rootMargin: '0px 0px -50px 0px' });
revealEls.forEach(el => revealObserver.observe(el));

// mobile nav toggle
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');
if(navToggle && siteNav){
navToggle.addEventListener('click', () => {
navToggle.classList.toggle('open');
siteNav.classList.toggle('open');
navToggle.setAttribute('aria-expanded', siteNav.classList.contains('open'));
});
siteNav.querySelectorAll('a').forEach(link => {
link.addEventListener('click', () => {
navToggle.classList.remove('open');
siteNav.classList.remove('open');
navToggle.setAttribute('aria-expanded', 'false');
});
});
}

// header scroll state + back-to-top visibility
const header = document.querySelector('header');
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
const scrolled = window.scrollY > 60;
if(header) header.classList.toggle('scrolled', scrolled);
if(backToTop) backToTop.classList.toggle('show', window.scrollY > 400);
});

if(backToTop){
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// animated stats counters
const statNumbers = document.querySelectorAll('.stat-number');
const statsObserver = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if(!entry.isIntersecting) return;
const el = entry.target;
const target = parseInt(el.dataset.count, 10);
const duration = 1500;
const start = performance.now();
function tick(now){
const progress = Math.min((now - start) / duration, 1);
el.textContent = Math.floor(progress * target);
if(progress < 1) requestAnimationFrame(tick);
else el.textContent = target;
}
requestAnimationFrame(tick);
statsObserver.unobserve(el);
});
}, { threshold: 0.4 });
statNumbers.forEach(el => statsObserver.observe(el));
