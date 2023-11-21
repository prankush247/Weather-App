setInterval(function(){
    let a = new Date();
    let h = a.getHours();
    let h1 = ("0" + h).slice(-2);
    let box0 = document.getElementById("box0");

    if (h1>=5 && h1<12) {
        box0.innerHTML = `<p>Good Morning!</p>`;
    } else if (h1 >= 12 && h1 <= 16) {
        box0.innerHTML = `<p>Good Afternoon !</p>`;
    } else if (h1 > 16 && h1 <= 19) {
        box0.innerHTML = `<p>Good Evening !</p>`;
    } else {
        box0.innerHTML = `<p>Good Night !</p>`;
    }
    console.log(h1);
}, 1000);
