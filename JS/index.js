let getUserDetails = function(){
    data = document.getElementById("data").value;
    console.log(data)
    let genDate = new Date(data).getDay();
    console.log(genDate)
}