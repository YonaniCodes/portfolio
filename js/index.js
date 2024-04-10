const swippers= document.querySelectorAll('.swipper')
swippers.forEach((swipper)=>{
     swipper.addEventListener("click",handleclick)

})
function handleclick(event){
    paginate( event.target.id)
}
paginate('pro-0')
    
function paginate(projectid){
          //  let element = document.getElementById(id)
      const projects= document.querySelectorAll('.project')
      projects.forEach((project)=>{
      project.style.display="none"
        const swipperss= document.querySelectorAll('.swipper')
        swipperss.forEach((swipper)=>swipper.style.backgroundColor='lightgray')
      })
      document.querySelector("."+projectid).style.display='flex'
      document.getElementById(projectid).style.backgroundColor='blueviolet'
}

