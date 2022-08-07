//mobile
let sharebutton1 = document.querySelector('#share1')
let sharebutton2 = document.querySelector('#share2')
let card = document.querySelector('.card')
let profileSection = document.querySelector('.profile-section')
let socMedSection = document.querySelector('.socmed-section')
let textContainerMobile = document.querySelector('.text-container')



sharebutton1.addEventListener('click',()=>{
    socMedSection.classList.toggle('dropdown')
   
})
sharebutton2.addEventListener('click',()=>{
    socMedSection.classList.toggle('dropdown')
    
})




//desktop
let sharebuttonDesktop = document.querySelector('#share1-desktop')
let shareLinks = document.querySelector('.socmed-section-desktop')
let textContainer = document.querySelector('.text-container-desktop')

sharebuttonDesktop.addEventListener('click',()=>{
    shareLinks.classList.toggle('active')
})



