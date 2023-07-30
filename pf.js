const navmenu=document.getElementById("nav-menu"),
      navtoggle=document.getElementById("toggle"),
      navclose=document.getElementById("close")

if (navtoggle){
    navtoggle.addEventListener('click',()=>{
        navmenu.classList.add('show-menu');
    })

}
if (navclose){
    navclose.addEventListener('click',()=>{
        navmenu.classList.remove('show-menu');
    })
}
const navlink=document.querySelectorAll(".navlink")
navlink.forEach(n => n.addEventListener('click',()=>{
    const navmenu=document.getElementById("nav-menu");
    navmenu.classList.remove('show-menu');
}))

const blurHeader = ()=>{
    const header=document.getElementById('header')
    this.scrollY >=50 ? header.classList.add('blur-header')
                     : header.classList.remove("blur-header")
}
window.addEventListener("scroll",blurHeader)

const scrollUp=()=>{
    const scrollUp=document.getElementById('scroll-up')
    this.scrollY>=350?scrollUP.classList.add('show-scroll')
                     :scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)

// scroll section active link
const sections =document.querySelectorAll('section[id]')

const scrollActive=()=>{
    const scrollY=window.pageYOffset;
    sections.forEach(current=>{
        const sectionHeight=current.offsetHeight,
        sectionTop=current.offsetTop-58,
        sectionId=current.getAttribute('id'),
        sectionsClass=document.querySelector('.nav_menu a[href*=' +sectionId)

    if(scrollY>sectionTop&&scrollY<=sectionTop+sectionHeight){
        sectionsClass.classList.add('active-link')
    }
    else{
        sectionsClass.classList.remove('active-link')
    }
    })

}
window.addEventListener('scroll',scrollActive);

// ===========SCROLL REVEAL ANIMATION==========//

const sr=ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:3000,
    delay:400

})
sr.reveal(`.home-data`)
sr.reveal(`.skill_box`)
sr.reveal(`.project_card`,{origin:'left'})
sr.reveal(`.photo`,{delay:600,distance:'100px',interval:100})
sr.reveal(`.about_data`,{origin:'right'})
sr.reveal(`.about_image`,{origin:'left'})
sr.reveal(`.contact-image`,{origin:'left'})
sr.reveal(`.contact_data`,{origin:'right'})