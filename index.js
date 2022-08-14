let name = prompt("Adinizi Giriniz: ")
let myName = document.querySelector("#myName")

if (name){
    myName.innerHTML=name
}else{
    alert("Lutfen bir isim giriniz!")
}
function showTime(){
    var currentdate = new Date(); 
    var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    
    document.getElementById("myClock").innerHTML= datetime
    setTimeout(showTime,1000)
}

showTime();