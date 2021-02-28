
function setElements() {
    const hutao = new Date('March 2, 2021 15:0:0').getTime();
    const currentDate = new Date().getTime();
    let t = hutao - currentDate; 
    if (t >= 0) {

        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((t % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = mins;
        document.getElementById("seconds").innerText = secs;
    }
    else {
        document.getElementsByClassName("time")[0].innerText = "SHE IS HERE";
        document.getElementsByClassName("time")[0].style.fontSize = "100px";

    }
}
setElements();

setInterval(() => {
    setElements();
}, 1000);
