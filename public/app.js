const rock = document.querySelector("#rock");
const papper = document.querySelector("#papper");
const sceaser = document.querySelector("#sceaser");
const poing = document.getElementById("winner");
const help = document.querySelector("#toHide");
const aiPrev = document.querySelector("#hide");


const CPUchoose = [
    'rock.svg',
    'scissors.svg',
    'paper.svg'

];

var commentsSection = document.getElementById("contT");
var section = document.createElement("section");
section.className += "added-s";
commentsSection.appendChild(section);
var heading = document.createElement("img");
heading.className = "img-icons";
section.appendChild(heading);
var headingT = document.createElement("p");
section.appendChild(headingT);
headingT.style.textAlign = "center";


// start botton
document.getElementById("startBtn").addEventListener("click", startTheGame);

// var myCFun = setInterval(counterF, 1000);



function startTheGame() {
    // for (let i = 3; i >= 1; i--) {
    //     setTimeout(() => {
            
    //         document.getElementById("counter").innerText = i;
    //     }, i * 1000);
        
    // }
    document.getElementById("startBtn").style.cssText = "height: 0; opacity: 0;";
    document.querySelector(".multy-player").style.cssText = "height: 0; opacity: 0;";
    // setTimeout(() => {
        document.getElementById("counter").style.cssText = "height: 0; opacity: 0;";
        document.querySelector(".resolt").style.cssText = "opacity: 1; height: 50%; bottom: 5%; margin-bottom: 10%;";
        document.getElementById("cont").style.display ="flex";
        document.querySelector(".btn-cont").style.display ="flex";
        
        // document.getElementById("bg").style.backgroundImage = "none";
        document.getElementById("main").style.cssText = "background-image: url('bg-2.svg'); ";
        document.getElementById("container").classList.add("displayit")
        // }, 3000);
    }


// deffined variables


var cpu_choice = "";
var counter_cpu = 0;
var counter_client = 0;
// functions which incloud another functions inside

function sten() {
    basiCode();
    mainWorks();
    showResolts();
}

function pap() {
    basiCode();
    mainWorksPapper();
    showResolts();
}

function sax() {
    basiCode();
    mainWorksscissors();
    showResolts();
}

// random choice from CPU

function basiCode() {
    if (counter_client <= 4 && counter_cpu <= 4) {
        //styles
        section.style.display = "block";
        // functions
        cpu_choice = CPUchoose[Math.floor(Math.random() * CPUchoose.length)];
        //heading.innerHTML = cpu_choice;
        heading.src = cpu_choice;
        headingT.innerHTML = cpu_choice.replace('.svg', '');

    }
}

// each buttons run a function


// rock botton

function mainWorks() {
    // $("#rockB").fadeIn();
    // $("#paperB").fadeOut();
    // $("#scissorsB").fadeOut();
    // // btns styles
    document.getElementById("rockB").style.display = 'block';
    document.getElementById("scissorsB").style.display = 'none';
    document.getElementById("paperB").style.display = 'none';
    help.style.display = "none";
    aiPrev.style.display = "none";
    // functions
    if (cpu_choice == 'paper.svg') {
        poing.innerHTML = ("CPU WIN! " + (counter_cpu + 1) + " poing");
   
        counter_cpu++;
        document.getElementById("text").innerHTML = counter_cpu;

    } else if (cpu_choice == 'scissors.svg') {
        poing.innerHTML = ("You WIN! " + (counter_client + 1) + " poing");

        counter_client++;
        document.getElementById("text2").innerHTML = counter_client;

    } else if (cpu_choice == 'rock.svg') {
        poing.innerHTML = ("Equal!! continue...");
        document.getElementById("text").innerHTML = counter_cpu;
        document.getElementById("text2").innerHTML = counter_client;
    }
}

// paper botton

function mainWorksPapper() {
    // $("#paperB").fadeIn();
    // $("#rockB").fadeOut();
    // $("#scissorsB").fadeOut();
    // //buttons styles
    document.getElementById("paperB").style.display = 'block';
    document.getElementById("scissorsB").style.display = 'none';
    document.getElementById("rockB").style.display = 'none';

    help.style.display = "none";
    aiPrev.style.display = "none";
    //functions
    if (cpu_choice == 'scissors.svg') {
        poing.innerHTML = ("CPU WIN! " + (counter_cpu + 1) + " poing");

        counter_cpu++;
        document.getElementById("text").innerHTML = counter_cpu;

    } else if (cpu_choice == 'rock.svg') {
        poing.innerHTML = ("You WIN! " + (counter_client + 1) + " poing");

        counter_client++;
        document.getElementById("text2").innerHTML = counter_client;

    } else if (cpu_choice == 'paper.svg') {
        poing.innerHTML = ("Equal!! continue...");
        document.getElementById("text").innerHTML = counter_cpu;
        document.getElementById("text2").innerHTML = counter_client;
    }
}

// scissors button

function mainWorksscissors() {
    // $("#scissorsB").fadeIn();
    // $("#paperB").fadeOut();
    // $("#rockB").fadeOut();
    // //buttons styles
    document.getElementById("scissorsB").style.display = 'block';
    document.getElementById("rockB").style.display = 'none';
    document.getElementById("paperB").style.display = 'none';

    help.style.display = "none";
    aiPrev.style.display = "none";
    //functions
    if (cpu_choice == 'rock.svg') {
        poing.innerHTML = ("CPU WIN! " + (counter_cpu + 1) + " poing");

        counter_cpu++;
        document.getElementById("text").innerHTML = counter_cpu;

    } else if (cpu_choice == 'paper.svg') {
        poing.innerHTML = ("You WIN! " + (counter_client + 1) + " poing");

        counter_client++;
        document.getElementById("text2").innerHTML = counter_client;

    } else if (cpu_choice == 'scissors.svg') {
        poing.innerHTML = ("Equal!! continue...");
        document.getElementById("text").innerHTML = counter_cpu;
        document.getElementById("text2").innerHTML = counter_client;
    }
}

// show final resolt!


function showResolts() {
    if (counter_client == 5) {
        poing.style.display = "none";
        document.getElementById("btns").style.display = "none";
        document.getElementById("cont").style.display = "none";
        document.getElementById("text").style.cssText = "color: #333; font-size: 30px; background: white; padding: 10px; border: 2px solid #3333; margin-bottom: 10px";
        document.getElementById("text2").style.cssText = "color: lightgreen; font-size: 30px; background: white; padding: 10px; border: 2px solid lightgreen; margin-bottom: 10px";
        document.getElementById("finalResolt").style.display = "block";
        document.getElementById("btnRes").style.display = "block";
        document.getElementById("finalResolt").innerHTML = "Chicken!!, You win by: " + (counter_client) + ' Scores.';
        document.getElementById("resolt").appendChild(document.getElementById("restart"));
        document.getElementById("resolt").style.cssText = "opacity: 1; height: fit-content; background: url(73990.png)no-repeat, lightgreen; position: relative;";
    }
    if (counter_cpu == 5) {
        document.getElementById("resolt").appendChild(document.getElementById("restart"));
        document.getElementById("resolt").style.cssText = "opacity: 1; height: fit-content; background: url(73990.png)no-repeat, lightcoral; position: relative;";
        // document.getElementById("resolt").classList.add("fi");
        
        poing.style.display = "none";
        document.getElementById("btns").style.display = "none";
        document.getElementById("cont").style.display = "none";
        document.getElementById("finalResolt").style.display = "block";
        document.getElementById("btnRes").style.display = "block";
        document.getElementById("finalResolt").innerHTML = "You losed by: " + counter_client + ' Scores.';
        document.getElementById("text").style.cssText = "color: lightcoral; font-size: 30px; background: white; padding: 10px; border: 2px solid #333; margin-bottom: 10px";
        document.getElementById("text2").style.cssText = "color: lightcoral; font-size: 30px; background: white; padding: 10px; border: 2px solid #333; margin-bottom: 10px";
    }
}


// added eventlistener
rock.addEventListener("click", sten);
papper.addEventListener("click", pap);
sceaser.addEventListener("click", sax);