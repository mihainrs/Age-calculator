let day = document.getElementById("day-input");
let month = document.getElementById("month-input");
let year = document.getElementById("year-input");
let input = document.querySelectorAll(".dob-input");
let button = document.querySelector(".image");
let errorMsg = document.querySelectorAll(".error-text")
let dayResult = document.querySelector(".day-result");
let monthResult = document.querySelector(".month-result");
let yearResult = document.querySelector(".year-result");




// getting today's date

const date = new Date();

let currentDay= date.getDate();

let currentMonth=date.getMonth() + 1;

let currentYear=date.getFullYear();


// displaying errors if inputs are not filed in + math for the result

button.addEventListener("click", ()=>{
    if(day.value === ""){
        errorMsg[0].style.display="flex";
    } else{
        dayResult.innerHTML = day.value - currentDay;
    }

    if(month.value === ""){
        errorMsg[1].style.display="flex";
    } else{
        monthResult.innerHTML = Math.abs(month.value - currentMonth - 12);
    }

    if(year.value === ""){
        errorMsg[2].style.display="flex";
    }else{
        yearResult.innerHTML = Math.abs(year.value - currentYear)-1;
    }
})

// taking each input and making sure everything's valid

day.addEventListener("input", ()=>{
    if(day.value ==""){
        errorMsg[0].style.display="flex";
        errorMsg[0].innerHTML = "This field is required";
    }else if(day.value >31){
        errorMsg[0].style.display="flex";
        errorMsg[0].innerHTML = "Must be a valid day";
    } else
    errorMsg[0].style.display="none";

})

month.addEventListener("input", ()=>{
    if(month.value ==""){
        errorMsg[1].style.display="flex";
        errorMsg[1].innerHTML = "This field is required";
    }else if(month.value >13){
        errorMsg[1].style.display="flex";
        errorMsg[1].innerHTML = "Must be a valid month";
    } else
    errorMsg[1].style.display="none";
})

year.addEventListener("input", ()=>{
    if(year.value ==""){
        errorMsg[2].style.display="flex";
        errorMsg[2].innerHTML = "This field is required";
    }else if(year.value >2020 || year.value < 1930){
        errorMsg[2].style.display="flex";
        errorMsg[2].innerHTML = "Must be a valid year";
    } else
    errorMsg[2].style.display="none";
})

