
//selector
const result = document.querySelector(".outputResult");
const output = document.querySelector(".inputResult");
const keys = document.querySelectorAll("button");
keys.forEach(element => {
    element.addEventListener("click", calculate)
});


function calculate(){
    let buttonText = this.innerText;
   
    if(buttonText == "AC"){
        output.innerText = ""
        result.innerText = 0
        return 
    }
    if(buttonText == "="){
        result.innerText = eval(output.innerText)
        return 
    }
    if(buttonText == "Del"){
        output.textContent = output.textContent.substr(0,output.textContent.length-1)
    
        return
    }
   
   
    else{

        output.textContent += buttonText;
        return 
    }
    
    
}
