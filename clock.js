function run(){
    const now = new Date();
    let hours = now.getHours();
    const meridian = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2,0);
    const mins = now.getMinutes().toString().padStart(2,0);
    const secs = now.getSeconds().toString().padStart(2,0);
    const timing = `${hours}:${mins}:${secs} ${meridian}`;
    document.getElementById("clock").textContent = timing;
}

run();
setInterval(run,1000);





