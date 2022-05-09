

document.addEventListener("DOMContentLoaded",function(){

let calc = 0;
    let radios1 = document.querySelectorAll("#ethnicity"); 
    for (var i = radios1.length - 1; i >= 0; i--) {
        radios1[i].addEventListener('change',function(){
            localStorage.setItem("ethnicity", this.value)
        })

     }


     let radios2 = document.querySelectorAll("#sex"); 
     for (var i = radios2.length - 1; i >= 0; i--) {
         radios2[i].addEventListener('change',function(){
             localStorage.setItem("sex", this.value)
         })
 
      }

but = document.querySelector("button");
but.addEventListener("click", function(){






})







    })

