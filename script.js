let about=document.getElementById('about');
let services=document.getElementById('services');
let portfolio=document.getElementById('portfolio');
let certifications=document.getElementById('certifications');
let contact=document.getElementById('contact');
window.addEventListener('scroll',()=>{
    let value=window.scrollY;

    about.style.marginBottom=value *2.5 + 'px';
    services.style.marginBottom=value * -1.5 +'px';
    portfolio.style.marginBottom=value * 1.5 +'px';
    certifications.style.marginBottom=value * 1.5 +'px';
    contact.style.marginBottom=value * 0.5 +'px';

});