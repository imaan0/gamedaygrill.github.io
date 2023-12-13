const carousel = document.querySelector(".carousel"); 
const arrowBtn = document.querySelectorAll(".wrapper i"); 
const firstCardWidth = carousel.querySelector(".card").offsetWidth; 

arrowBtn.forEach(btn => {
  btn.addEventListener("click", ()=>{
    carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth; 

  })
})

//https://www.youtube.com/watch?v=6QE8dXq9SOE