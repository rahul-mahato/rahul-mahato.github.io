

setInterval(() => {
    console.log("check");
    let n1 = document.querySelector('.name-intro1');
    let n2 = document.querySelector('.name-intro2');
    
    if (n2.classList.contains('d-none')) {
        n2.classList.add('fadeIn');
        n2.classList.remove('d-none');
        n1.classList.add('d-none');
        n2.classList.remove('d-none');
    }
    else{
        n1.classList.add('fadeIn');
        n1.classList.remove('d-none');
        n2.classList.add('d-none');
        n1.classList.remove('d-none');
    }
}, 3000);


let servicesSection  = document.querySelector('.services');
// let home = document.querySelector('.home');
// let headerSection = document.querySelector('.intro');
let aboutSection  = document.querySelector('.about');
let footer = document.querySelector('.footer');
// navlinks
let about = document.getElementById('about');
let services = document.getElementById('services');
let home = document.getElementById('home');


window.addEventListener('scroll',(e)=>{
    
    if(window.scrollY > aboutSection.offsetTop ){
        document.getElementById('navbarNavAltMarkup').classList.add('bg-dark2')
    }
    else{
        document.getElementById('navbarNavAltMarkup').classList.remove('bg-dark2')
    }

    // aboutactive
    if(window.scrollY  > aboutSection.offsetTop         && window.scrollY < servicesSection.offsetTop-80){
        about.classList.add('active');
        home.classList.remove('active');
        services.classList.remove('active');
        console.log("act")        
    }
    // serviceactive
    else if(window.scrollY >= servicesSection.offsetTop-80 && window.scrollY < footer.offsetTop){
        services.classList.add('active');
        home.classList.remove('active');
        about.classList.remove('active');
        console.log("act")        
    }
    else{
        services.classList.remove('active');
        home.classList.add('active');
        about.classList.remove('active');
    }

})
// if(window.scrollY === about.offsetHeight )