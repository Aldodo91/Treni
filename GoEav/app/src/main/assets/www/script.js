function clock() {
    move()
    myTimer = setInterval(myClock, 1000);
    var c = 7200; //Initially set to 1 hour
    var data = new Date();
    var giorno =data.getDate();
    var mese = data.getMonth()+1;
    var anno = data.getFullYear();
    var ora = data.getHours();
    var minuti = data.getMinutes();
    var secondi = data.getSeconds();
    if(minuti.toString().length==1) minuti = '0'+minuti;
    if(secondi.toString().length==1) secondi = '0'+secondi;
    if(ora.toString().length==1) ora = '0'+ora;
    document.getElementById('dataOggi').innerHTML = `${giorno}/${mese}/${anno} ${ora}:${minuti}:${secondi}`;
    document.getElementById('dataemit').innerHTML = `${giorno}/${mese}/${anno} ${ora}:${(minuti-5)&60}:${secondi}`;

    function myClock() {
        // conto alla rovescia
        --c
        var seconds = c % 60;
        var secondsInMinutes = (c - seconds) / 60;
        var minutes = secondsInMinutes % 60;
        var hours = (secondsInMinutes - minutes) / 60;
        if(minutes.toString().length==1) minutes = '0'+minutes;
        if(seconds.toString().length==1) seconds = '0'+seconds;
        document.getElementById("remtime").innerHTML = `0${hours}:${minutes}:${seconds}`
        if (c == 0) {
            clearInterval(myTimer);
        }
        // conto in avanti
        let d = new Date()
        let minuti= d.getMinutes();
        let secondi=d.getSeconds();
        if(secondi.toString().length == 1) secondi = '0'+secondi;
        if(minuti.toString().length==1) minuti = '0'+ minuti;
        document.getElementById('current-time').innerHTML = `${d.getHours()}:${minuti}:${secondi}`
    }
}
// animazione progress barr
var i = 0;
function move() {
    let colors = new Array('orangered', 'brown');
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var width = 98;
        elem.style.background = `linear-gradient(${colors[0]} ,${colors[1]})`
        var id = setInterval(frame, 1000);
        function frame() {
            if (width <= 1) {
                clearInterval(id);
                i = 0;
                move();
            } else {
                width--;
                elem.style.width = width + "%";
            }
        }
    }
}