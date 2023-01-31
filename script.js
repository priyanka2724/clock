const hourEl=document.querySelector(".hours");
const minuteEl=document.querySelector(".minutes");
const secondEl=document.querySelector(".seconds");

function updateClock(){
   const currentDate=new Date();
   //console.log(currentDate);
 setTimeout(updateClock, 1000);
          //console.log(currentDate)
    const hours=currentDate.getHours()
    const minutes=currentDate.getMinutes()
    const seconds=currentDate.getSeconds()
    //console.log(hours,minutes,seconds) 
    const hoursDeg =(hours /12) * 360;   
    hourEl.style.transform = `rotate(${hoursDeg}deg)`;
    const minutesDeg =(minutes /60) * 360;   
    minuteEl.style.transform = `rotate(${minutesDeg}deg)`;
    const secondsDeg =(seconds /60) * 360;   
    secondEl.style.transform = `rotate(${secondsDeg}deg)`;
   
}

updateClock();
//setInterval(updateClock, 1000)