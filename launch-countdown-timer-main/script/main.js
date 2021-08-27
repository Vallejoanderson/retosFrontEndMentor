const countDownDate = new Date("Nov 24, 2021 00:00:00").getTime();

window.onload = function() { setInterval( myTime, 100); }

function myTime(){
    const today = new Date().getTime();
    const timeLeft = countDownDate - today;
    const days = document.getElementById("days");
    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");
    
    let calcdays = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let calchours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let calcminutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let calcseconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    days.textContent = ('0' + calcdays).slice(-2);
    hours.textContent = ('0' + calchours).slice(-2);
    minutes.textContent = ('0' + calcminutes).slice(-2);
    seconds.textContent = ('0' + calcseconds).slice(-2);
}
