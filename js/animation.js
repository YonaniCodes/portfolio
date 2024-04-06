let skills=document.querySelectorAll('.skill')
skills.forEach(skill=>skill.addEventListener('mouseenter',showSkillIcon))
skills.forEach(skill=>{
    skill.addEventListener('mouseleave', showSkillText)
})
function showSkillIcon(event){
     let bodyColor=document.body.style.background
    console.log(bodyColor)
    const skillIcon=  event.target .lastElementChild
    const skillText= event.target.firstElementChild
    event.target.style.background="inherit"
     skillText.style.color=" rgb(13, 11, 32)"
    skillIcon.style.display="block"
    console.log('did')
}
function showSkillText(event){
 const targetElement=event.target
 const skillIcon= targetElement.lastElementChild
      setTimeout(function ( ){      
    skillIcon.style.display="none"
    targetElement.style.background="rgb(97, 76, 201)"
     console.log('here')
 
    },5000)

    
  
   
}