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