const hamburger= document.querySelector(".hamburger-menu")
const menuList=document.querySelector(".menu-nav")

hamburger.addEventListener("click",()=>{
  if(hamburger.classList.contains("active")){
    hamburger.classList.toggle("active")
    menuList.style.visibility="visible"
  }else{
    hamburger.classList.toggle("active")
    menuList.style.visibility="hidden"
  }
})