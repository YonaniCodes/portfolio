let skills=document.querySelectorAll('.skill')
skills.forEach(skill=>skill.addEventListener('mouseenter',showSkillIcon))
skills.forEach(skill=>{
    skill.addEventListener('mouseleave', showSkillText)
})
function showSkillIcon(event){
  const skillContainer=event.target
     const skillIcon= skillContainer.lastElementChild
     const skillText=skillContainer.firstElementChild
       skillContainer.style.background="inherit"
       skillText.style.display="none"
       skillIcon.style.display="block"
    

 
}
function showSkillText(event){
 const skillContainer=event.target
 const skillIcon= skillContainer.lastElementChild
 const skillText=skillContainer.firstElementChild
     setTimeout(function ( ){   
      skillText.style.display='block'   
    skillIcon.style.display="none"
    skillContainer.style.background="rgb(97, 76, 201)"
     console.log('here')
 
    },9000)

    
  
   
}