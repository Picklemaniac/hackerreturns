/*
* This might be the worst code I have ever written.
* Nothing here will help you with solving the weekly.
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
ACTIVATING: H OO - PROTOCOL;
ACTIVATING: HIO HIO HIO - PROTOCOL; 
ACTIVATING: LIO LIO - PROTOCOL; 
ACTIVATING: LAB LAB LAB LAB LAB LAB  - PROTOCOL; 
;;;
PERIODIC REACTIVATION RUNNING;
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
skusk
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
stoke on trent 
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

countdown = () => {
    time -= 1;
    document.getElementById("countdown").innerText = time;
    setTimeout(countdown, 1000)

    if (time === 100) {
        puzzle2()
    }
    else if (time === 80){
        puzzle3()
    }
    else if (time === 60){
        puzzle4()
    }
    else if (time === 40){
        puzzle5()
    }
    else if (time === 20){
        puzzle6()
    }
    if (time === 0) {
        alert("Time is up!")
        return;
    }
}

start = () => {
    document.getElementById("terminal").innerHTML = "";
    let console1 = document.createElement("div");
    console1.id = "console";
    document.getElementById("terminal").appendChild(console1);
    typewriter()
}

let i = 0;
const hackertxt = `
\`FORCE: XX0022. ENCYPT://000.222.2345
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
      ERROR : BACKDOOR FOUND (13.66.23.12.00110000)
      ERROR : BACKDOOR FOUND (13.66.23.12.00110044)
      ...
      ...
      BRUTE.EXE -r -z
      ...locating vulnerabilities...
      ...vulnerabilities found...
      MCP/> DEPLOY CLU
      SCAN: __
      INTERNAL SYSTEM ERROR.
`



typewriter = async () => {
    if (i < hackertxt.length) {
        document.getElementById("console").innerHTML += hackertxt.charAt(i);
        i++;
        setTimeout(typewriter, 1);
    }
    else{
        document.getElementById("console").innerHTML = "";
        document.getElementById("console").style.color = "red";

        const phrases = ['Hello!', 'Your terminal just got destroyed by my OP ransomware!', 'In 2 minutes all your files will be encrypted, making them unusable', 'They will become usuable again if you enter the correct password...', 'You can get the password if you pay me $42069 in bitcoins', 'Unless you find it the other way....', 'But don\'t try to do that!', ""];
        const el = document.querySelector('#console');
        const fx = new TextScramble(el);
        let counter = 0;



        const next = async () => {
            fx.setText(phrases[counter]).then( async () => {
                if (counter < 7){
                    setTimeout(next, 50);
                }
                else if (counter == 7){
                    await new Promise(r => setTimeout(r, 2000));
                    document.getElementById("console").innerHTML = "";
                    startpuzzle();
                    return;
                }
                else{
                    return;
                }

            });
            counter = (counter + 1) % phrases.length;
        };
        next();
    }
}

startpuzzle = () => {
    document.getElementById("console").remove();
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
    forminput.method = "POST"
    forminput.action = "script/checkanswer.php"

    textinput = document.createElement("input")
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
    document.getElementById("terminal").append(textinput)
    document.getElementById("terminal").append(sendbutton)
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

    let dots = window.setInterval( function() {
        loadingtext = document.getElementById('loadingtext')
        if ( dotscount > 3 ){
            dotscount = 0;
            loadingtext.innerHTML = messages[Math.floor(Math.random() * messages.length)];
        }
        else{
            loadingtext.innerHTML += ".";
            dotscount += 1;
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
            }
            else {
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
            }
            else {
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

    bli = 1;

    let blinker = async () => {

        if (bli < 4){
            document.getElementById("leftimg").src = "img/1.jpg";
            await new Promise(r => setTimeout(r, 400));
            document.getElementById("leftimg").src = "img/blink.gif";
            await new Promise(r => setTimeout(r, 200));
            bli++
            blinker();
        }
        else if (bli <= 7) {
            document.getElementById("leftimg").src = "img/2.png";
            await new Promise(r => setTimeout(r, 400));
            document.getElementById("leftimg").src = "img/blink.gif";
            await new Promise(r => setTimeout(r, 200));
            bli++
            blinker();

        }
        else if (bli <= 16) {
            document.getElementById("leftimg").src = "img/3.jpg";
            await new Promise(r => setTimeout(r, 400));
            document.getElementById("leftimg").src = "img/blink.gif";
            await new Promise(r => setTimeout(r, 200));
            bli++
            blinker();
        }
        else if (bli <= 25){
            document.getElementById("leftimg").src = "img/4.jpg";
            await new Promise(r => setTimeout(r, 400));
            document.getElementById("leftimg").src = "img/blink.gif";
            await new Promise(r => setTimeout(r, 200));
            bli++
            blinker();
        }
        else {

        }
        //4-3-9-9
    }

    blinker()
}

puzzle5 = async () => {
    document.getElementById("consoleright").innerHTML = "";
    document.getElementById("leftimg").src = ".gif";

}

puzzle6 = async () => {
    document.getElementById("consoleright").innerHTML = "";
    document.getElementById("rightimg").remove();
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
                }
                else {
                    document.getElementById("consoleright").innerHTML += l1.charAt(i);
                    i++;
                    setTimeout(l1type, 20);
                }
            }
            else {
                i = 0;
                ltype += 1;
                await new Promise(r => setTimeout(r, 1000));
                document.getElementById("consoleright").innerHTML = "";
                l1type()
            }
        }
        else if (ltype === 1) {
            if (i < l2.length) {
                if (l2.charAt(i) === ";") {
                    document.getElementById("consoleright").innerHTML += "<br>";
                    i++;
                    setTimeout(l1type, 20);
                }
                else {
                    document.getElementById("consoleright").innerHTML += l2.charAt(i);
                    i++;
                    setTimeout(l1type, 20);
                }
            }
            else {
                i = 0;
                ltype += 1;
                await new Promise(r => setTimeout(r, 1000));
                document.getElementById("consoleright").innerHTML = "";
                l1type()
            }
        }
        else if (ltype === 2) {
            if (i < l3.length) {
                if (l3.charAt(i) === ";") {
                    document.getElementById("consoleright").innerHTML += "<br>";
                    i++;
                    setTimeout(l1type, 20);
                }
                else {
                    document.getElementById("consoleright").innerHTML += l3.charAt(i);
                    i++;
                    setTimeout(l1type, 20);
                }
            }
            else {
                i = 0;
                ltype += 1;
                await new Promise(r => setTimeout(r, 1000));
                document.getElementById("consoleright").innerHTML = "";
                l1type()
            }
        }
        else if (ltype === 3) {
            if (i < l4.length) {
                if (l4.charAt(i) === ";") {
                    document.getElementById("consoleright").innerHTML += "<br>";
                    i++;
                    setTimeout(l1type, 20);
                }
                else {
                    document.getElementById("consoleright").innerHTML += l4.charAt(i);
                    i++;
                    setTimeout(l1type, 20);
                }
            }
            else {
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