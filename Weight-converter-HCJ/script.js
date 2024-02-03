const input = document.getElementById("input");
const error = document.getElementById("error");
const result = document.getElementById("result");

let errorTime;
let resultTime;



function updateResult(){
    if(input.value < 0 || isNaN(input.value)){
        error.innerText = `${input.value} is not a valid number :(`;

        clearTimeout(errorTime);
        errorTime = setTimeout(() => {
            error.innerText = "";
            input.value = "";
        },2000)
    }
    else{
        result.innerText = (+input.value / 2.2).toFixed(2);
        clearTimeout(resultTime);
        resultTime = setTimeout(()=>{
            result.innerText = "";
            input.value = "";
        }, 15000)
    }
}

input.addEventListener("input", updateResult);