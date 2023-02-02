var x = 0,
    y = 0,
    divTimeout,
    showed = false;

document.querySelector('body').onmousemove = function (e) {
    x = e.clientX;
    y = e.clientY;
}

setInterval(function () {
    let controls = document.querySelectorAll('.controls')
    let buttonn = document.querySelectorAll('.button')
    if (x == 0 && y == 0) {
        // console.log('mouse stopped');
        if (!showed) {
            divTimeout = setTimeout(function () {
                for (let cont of controls)
                    cont.classList.add("hide_element");
                for (let btn of buttonn)
                    btn.classList.add("hide_element");
            }, 3000);
            showed = true;
        }
    } else {
        // console.log('mouse moves');
        for (let cont of controls)
            cont.classList.remove("hide_element");
        for (let btn of buttonn)
            btn.classList.remove("hide_element");
        clearTimeout(divTimeout);
        showed = false;
    }
    x = 0;
    y = 0;
}, 100);

