let daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let maleKhanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleKhanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

let formValidation = function(){
    let dateData = document.forms["khanEntry"]["data"].value
    let genderData = document.forms["khanEntry"]["gender"].value

    if(dateData == "" || genderData == ""){
      alert("Ensure all inputs are entered correctly to get your Khan name")   
    }else{
        getUserDetails()
    }
}

let getUserDetails = function(){
    let data = document.getElementById("data").value;
    let gender = document.getElementById("gender").value
    let genDate = new Date(data).getDay();
    
    getAkhanName(genDate,gender)
}

let display = document.getElementById("display")

let getAkhanName = function(day, gender){
    if(gender === "Male"){
        display.innerHTML = `<p>Your Akan name is ${maleKhanNames[day]} becuase you were a ${gender} born on ${daysArray[day]}</p>`

    }else if(gender === "Female"){
        display.innerHTML = `<p>Your Akan name is ${femaleKhanNames[day]} becuase you are a ${gender} born on ${daysArray[day]}</p>`
    }
}

let reset = function(){
    location.reload();
} 