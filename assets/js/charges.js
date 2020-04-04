



let footer = document.getElementById('footerSection');

let contact = document.querySelectorAll('.contactnav');
let pricing = document.querySelectorAll('.pricingnav');


window.addEventListener('scroll', (e) => {

    // if (window.scrollY > aboutSection.offsetTop) {
    //     document.getElementById('navbarNavAltMarkup').classList.add('bg-dark2')
    //     document.querySelector('.navbar').style.boxShadow = "#6e0a1e 0px 0px 15px 1px"
    // }
    // else {
    //     document.getElementById('navbarNavAltMarkup').classList.remove('bg-dark2')
    //     document.querySelector('.navbar').style.boxShadow = "none"
    // }


    //contact
    if (window.scrollY >= footer.offsetTop - 1200) {
        pricing.forEach(ele => ele.classList.remove('active'));
        contact.forEach(element => {
            element.classList.add('active');
        })
    }
    else {
        pricing.forEach(ele => ele.classList.add('active'));
        contact.forEach(element => {
            element.classList.remove('active');
        })
        // about.classList.remove('active');
    }

});

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.display = "none";
    document.querySelector(".sidebar-overlay").style.display = "block";

}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.display = "block";
    document.querySelector(".sidebar-overlay").style.display = "none";
}
