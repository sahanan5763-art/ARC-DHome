const aboutImages = [

"https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80",

"https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=80",

"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",

"https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80",

"https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"

];

let aboutCurrent = 0;

function showAboutImage(){
document.getElementById("aboutImage").src =
aboutImages[aboutCurrent];
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

setInterval(() => {

nextAbout();

}, 4000);

const slides=document.querySelectorAll('.slide');
let current=0;

setInterval(()=>{

slides[current].classList.remove('active');

current=(current+1)%slides.length;

slides[current].classList.add('active');

},4000);

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
