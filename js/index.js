
let button = document.querySelector('.nav__toggler')
let closeBtn = document.querySelector('.close_btn')
let whoweare = document.querySelector('.whoweare')
let who = document.querySelector('.__who_dropdown')
let service = document.querySelector('.__service_dropdown')
let whoImage = document.querySelector('.whoimg')
let arrowDown = './images/arrow_down.svg'
let arrow_forward = './images/arrow_forward.svg'
let serviceImage = document.querySelector('.serviceimg')
let ourservice = document.querySelector('.ourservice')

// NAVIGATION LINKS
let home = document.querySelector('.home')
let link_our_service = document.querySelector('.link_our_service')
let link_we_do = document.querySelector('.link_we_do')
let __link_what_we_do = document.querySelector('.__link_what_we_do')
__link_what_we_do.addEventListener('click', function(e){
    e.preventDefault()
    link_we_do.classList.add('active')
    home.classList.toggle('active')
    link_our_service.classList.remove('active')
    console.log(home)   
})
link_our_service.addEventListener('click', function(e){
    e.preventDefault()
    let links = document.querySelectorAll('.link_our_service a')
    console.log('links', links)
})
button.addEventListener('click', function() {
    button.style.display = 'none'
    closeBtn.style.display = 'inline'
    document.querySelector('.smal__screen__navigation').style.display = 'block'
})
closeBtn.addEventListener('click', function() {
    service.style.display = "none"
    who.style.display = "none"
    button.style.display = 'inline'
    closeBtn.style.display = 'none'
    whoImage.src = arrow_forward
    serviceImage.src = arrow_forward 
    document.querySelector('.smal__screen__navigation').style.display = 'none'
})
whoweare.addEventListener('click', function(e) {
   e.preventDefault()
   if(who.style.display == "block") {
        who.style.display = "none"
        whoImage.src = arrow_forward
   } else {
        who.style.display = "block"
        whoImage.src = arrowDown
   }
   serviceImage.src = arrow_forward 
   service.style.display = "none"
})
ourservice.addEventListener('click', function(e) {
    e.preventDefault()
    if(service.style.display == "block") {
        service.style.display = "none"
        serviceImage.src = arrowDown 
   } else {
        service.style.display = "block"
        serviceImage.src = arrow_forward 
   }
    
    who.style.display = "none"
    whoImage.src = arrow_forward
})

$(window).scroll(function() {
    $('header').toggleClass('scrolled',$(this).scrollTop() > 0)
})