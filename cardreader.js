
let outPut= document.querySelector('.ret');
outPut.addEventListener('keyup',() => {
if (outPut.value.length == 11) {
          outPut.value = outPut.value + " ";
        if (outPut.value == 'Backspace')
        outPut.value = outPut.value + " ";
        if (outPut.value.length == 14)
        outPut.value = outPut.value + " ";
        document.getElementById('3').focus();
        // document.getElementById('4').focus();
        
      }});
// let pinCard= document.querySelector('.class');
// pinCard.addEventListener('keyUp',() =>{

// })
      
    


    // document.querySelector('input');
    // outPut.addEventListener('keyup', (e) =>{
    //     if (e.key === "Backspace"){
    //         input.textContent+=e.key
    //       }
    //       if ( e.key === "Backspace"){
    //         input.textContent-=e.key
    //       }
    
 



//     var buttons = document.getElementsByClassName('card')
// Array.from(buttons).forEach(function(button){
//     button.addEventListener('keyup', function(event) {
//         if(event.keyCode === 13 || button.value.length === 14) {
//             button.nextElementSibling.focus()
//         }
//     })
// } )