/****************************************
 * BACKGROUND IMAGE SLIDER
 */


const buttons = document.querySelectorAll('.btn')
const imageDIV = document.querySelector('.img-container')
let counter = 0

let images = [
    "contBcg-0",
    "contBcg-1",
    "contBcg-2",
    "contBcg-3",
    "contBcg-4"
  ];

buttons.forEach(function(button){
    button.addEventListener('click', function(){
      if (button.classList.contains('btn-left')){
        counter--
        if(counter < 0){
          counter = images.length -1
        }
        imageDIV.style.backgroundImage = `url('./img/${images[counter]}.jpeg')`
      }
      if (button.classList.contains('btn-right')){
        counter++
        if(counter > images.length -1){
          counter = 0
        }
        imageDIV.style.backgroundImage = `url('./img/${images[counter]}.jpeg')`
      }
    })
});