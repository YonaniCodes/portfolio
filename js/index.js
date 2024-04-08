

const navLinks= document.querySelectorAll('.nav-link')
navLinks.forEach(link=> link.addEventListener('click',showSection))
function showSection(event){
 navLinks.forEach(link=> link.classList.remove('active-link'))
 event.target.classList.add('active-link')
}





const swippers= document.querySelectorAll('.swipper')
           swippers.forEach((swipper)=>{
            swipper.addEventListener("click",handleclick)
        
           })
           function handleclick(event){
      paginate( event.target.id)
      
    }
    paginate('pro-0')
    function paginate(id){
 
    //  let element = document.getElementById(id)
     const projects= document.querySelectorAll('.project')
           projects.forEach((project)=>{
            project.style.display="none"
             
          const swipperss= document.querySelectorAll('.swipper')
          swipperss.forEach((swipper)=>swipper.style.backgroundColor='lightgray')
 
           })
          

        document.querySelector("."+id).style.display='flex'
  
       document.getElementById(id).style.backgroundColor='blueviolet'
  

    }

