//Navbar Button Function

const navbarButtons = document.querySelectorAll('.navbar')
navbarButtons.forEach(function (navbarButton) {
    navbarButton.addEventListener('click', function (e) {
        e.preventDefault()
        navbarButtons.forEach(function (navbarButton) {
            navbarButton.setAttribute('class',"pb-1 relative after:contents-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:hover:w-full after:h-[2px] after:-z-10 after:bg-[#6cdbbf] after:transition-all after:duration-700 navbar")
        })
        e.target.setAttribute('class',"pb-1 relative after:contents-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:hover:w-full after:h-[2px] after:-z-10 after:bg-[#6cdbbf] after:transition-all after:duration-700 navbar")
    })
})


//Navbar Slide Button Function

const slideNavbar = document.getElementById('slideNavbar')
const openSlideNavbar = document.getElementById('openSlideNavbar')
const closeSlideNavbar = document.getElementById('closeSlideNavbar')
openSlideNavbar.addEventListener('click', function (e) {
    slideNavbar.classList.remove('translate-x-full')
    // slideNavbar.classList.add('right-0')
})
closeSlideNavbar.addEventListener('click', function (e) {
    slideNavbar.classList.add('translate-x-full')
    // slideNavbar.classList.remove('right-0')
})

//Skill Button Function

const skillImages = document.querySelectorAll('#skillImages div')
const skillButtons = document.querySelectorAll('#skillButtons div a')
skillButtons.forEach(function (skillButton) {
    skillButton.addEventListener('click', function (e) {
        e.preventDefault()
        let skillButtonPos 
        skillButtons.forEach(function (skillButton) {
            if (skillButton.textContent == 'All') {
                skillButton.setAttribute('class', "relative after:content-[''] after:absolute after:left-0 after:-translate-x-1 after:px-0 after:w-0 after:hover:w-full xl:after:hover:w-0 after:hover:px-4 after:bg-[#6cdbbf] after:-z-10 after:h-full xl:after:hover:px-10 after:transition-all after:duration-700 hover:text-[#0a182f] transition-all")
            }else if (skillButton.textContent == 'Frontend') {
                skillButton.setAttribute('class', "relative after:content-[''] after:absolute after:left-0 after:-translate-x-1 after:px-0 after:w-0 after:hover:w-full xl:after:hover:w-0 after:hover:px-10 after:bg-[#6cdbbf] after:-z-10 after:h-full xl:after:hover:px-10 after:transition-all after:duration-700 hover:text-[#0a182f] transition-all")
            }else if (skillButton.textContent == 'Backend') {
                skillButton.setAttribute('class', "relative after:content-[''] after:absolute after:left-0 after:-translate-x-1 after:px-0 after:w-0 after:hover:w-full xl:after:hover:w-0 after:hover:px-9 after:bg-[#6cdbbf] after:-z-10 after:h-full xl:after:hover:px-10 after:transition-all after:duration-700 hover:text-[#0a182f] transition-all")
            }else {
                skillButton.setAttribute('class', "relative after:content-[''] after:absolute after:left-0 after:-translate-x-1 after:px-0 after:w-0 after:hover:w-full xl:after:hover:w-0 after:hover:px-7 after:bg-[#6cdbbf] after:-z-10 after:h-full xl:after:hover:px-10 after:transition-all after:duration-700 hover:text-[#0a182f] transition-all")
            }
        })

        if (e.target.textContent == 'All') {
            skillButtonPos = 'all'
            e.target.setAttribute('class', "relative after:content-[''] after:absolute after:left-0 after:-translate-x-1 after:px-4 after:w-full after:hover:w-full xl:after:hover:w-0 after:hover:px-4 after:bg-[#6cdbbf] after:-z-10 after:h-full xl:after:px-10 xl:after:hover:px-10 after:transition-all after:duration-700 text-[#0a182f] hover:text-[#0a182f] transition-all")
        }else if (e.target.textContent == 'Frontend') {
            skillButtonPos = "p-4 xl:p-8 relative w-40 flex items-center justify-center overflow-hidden group before:content-[''] before:w-0 before:h-0 before:bg-[#6cdbbf] before:absolute before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2 before:hover:w-full before:hover:h-full before:transition-all before:duration-500 frontend"
            e.target.setAttribute('class', "relative after:content-[''] after:absolute after:left-0 after:-translate-x-1 after:px-10 after:w-full after:hover:w-full xl:after:hover:w-0 after:hover:px-10 after:bg-[#6cdbbf] after:-z-10 after:h-full xl:after:px-10 xl:after:hover:px-10 after:transition-all after:duration-700 text-[#0a182f] hover:text-[#0a182f] transition-all")
        }else if (e.target.textContent == 'Backend') {
            skillButtonPos = "p-4 xl:p-8 relative w-40 flex items-center justify-center overflow-hidden group before:content-[''] before:w-0 before:h-0 before:bg-[#6cdbbf] before:absolute before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2 before:hover:w-full before:hover:h-full before:transition-all before:duration-500 backend"
            e.target.setAttribute('class', "relative after:content-[''] after:absolute after:left-0 after:-translate-x-1 after:px-9 after:w-full after:hover:w-full xl:after:hover:w-0 after:hover:px-9 after:bg-[#6cdbbf] after:-z-10 after:h-full xl:after:px-10 xl:after:hover:px-10 after:transition-all after:duration-700 text-[#0a182f] hover:text-[#0a182f] transition-all")
        }else {
            skillButtonPos = "p-4 xl:p-8 relative w-40 flex items-center justify-center overflow-hidden group before:content-[''] before:w-0 before:h-0 before:bg-[#6cdbbf] before:absolute before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2 before:hover:w-full before:hover:h-full before:transition-all before:duration-500 other"
            e.target.setAttribute('class', "relative after:content-[''] after:absolute after:left-0 after:-translate-x-1 after:px-7 after:w-full after:hover:w-full xl:after:hover:w-0 after:hover:px-7 after:bg-[#6cdbbf] after:-z-10 after:h-full xl:after:px-10 xl:after:hover:px-10 after:transition-all after:duration-700 text-[#0a182f] hover:text-[#0a182f] transition-all")
        }

        if (skillButtonPos != 'all') {
            skillImages.forEach(function (skillImage) {
                if (skillImage.className == skillButtonPos+' hidden' || skillImage.className == skillButtonPos) {
                    skillImage.classList.remove('hidden')
                }else{
                    skillImage.classList.add('hidden')
                    console.log(skillImage.className)
                }
            })
        }else{
            skillImages.forEach(function (skillImage) {
                skillImage.classList.remove('hidden')
            })
        }
    })
})


//Project Button Function

const projectButtons = document.querySelectorAll('#projects div div a')
const projectImageButtons = document.querySelectorAll('#projects div div img')
projectButtons.forEach(function (projectButton) {
    projectButton.addEventListener('mouseover', function (e) {
        console.log(e.target.textContent)
        let projectImageButton = document.getElementById(e.target.textContent)
        projectImageButton.setAttribute('class', "scale-110 w-96 aspect-video group-hover:scale-110 group-hover:contrast-50 group-hover:grayscale contrast-100 transiton-all duration-1000")
    })
    projectButton.addEventListener('mouseout', function (e) {
        console.log(e.target.textContent)
        let projectImageButton = document.getElementById(e.target.textContent)
        projectImageButton.setAttribute('class', "w-96 aspect-video group-hover:scale-110 group-hover:contrast-50 group-hover:grayscale contrast-100 transiton-all duration-1000")
    })
    projectButton.addEventListener('click', function (e) {
        e.preventDefault()
    })
})

const sectionPages = document.querySelectorAll('section')
const pageButtons1 = document.querySelectorAll('.navbar1')
const pageButtons2 = document.querySelectorAll('.navbar2')

window.onscroll = () => {
    sectionPages.forEach(function (sectionPage) {
        let top = window.scrollY;
        let offset = sectionPage.offsetTop - ((sectionPage.id === 'contact') ? 300 : 150)
        let height = sectionPage.offsetHeight
        let id = sectionPage.getAttribute('id');
        if (top >= offset && top < offset + height) {
            pageButtons1.forEach(function (pageButton1) {
                pageButton1.setAttribute('class',"pb-1 relative after:contents-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:hover:w-full after:h-[2px] after:-z-10 after:bg-[#6cdbbf] after:transition-all after:duration-700 navbar1")
                document.querySelector('.navbar1[href*='+id+']').setAttribute('class',"pb-1 relative after:contents-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:hover:w-full after:h-[2px] after:-z-10 after:bg-[#6cdbbf] after:transition-all after:duration-700 navbar1")
            })
            pageButtons2.forEach(function (pageButton2) {
                pageButton2.setAttribute('class',"pb-1 relative after:contents-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:hover:w-full after:h-[2px] after:-z-10 after:bg-[#6cdbbf] after:transition-all after:duration-700 navbar2")
                document.querySelector('.navbar2[href*='+id+']').setAttribute('class',"pb-1 relative after:contents-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:hover:w-full after:h-[2px] after:-z-10 after:bg-[#6cdbbf] after:transition-all after:duration-700 navbar2")
            })
        }
    })
}


//Contact Form Function

const scriptURL = 'https://script.google.com/macros/s/AKfycbwcmnWZDe1DgetvDoP9fZ8p8pFO41M9W9S4FY_tUQe4SRnL8zTvR7TI9qaoWLqMUGOj/exec'
const form = document.forms['nitfolioContact']
const contactNotif = document.getElementById('contactNotif')
const closeNotifContact = document.getElementById('closeNotifContact')
closeNotifContact.addEventListener('click', function (e) {
    contactNotif.classList.replace('-translate-y-36','translate-y-1/2')
})
function autoCloseNotifContact() {
    if (contactNotif.className == "fixed right-4 top-full -translate-y-36 w-60 bg-[#6cdbbf] rounded-md border-2 border-[#0a182f] z-50 transition-all duration-500") {
        contactNotif.classList.replace('-translate-y-36','translate-y-1/2')
    }
}

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        console.log('Success!', response)
        contactNotif.classList.replace('translate-y-1/2', '-translate-y-36')
        setTimeout(() => {
            autoCloseNotifContact()
        }, 7000); 
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})