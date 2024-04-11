const swippers= document.querySelectorAll('.swipper')
swippers.forEach((swipper)=>{
     swipper.addEventListener("click",handleclick)

})
function handleclick(event){
    paginate( event.target.id)
}
paginate('pro-0')
    
function paginate(projectid){
       const projects= document.querySelectorAll('.project')
      projects.forEach((project)=>{
      project.style.display="none"
        const swipperss= document.querySelectorAll('.swipper')
        swipperss.forEach((swipper)=>swipper.style.backgroundColor='lightgray')
      })
      document.querySelector("."+projectid).style.display='flex'
      document.getElementById(projectid).style.backgroundColor='blueviolet'
}

const theameBtn=document.querySelector('.btn-theme')
theameBtn.addEventListener('click',toggleTheme)
function toggleTheme(event){  
    document.body.classList.toggle("dark-theme")?
    localStorage.setItem('theme','dark-theme'):
    localStorage.setItem('theme','light-theme')  
    changeThemeIcon()
 }

 window.onload=()=>{
    const previousTheme=localStorage.getItem('theme')
    document.body.classList.add(previousTheme)   
    changeThemeIcon()
 }
 function changeThemeIcon(){
  if(localStorage.getItem('theme')==='dark-theme'){
   theameBtn.classList.remove( 'fa-moon')
   theameBtn.classList.add('fa-sun')
  }
  else{
   theameBtn.classList.remove('fa-sun')
   theameBtn.classList.add('fa-moon')
  }
  
 }

 const menuebar=document.querySelector('.fa-bars')
menuebar.addEventListener('click',showNavMenu)
function showNavMenu(){
  document.querySelector('.mobile-menue').style.display='block'
  menuebar.style.display='none'
 
}
const closBtn=document.querySelector('.close-btn')
closBtn.addEventListener('click',closeNavMenu)
function closeNavMenu(){
  document.querySelector('.mobile-menue').style.display='none'
  menuebar.style.display='block'
}
 
