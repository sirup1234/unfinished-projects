const spans = document.querySelectorAll(".progress-bar span")
spans.forEach((span)=>{
span.style.width=span.id
span.innerHTML=span.id

})

window.addEventListener("scroll",function(){
    let getit= this.window.pageYOffset
    
    // console.log(getit)
    let getposition = document.getElementById("read-cards")
  let different = (Math.floor(getit))
   let storeatri= getposition.getAttribute("id")
  let offser =  storeatri.offsetTop
  console.log(offser)
  
  if(different == offser){
    getposition.style.transform=("change")
  }

})
