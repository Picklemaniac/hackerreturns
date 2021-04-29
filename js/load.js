/*
* This might be the worst code I have ever written.
* Nothing here will help you with solving the weekly.
* It's embarrassingly bad, I am not even kidding.
*/

let time = 120;

const puzzle1_content = `
Violating backup data: 21:2:2:1; 
Annihilating backup server: 12:15:5:6; 
Tearing up backup data: 24:18:2:1; 
Inserting backup removal software: 1:9:21:2; 
Converting crucial data: 20:1:4:3; 
Advancing backup data removal: 14:22:1:3; 
NAS server deletion: 22:10:10:5; 
Vanishing data traces: 40:5:5:2; 
`;

const puzzle2_content = `
ACTIVATING: H OO - PROTOCOL;;
ACTIVATING: HIO HIO HIO - PROTOCOL; ;
ACTIVATING: LIO LIO - PROTOCOL; ;
ACTIVATING: LAB LAB LAB LAB LAB LAB  - PROTOCOL; ;
;;
PERIODIC REACTIVATION RUNNING;
`;

const puzzle3_content = `
bi -> de | Encrypting....
;;
[1872][2084][2032][1930]
;;
[2392][2000][1984][2400]
;;
[2188][1994][2016][2134][1950]
;;

Encryption process finished....
`;

const puzzle5_content = `
USER CONTROL OVERIDE;;

KEY LOGGER INITIALIZING;;
/.-.. .---- ...--/ ; 
/.-.. ..--- .----/ ; 
/.-. ..--- .----/ ; 
/.-. .---- .----/ ; 
/.-. ..--- ....-/ ; 
/.-.. .---- ....-/ ; 
/.-. .---- ..---/ ; 
/.-.. ..--- ..---/ ;;

KEYLOGGER INITIALIZED
`;

const l1 = `
FINAL SERVER DELETION 1
;
;
torun
;
🠗
;
kutno
;
🠗
;
konin
;
🠗
;
skulsk
;
🠗
;
kowal
;
;
DELETED SUCCESFULLY
`;

const l2 = `
FINAL SERVER DELETION 2
;
;
manchester
;
🠗
;
stoke-on-trent 
;
🠗
;
nottingham
;
🠗
;
sheffield 
;
🠗
;
manchester
;
;
DELETED SUCCESFULLY
`;

const l3 = `
FINAL SERVER DELETION 3
;
;
beaumont-sur-sarthe 
;
🠗
;
le mans 
;
🠗
;
courcebœufs 
;
🠗
;
champagné  
;
🠗
;
saint-célerin 
;
;
DELETED SUCCESFULLY
`;

const l4 = `
FINAL SERVER DELETION 4
;
;
aachen  
;
🠗
;
wurselen  
;
🠗
;
brand 
;
🠗
;
donnerberg
;
;
DELETED SUCCESFULLY
`;

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

countdown = () => {
    if (document.hidden){
        setTimeout(countdown, 1000)
    }
    else {
        time -= 1;
        document.getElementById("countdown").innerText = time;

        if (time === 100) {
            puzzle2()
        } else if (time === 80) {
            puzzle3()
        } else if (time === 60) {
            puzzle4()
        } else if (time === 40) {
            puzzle5()
        } else if (time === 20) {
            puzzle6()
        }
        if (time === 0) {
            endgame();
        }

        if (time > 0) {
            setTimeout(countdown, 1000)
        }
    }
}

start = () => {
    document.getElementById("terminal").innerHTML = "";
    let console1 = document.createElement("div");
    console1.id = "console";
    document.getElementById("terminal").appendChild(console1);
    typewriter()
}

endgame = () => {
    document.getElementById("terminal").innerHTML = "";
    document.getElementById("terminal-right").innerHTML = "";
    document.getElementById("terminal-left").innerHTML = "";

    let youfailed = document.createElement("img")
    youfailed.src = "img/rekt.gif"
    youfailed.className = "finalimg"

    let youfailedtext = document.createElement("p")
    youfailedtext.style.color = "red";
    youfailedtext.innerText = "THE WEEKLY TERMINAL HAS BEEN DESTROYED"

    let retry = document.createElement("btn")
    retry.className = "redbtn"
    retry.innerText = "[REBOOT]"
    retry.addEventListener ("click", async function() {
        document.location.reload(true)
    });

    document.getElementById("terminal").append(youfailed);

    document.getElementById("terminal").append(youfailedtext);
    document.getElementById("terminal").append(retry);

}

let i = 0;
const hackertxt = `
      FORCE: XX0022. ENCYPT://000.222.2345
      TRYPASS: ********* AUTH CODE: ALPHA GAMMA: 1___ PRIORITY 1
      RETRY: GENERATING WEEKLY
      Z:> /WEEKLY/PUZZLE/ EXECUTE -CREATE() 50
      ================================================
      Priority 1 // local / scanning...
      INITIALIZING...
      GENERATING HINTS...
      THEME: 14-20-8 / 12-5-20-20-5-18-19
      GENERATING SECURITY........
      ERROR : BACKDOOR FOUND (23.45.23.12.00000000)
      ...
      BRUTE.EXE -r -z
      ...locating vulnerabilities...
      ...vulnerabilities found...
      INTERNAL SYSTEM ERROR.
`


typewriter = async () => {
    if (i < hackertxt.length) {
        document.getElementById("console").innerHTML += hackertxt.charAt(i);
        i++;
        setTimeout(typewriter, 25);
    } else {
        document.getElementById("console").innerHTML = "";
        document.getElementById("console").style.color = "red";

        const phrases = ['Hello!', 'Your terminal just got destroyed by my OP ransomware!', 'In 2 minutes all the weeklies will be encrypted and destroyed', 'You can only prevent this by entering the correct password, which only I know...', 'You can get the password if you pay me $42069 in bitcoins', 'I mean, unless you accidentally find it through the secret failsafe....', 'But uhm... forget I said that! Just pay me to get your files back!1!', ""];
        const el = document.querySelector('#console');
        const fx = new TextScramble(el);
        let counter = 0;


        const next = async () => {
            fx.setText(phrases[counter]).then(async () => {
                if (counter < 7) {
                    setTimeout(next, 2000);
                } else if (counter == 7) {
                    await new Promise(r => setTimeout(r, 2000));
                    document.getElementById("console").innerHTML = "";
                    startpuzzle();
                    return;
                } else {
                    return;
                }

            });
            counter = (counter + 1) % phrases.length;
        };
        next();
    }
}

startpuzzle = () => {
    if (document.getElementById("console") !== null) {
        document.getElementById("console").remove();
    }
    else {
        document.getElementById("terminal").innerHTML = "";
    }
    let termleft = document.createElement("div");
    termleft.className = "terminal-left";
    termleft.id = "terminal-left";
    let countdowntimer = document.createElement("p");
    countdowntimer.id = "countdown"
    let cool_line = document.createElement("hr");
    termleft.append(countdowntimer);
    termleft.append(cool_line);

    document.getElementById("main").appendChild(termleft);

    let termright = document.createElement("div");
    termright.className = "terminal-right";
    termright.id = "terminal-right";
    document.getElementById("main").appendChild(termright);

    let scarytext = document.createElement("h2")
    scarytext.innerText = "ENTER PASSWORD"

    let forminput = document.createElement("form")
    forminput.id = "answerchecker"
    forminput.method = "POST"
    forminput.action = "script/checkanswer.php"

    textinput = document.createElement("input")
    textinput.name = "password"
    textinput.type = "text"
    textinput.id = "password"

    sendbutton = document.createElement("input")
    sendbutton.type = "submit"
    sendbutton.value = ">>>"

    termbottom = document.createElement("div")
    termbottom.className = "terminal-bottom";
    termbottom.id = "terminal-bottom";

    loadingtext = document.createElement("h5")
    loadingtext.id = "loadingtext"

    termbottom.append(loadingtext)

    document.getElementById("terminal").append(scarytext)
    document.getElementById("terminal").append(forminput)
    document.getElementById("answerchecker").append(textinput)
    document.getElementById("answerchecker").append(sendbutton)
    document.getElementById("terminal").append(termbottom)

    loading();
    countdown();
    puzzle1();
}

messages = [
    'Encrypting files',
    'Destroying valuable puzzle data',
    'Installing bitcoin miner',
    'Doing scary stuff',
    'Commiting proffesional 1337 hacks',
    'Doing something edgy',
    'Adding backdoor',
    'Stealing riddle answers',
    'Destroying stuff',
    'Cracking the system',
    'Grabbing IP address',
    'Hacking into the mainframe',
    'Replacing cooling paste with mayonaise',
]


loading = async () => {
    loadingtext.innerHTML = messages[Math.floor(Math.random() * messages.length)];
    let dotscount = 0

    let dots = window.setInterval(function () {
        if (document.getElementById('loadingtext') !== null) {
            loadingtext = document.getElementById('loadingtext')
            if (dotscount > 3) {
                dotscount = 0;
                loadingtext.innerHTML = messages[Math.floor(Math.random() * messages.length)];
            } else {
                loadingtext.innerHTML += ".";
                dotscount += 1;
            }
        }
    }, 800);

}


puzzle1 = async () => {
    let gen = document.createElement("img")
    gen.className = "leftimg";
    gen.id = "leftimg";
    gen.src = "img/gen.gif";
    document.getElementById("terminal-left").append(gen);

    let consoleright = document.createElement("div");
    consoleright.id = "consoleright";
    document.getElementById("terminal-right").appendChild(consoleright);

    await new Promise(r => setTimeout(r, 2000));

    i = 0;

    let typer = () => {
        if (i < puzzle1_content.length) {
            if (puzzle1_content.charAt(i) === ";") {
                document.getElementById("consoleright").innerHTML += "<br>";
                i++;
                setTimeout(typer, 30);
            } else {
                document.getElementById("consoleright").innerHTML += puzzle1_content.charAt(i);
                i++;
                setTimeout(typer, 30);
            }
        }
    }

    typer()

}

puzzle2 = async () => {
    document.getElementById("consoleright").innerHTML = "";
    document.getElementById("leftimg").src = "img/heisenberg.gif";

    await new Promise(r => setTimeout(r, 2000));

    i = 0;

    let typer2 = () => {
        if (i < puzzle2_content.length) {

            if (puzzle2_content.charAt(i) === ";") {
                document.getElementById("consoleright").innerHTML += "<br>";
                i++;
                setTimeout(typer2, 30);
            } else {
                document.getElementById("consoleright").innerHTML += puzzle2_content.charAt(i);
                i++;
                setTimeout(typer2, 30);
            }
        }
    }

    typer2()
}

puzzle3 = async () => {
    document.getElementById("consoleright").innerHTML = "";
    document.getElementById("leftimg").src = "img/frog.gif";

    await new Promise(r => setTimeout(r, 2000));

    i = 0;

    let typer = () => {
        if (i < puzzle3_content.length) {
            if (puzzle3_content.charAt(i) === ";") {
                document.getElementById("consoleright").innerHTML += "<br>";
                i++;
                setTimeout(typer, 25);
            } else {
                document.getElementById("consoleright").innerHTML += puzzle3_content.charAt(i);
                i++;
                setTimeout(typer, 25);
            }
        }
    }

    typer()
}

puzzle4 = async () => {
    document.getElementById("consoleright").innerHTML = "";
    document.getElementById("leftimg").src = "img/blink.gif";

    let gen = document.createElement("img")
    gen.className = "rightimg";
    gen.id = "rightimg";
    gen.src = "img/unrelatedeffect.gif";
    document.getElementById("terminal-right").appendChild(gen);

    await new Promise(r => setTimeout(r, 1500));

    bli = 0;

    let blinker = async () => {

        if (bli < 4) {
            document.getElementById("leftimg").src = "img/1.jpg";
            await new Promise(r => setTimeout(r, 400));
            document.getElementById("leftimg").src = "img/blink.gif";
            await new Promise(r => setTimeout(r, 200));
            bli++
            blinker();
        } else if (bli < 7) {
            document.getElementById("leftimg").src = "img/2.png";
            await new Promise(r => setTimeout(r, 400));
            document.getElementById("leftimg").src = "img/blink.gif";
            await new Promise(r => setTimeout(r, 200));
            bli++
            blinker();

        } else if (bli < 16) {
            document.getElementById("leftimg").src = "img/3.jpg";
            await new Promise(r => setTimeout(r, 400));
            document.getElementById("leftimg").src = "img/blink.gif";
            await new Promise(r => setTimeout(r, 200));
            bli++
            blinker();
        } else if (bli < 25) {
            document.getElementById("leftimg").src = "img/4.jpg";
            await new Promise(r => setTimeout(r, 400));
            document.getElementById("leftimg").src = "img/blink.gif";
            await new Promise(r => setTimeout(r, 200));
            bli++
            blinker();
        } else {

        }
        //4-3-9-9
    }

    blinker()
}

puzzle5 = async () => {

    let body = document.getElementById("ignore");
    let terminal_bottom = document.getElementById("terminal")

    let notification = document.createElement("p")
    notification.style.color = "red";
    notification.innerText = "KEY LOGGED SUCCESFULLY"

    document.getElementById("consoleright").innerHTML = "";
    document.getElementById("rightimg").remove();
    document.getElementById("leftimg").src = "img/btn.gif";

    let btn1 = document.createElement("button")
    btn1.className = "one";
    body.appendChild(btn1);
    btn1.addEventListener ("click", async function() {
        console.log(`      __`);
        terminal_bottom.append(notification)
        await new Promise(r => setTimeout(r, 1000));
        notification.remove();
    });

    let btn2 = document.createElement("button")
    btn2.className = "two";
    body.appendChild(btn2);
    btn2.addEventListener ("click", async function() {
        console.log(`     / /`);
        terminal_bottom.append(notification)
        await new Promise(r => setTimeout(r, 1000));
        notification.remove();
    });

    let btn3 = document.createElement("button")
    btn3.className = "three";
    body.appendChild(btn3);
    btn3.addEventListener ("click", async function() {
        console.log(`  _                    _    _             `);
        terminal_bottom.append(notification)
        await new Promise(r => setTimeout(r, 1000));
        notification.remove();
    });

    let btn4 = document.createElement("button")
    btn4.className = "four";
    body.appendChild(btn4);
    btn4.addEventListener ("click", async function() {
        console.log(` |_.__/|_|  \\___|\\__,_|_|\\_\\_|_| |_|\\__, |`);
        terminal_bottom.append(notification)
        await new Promise(r => setTimeout(r, 1000));
        notification.remove();
    });

    let btn5 = document.createElement("button")
    btn5.className = "five";
    body.appendChild(btn5);
    btn5.addEventListener ("click", async function() {
        console.log(` | |                  | |  (_)            `);
        terminal_bottom.append(notification)
        await new Promise(r => setTimeout(r, 1000));
        notification.remove();
    });

    let btn6 = document.createElement("button")
    btn6.className = "six";
    body.appendChild(btn6);
    btn6.addEventListener ("click", async function() {
        console.log(`                                    |___/ `);
        terminal_bottom.append(notification)
        await new Promise(r => setTimeout(r, 1000));
        notification.remove();
    });


    let btn7 = document.createElement("button")
    btn7.className = "seven";
    body.appendChild(btn7);
    btn7.addEventListener ("click", async function() {
        console.log(`   / / _ \\/ _\` |/ _\` |`);
        terminal_bottom.append(notification)
        await new Promise(r => setTimeout(r, 1000));
        notification.remove();
    });

    let btn8 = document.createElement("button")
    btn8.className = "eight";
    body.appendChild(btn8);
    btn8.addEventListener ("click", async function() {
        console.log(`  / /  __/ (_| | (_| |`);
        terminal_bottom.append(notification)
        await new Promise(r => setTimeout(r, 1000));
        notification.remove();
    });

    let btn9 = document.createElement("button")
    btn9.className = "nine";
    body.appendChild(btn9);
    btn9.addEventListener ("click", async function() {
        console.log(` | '_ \\| '__/ _ \\/ _\` | |/ / | '_ \\ / _\` |`);
        terminal_bottom.append(notification)
        await new Promise(r => setTimeout(r, 1000));
        notification.remove();
    });

    let btn10 = document.createElement("button")
    btn10.className = "ten";
    body.appendChild(btn10);
    btn10.addEventListener ("click", async function() {
        console.log(`                                     __/ |`);
        terminal_bottom.append(notification)
        await new Promise(r => setTimeout(r, 1000));
        notification.remove();
    });

    let btn11 = document.createElement("button")
    btn11.className = "eleven";
    body.appendChild(btn11);
    btn11.addEventListener ("click", async function() {
        console.log(` /_/ \\___|\\__, |\\__, |`);
        terminal_bottom.append(notification)
        await new Promise(r => setTimeout(r, 1000));
        notification.remove();
    });

    let btn12 = document.createElement("button")
    btn12.className = "twelve";
    body.appendChild(btn12);
    btn12.addEventListener ("click", async function() {
        console.log(`           __/ | __/ |`);
        terminal_bottom.append(notification)
        await new Promise(r => setTimeout(r, 1000));
        notification.remove();
    });

    let btn13 = document.createElement("button")
    btn13.className = "thirteen";
    body.appendChild(btn13);
    btn13.addEventListener ("click", async function() {
        console.log(` | |__  _ __ ___  __ _| | ___ _ __   __ _ `);
        terminal_bottom.append(notification)
        await new Promise(r => setTimeout(r, 1000));
        notification.remove();
    });

    let btn14 = document.createElement("button")
    btn14.className = "fourteen";
    body.appendChild(btn14);
    btn14.addEventListener ("click", async function() {
        console.log(`    / /__  __ _  __ _`);
        terminal_bottom.append(notification)
        await new Promise(r => setTimeout(r, 1000));
        notification.remove();
    });

    let btn15 = document.createElement("button")
    btn15.className = "fifteen";
    body.appendChild(btn15);
    btn15.addEventListener ("click", async function() {
        console.log(`          |___/ |___/ `);
        terminal_bottom.append(notification)
        await new Promise(r => setTimeout(r, 1000));
        notification.remove();
    });

    let btn16 = document.createElement("button")
    btn16.className = "sixteen";
    body.appendChild(btn16);
    btn16.addEventListener ("click", async function() {
        console.log(` | |_) | | |  __/ (_| |   <| | | | | (_| |`);
        terminal_bottom.append(notification)
        await new Promise(r => setTimeout(r, 1000));
        notification.remove();
    });

    i = 0;

    await new Promise(r => setTimeout(r, 2000));

    let typer = () => {
        if (i < puzzle5_content.length) {
            if (puzzle5_content.charAt(i) === ";") {
                document.getElementById("consoleright").innerHTML += "<br>";
                i++;
                setTimeout(typer, 25);
            } else {
                document.getElementById("consoleright").innerHTML += puzzle5_content.charAt(i);
                i++;
                setTimeout(typer, 25);
            }
        }
    }

    typer()
}

puzzle6 = async () => {
    document.getElementById("consoleright").innerHTML = "";
    document.getElementById("leftimg").src = "img/walk.gif";
    await new Promise(r => setTimeout(r, 1000));

    i = 0;

    ltype = 0;

    let l1type = async () => {
        if (ltype === 0) {
            if (i < l1.length) {
                if (l1.charAt(i) === ";") {
                    document.getElementById("consoleright").innerHTML += "<br>";
                    i++;
                    setTimeout(l1type, 20);
                } else {
                    document.getElementById("consoleright").innerHTML += l1.charAt(i);
                    i++;
                    setTimeout(l1type, 20);
                }
            } else {
                i = 0;
                ltype += 1;
                await new Promise(r => setTimeout(r, 1000));
                document.getElementById("consoleright").innerHTML = "";
                l1type()
            }
        } else if (ltype === 1) {
            if (i < l2.length) {
                if (l2.charAt(i) === ";") {
                    document.getElementById("consoleright").innerHTML += "<br>";
                    i++;
                    setTimeout(l1type, 20);
                } else {
                    document.getElementById("consoleright").innerHTML += l2.charAt(i);
                    i++;
                    setTimeout(l1type, 20);
                }
            } else {
                i = 0;
                ltype += 1;
                await new Promise(r => setTimeout(r, 1000));
                document.getElementById("consoleright").innerHTML = "";
                l1type()
            }
        } else if (ltype === 2) {
            if (i < l3.length) {
                if (l3.charAt(i) === ";") {
                    document.getElementById("consoleright").innerHTML += "<br>";
                    i++;
                    setTimeout(l1type, 20);
                } else {
                    document.getElementById("consoleright").innerHTML += l3.charAt(i);
                    i++;
                    setTimeout(l1type, 20);
                }
            } else {
                i = 0;
                ltype += 1;
                await new Promise(r => setTimeout(r, 1000));
                document.getElementById("consoleright").innerHTML = "";
                l1type()
            }
        } else if (ltype === 3) {
            if (i < l4.length) {
                if (l4.charAt(i) === ";") {
                    document.getElementById("consoleright").innerHTML += "<br>";
                    i++;
                    setTimeout(l1type, 20);
                } else {
                    document.getElementById("consoleright").innerHTML += l4.charAt(i);
                    i++;
                    setTimeout(l1type, 20);
                }
            } else {
                i = 0;
                ltype += 1;
                await new Promise(r => setTimeout(r, 2000));
                document.getElementById("consoleright").innerHTML = "";
                l1type()
            }
        }
    }

    l1type();

}