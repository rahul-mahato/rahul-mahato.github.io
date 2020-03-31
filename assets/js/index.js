

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
    else {
        n1.classList.add('fadeIn');
        n1.classList.remove('d-none');
        n2.classList.add('d-none');
        n1.classList.remove('d-none');
    }
}, 3000);


let servicesSection = document.querySelector('.services');
// let home = document.querySelector('.home');
// let headerSection = document.querySelector('.intro');
let aboutSection = document.querySelector('.about');
let footer = document.getElementById('footerSection');
// navlinks
let about = document.querySelectorAll('.aboutnav');
let services = document.querySelectorAll('.servicenav');
let home = document.querySelectorAll('.homenav');
let contact = document.querySelectorAll('.contactnav');
console.log(about)

window.addEventListener('scroll', (e) => {

    if (window.scrollY > aboutSection.offsetTop) {
        document.getElementById('navbarNavAltMarkup').classList.add('bg-dark2')
        document.querySelector('.navbar').style.boxShadow = "#6e0a1e 0px 0px 15px 1px"
    }
    else {
        document.getElementById('navbarNavAltMarkup').classList.remove('bg-dark2')
        document.querySelector('.navbar').style.boxShadow = "none"
    }

    if (window.scrollY > aboutSection.offsetTop && window.scrollY < servicesSection.offsetTop -90) {
        // about.classList.add('active');
        home.forEach(e=>{
            e.classList.remove('active');
        })
        services.forEach(e=>{
            e.classList.remove('active');
        })
        about.forEach(element => {
            element.classList.add('active');
        })
        contact.forEach(element => {
            element.classList.remove('active');
        })
    }

    else if (window.scrollY >= servicesSection.offsetTop - 80 && window.scrollY < footer.offsetTop -100) {
        services.forEach(e=>{e.classList.add('active')});
        home.forEach(e=>{e.classList.remove('active')});
        about.forEach(element => {
            element.classList.remove('active');
        })
        contact.forEach(element => {
            element.classList.remove('active');
        })
        
    }
    //contact
    else if (window.scrollY >= footer.offsetTop - 1200) {
        services.forEach(e=>e.classList.remove('active'))
        home.forEach(e=>e.classList.remove('active'));
        about.forEach(e=>e.classList.remove('active'));
        contact.forEach(element => {
            element.classList.add('active');
        })   
    }
    else {
        services.forEach(e=>e.classList.remove('active'))
        home.forEach(e=>e.classList.add('active'));
        about.forEach(e=>e.classList.remove('active'));
        contact.forEach(element => {
            element.classList.remove('active');
        }) 
        // about.classList.remove('active');
    }

})
// if(window.scrollY === about.offsetHeight )


let sidebar = 0;
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.display = "none";
    sidebar = 1;
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.display = "block";
    sidebar = 0;
}

if (sidebar) {
    document.querySelector('.body').addEventListener('click', (e) => closeNav);
}
