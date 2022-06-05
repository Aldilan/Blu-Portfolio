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
            skillButtonPos = "p-4 xl:p-8 relative w-40 flex items-center justify-center overflow-hidden group before:content-[''] before:w-0 before:h-0 before:bg-slate-600 before:absolute before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2 before:hover:w-full before:hover:h-full before:transition-all before:duration-500 frontend"
            e.target.setAttribute('class', "relative after:content-[''] after:absolute after:left-0 after:-translate-x-1 after:px-10 after:w-full after:hover:w-full xl:after:hover:w-0 after:hover:px-10 after:bg-[#6cdbbf] after:-z-10 after:h-full xl:after:px-10 xl:after:hover:px-10 after:transition-all after:duration-700 text-[#0a182f] hover:text-[#0a182f] transition-all")
        }else if (e.target.textContent == 'Backend') {
            skillButtonPos = "p-4 xl:p-8 relative w-40 flex items-center justify-center overflow-hidden group before:content-[''] before:w-0 before:h-0 before:bg-slate-600 before:absolute before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2 before:hover:w-full before:hover:h-full before:transition-all before:duration-500 backend"
            e.target.setAttribute('class', "relative after:content-[''] after:absolute after:left-0 after:-translate-x-1 after:px-9 after:w-full after:hover:w-full xl:after:hover:w-0 after:hover:px-9 after:bg-[#6cdbbf] after:-z-10 after:h-full xl:after:px-10 xl:after:hover:px-10 after:transition-all after:duration-700 text-[#0a182f] hover:text-[#0a182f] transition-all")
        }else {
            skillButtonPos = "p-4 xl:p-8 relative w-40 flex items-center justify-center overflow-hidden group before:content-[''] before:w-0 before:h-0 before:bg-slate-600 before:absolute before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2 before:hover:w-full before:hover:h-full before:transition-all before:duration-500 other"
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

const projectButtons = document.querySelectorAll('#projects div div a')
const projectImageButtons = document.querySelectorAll('#projects div div img')
projectButtons.forEach(function (projectButton) {
    projectButton.addEventListener('mouseover', function (e) {
        console.log(e.target.textContent)
        let projectImageButton = document.getElementById(e.target.textContent)
        projectImageButton.setAttribute('class', "scale-110 w-96 group-hover:scale-110 group-hover:contrast-50 group-hover:grayscale contrast-100 transiton-all duration-1000")
    })
    projectButton.addEventListener('mouseout', function (e) {
        console.log(e.target.textContent)
        let projectImageButton = document.getElementById(e.target.textContent)
        projectImageButton.setAttribute('class', "w-96 group-hover:scale-110 group-hover:contrast-50 group-hover:grayscale contrast-100 transiton-all duration-1000")
    })
})

const sectionPages = document.querySelectorAll('section')
const pageButtons1 = document.querySelectorAll('.navbar1')
const pageButtons2 = document.querySelectorAll('.navbar2')

window.onscroll = () => {
    sectionPages.forEach(function (sectionPage) {
        let top = window.scrollY;
        let offset = sectionPage.offsetTop-150
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