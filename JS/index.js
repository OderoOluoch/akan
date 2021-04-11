let daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let maleKhanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleKhanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

let getUserDetails = function(){
    data = document.getElementById("data").value;
    gender = document.getElementById("gender").value
    let genDate = new Date(data).getDay();
    getAkhanName(genDate,gender)
}

let display = document.getElementById("display")

let getAkhanName = function(day, gender){
    if(gender === "Male"){
        display.innerHTML = `<p>Your Akan name is ${maleKhanNames[day]} becuase you were born on ${daysArray[day]}</p>`

    }else if(gender === "Female"){
        display.innerHTML = `<p>Your Akan name is ${femaleKhanNames[day]} becuase you were born on ${daysArray[day]}</p>`
    }
}

let reset = function(){
    location.reload();
} 