
// for dark and light mode 
const darkmodebtn = document.querySelectorAll(".dark-light-mode")
// console.log(darkmodebtn);
const lightmode = document.querySelector(".lightmodes")
const darkmode = document.querySelector(".darkmodes")

darkmodebtn.forEach((data)=>{
    data.addEventListener("click",()=>{
        document.body.classList.toggle("darkmode")
        if(document.body.className === "darkmode"){
        darkmode.style.display = "none"
            lightmode.style.display="block"
        }
        else{
            darkmode.style.display = "block"
            lightmode.style.display="none" 
    
        }
    })
})


// for responsive navbar 

const navbar = document.querySelector(".nav")
const closenavbar = document.querySelector(".close-navbar")
const narbarstart = document.querySelector(".hamburger")

narbarstart.addEventListener("click",()=>{
    navbar.style.right = "18px"
})
closenavbar.addEventListener("click",()=>{
    navbar.style.right = "-100%"
})