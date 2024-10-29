let buttons = document.querySelectorAll(".keys button");
let inputField = document.querySelector(".screen input");
let string='';
Array.from(buttons).forEach(button => {
    button.addEventListener("click", (e) => {
        if(e.target.innerHTML=='C'){
            string='';
            inputField.value = string;
        }
        else if(e.target.innerHTML=='='){
            let newStr = string.replace('x', '*');
            newStr= eval(newStr);
            inputField.value = newStr;
        }
        else{
            if(e.target.innerHTML=='+/-'){

                if (inputField.value) {
                    inputField.value = -parseFloat(inputField.value);
                    string=inputField.value;
                }
            
                    }
                    if(e.target.innerHTML=='x'){
                        inputField.value+= 'x'; 
                        string+='x';
                    }
          else{
            string+=e.target.innerHTML;
            inputField.value = string;

          }
        }
    });
});

