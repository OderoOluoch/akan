let daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


let getUserDetails = function(){
    data = document.getElementById("data").value;
    gender = document.getElementById("gender").value
    console.log(data)
    let genDate = new Date(data).getDay();
    console.log(genDate)
    getAkhanName(genDate,gender)
}

let getAkhanName = function(day, gender){
    if(gender === "Male"){
        console.log(day, gender)

    }else if(gender === "Female"){
        console.log(day,gender)
    }

}