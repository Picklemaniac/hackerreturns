checkTime = (i) => {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

startTime = () => {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('terminal-date').innerHTML = today.getDay() + '/' + today.getMonth() + '/' + today.getFullYear();
    document.getElementById('terminal-time').innerHTML = h + ":" + m + ":" + s;
    t = setTimeout(function () {
        startTime()
    }, 500);
}

victory_content = `

RANSOMWARE BYPASSED;;

EXEC: VICTORY();;

THE WEEKLIES HAVE BEEN SAVED;;

WELL DONE!
`

let goodjob = new Audio('img/victory.mp3');


victory = async () => {
    startTime();
    goodjob.volume = 0.3;
    goodjob.play();
    await new Promise(r => setTimeout(r, 1500));

    i = 0;

    let typer = () => {
        if (i < victory_content.length) {
            if (victory_content.charAt(i) === ";") {
                document.getElementById("terminal").innerHTML += "<br>";
                i++;
                setTimeout(typer, 50);
            } else {
                document.getElementById("terminal").innerHTML += victory_content.charAt(i);
                i++;
                setTimeout(typer, 50);
            }
        }
    }

    await typer()

    await new Promise(r => setTimeout(r, 5000));

    document.getElementById("terminal").innerHTML += "<a class='fade-in-text' target='_blank' href='https://weeklies.enigmatics.org/'><h1>ENTER PASSWORD ON WEEKLIES PAGE</h1></a>"
}