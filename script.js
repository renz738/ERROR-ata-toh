
// ==============================
// ELEMENTS
// ==============================

const intro = document.getElementById("intro");

const loadingText = document.getElementById("loadingText");

const startBtn = document.getElementById("startBtn");

const ticketPopup = document.getElementById("ticketPopup");

const yesBtn = document.getElementById("yesBtn");

const noBtn = document.getElementById("noBtn");

const celebration = document.getElementById("celebration");

const restartBtn = document.getElementById("restartBtn");

const typewriter = document.getElementById("typewriter");

const hearts = document.getElementById("heartContainer");

const sparkles = document.getElementById("sparkles");

const particles = document.getElementById("particles");

const webs = document.getElementById("webs");

// ==============================
// LOADING TEXT
// ==============================

const loadingMessages = [

    "Preparing your mission...",

    "Loading city skyline...",

    "Getting everything ready...",

    "Almost there...",

    "Mission Ready!"

];

let loadingIndex = 0;

const loadingInterval = setInterval(() => {

    loadingText.textContent = loadingMessages[loadingIndex];

    loadingIndex++;

    if (loadingIndex >= loadingMessages.length) {

        clearInterval(loadingInterval);

    }

},1000);

// ==============================
// HIDE INTRO
// ==============================

setTimeout(()=>{

    intro.style.display="none";

},5000);

// ==============================
// OPEN MOVIE TICKET
// ==============================

startBtn.addEventListener("click",()=>{

    ticketPopup.style.display="flex";

    ticketPopup.classList.add("fade-in");

    startTypewriter();

});

// ==============================
// TYPEWRITER
// ==============================

const message = `Hi!
Would you like to watch the new Spider-Man movie with me?
its my treat since im the one whos inviting you 😁.`;

let index = 0;

function startTypewriter(){

    typewriter.innerHTML="";

    index=0;

    clearInterval(typewriterInterval);

    typewriterInterval=setInterval(typeEffect,40);

}

let typewriterInterval;

function typeEffect(){

    if(index<message.length){

        typewriter.innerHTML+=message.charAt(index);

        index++;

    }

    else{

        clearInterval(typewriterInterval);

    }

}

/* ==========================================================
SCRIPT.JS
PART 2 OF 5
Paste directly below Part 1
========================================================== */

// ===================================
// YES BUTTON
// ===================================

yesBtn.addEventListener("click", () => {

    ticketPopup.style.display = "none";

    celebration.style.display = "flex";

    createConfetti();

    createHearts();

    createSparkles();

});

// ===================================
// RESTART
// ===================================

restartBtn.addEventListener("click", () => {

    celebration.style.display = "none";

    ticketPopup.style.display = "none";

    typewriter.innerHTML = "";

});

// ===================================
// ESCAPING BUTTON (Desktop)
// ===================================

function moveNoButton() {

    const ticket = document.querySelector(".ticket");

    const maxX = ticket.clientWidth - noBtn.offsetWidth - 30;
    const maxY = ticket.clientHeight - noBtn.offsetHeight - 30;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "absolute";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

}

// Mouse gets close

noBtn.addEventListener("mouseenter", moveNoButton);

// ===================================
// MOBILE SUPPORT
// ===================================

noBtn.addEventListener("touchstart", function(e){

    e.preventDefault();

    moveNoButton();

});

// ===================================
// EXTRA MOBILE SUPPORT
// ===================================

noBtn.addEventListener("click", function(e){

    e.preventDefault();

    moveNoButton();

});

// ===================================
// LITTLE SHAKE WHEN CLICKING START
// ===================================

startBtn.addEventListener("click", ()=>{

    startBtn.style.transform="scale(.92)";

    setTimeout(()=>{

        startBtn.style.transform="scale(1)";

    },150);

});

// ===================================
// CLOSE POPUP WITH ESC
// ===================================

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        ticketPopup.style.display="none";

    }

});

// ===================================
// FLOATING HEARTS
// ===================================

function createHearts() {

    for (let i = 0; i < 15; i++) {

        setTimeout(() => {

            const heart = document.createElement("div");

            heart.className = "heart";

            heart.innerHTML = ["❤️","💙","💖","💕"][Math.floor(Math.random()*4)];

            heart.style.left = Math.random() * window.innerWidth + "px";

            heart.style.bottom = "-40px";

            heart.style.fontSize = (18 + Math.random() * 28) + "px";

            hearts.appendChild(heart);

            setTimeout(() => {

                heart.remove();

            },5000);

        }, i * 120);

    }

}

// ===================================
// SPARKLES
// ===================================

function createSparkles(){

    for(let i=0;i<20;i++){

        setTimeout(()=>{

            const sparkle=document.createElement("div");

            sparkle.className="sparkle";

            sparkle.style.left=Math.random()*window.innerWidth+"px";

            sparkle.style.top=Math.random()*window.innerHeight+"px";

            sparkles.appendChild(sparkle);

            setTimeout(()=>{

                sparkle.remove();

            },2500);

        },i*40);

    }

}

// ===================================
// FLOATING PARTICLES
// ===================================

function createParticles(){

    const particle=document.createElement("div");

    particle.className="particle";

    const size=4+Math.random()*8;

    particle.style.width=size+"px";

    particle.style.height=size+"px";

    particle.style.left=Math.random()*window.innerWidth+"px";

    particle.style.bottom="-20px";

    particle.style.animationDuration=(4+Math.random()*5)+"s";

    particles.appendChild(particle);

    setTimeout(()=>{

        particle.remove();

    },9000);

}

setInterval(createParticles,250);

// ===================================
// RANDOM WEB DROP
// ===================================

function createWeb(){

    const web=document.createElement("div");

    web.className="web";

    web.style.left=Math.random()*window.innerWidth+"px";

    webs.appendChild(web);

    setTimeout(()=>{

        web.remove();

    },1800);

}

setInterval(createWeb,5000);

// ===================================
// SHOOTING STAR
// ===================================

function shootingStar(){

    const star=document.createElement("div");

    star.className="shooting-star";

    star.style.top=Math.random()*250+"px";

    star.style.left=(window.innerWidth+100)+"px";

    document.getElementById("background").appendChild(star);

    setTimeout(()=>{

        star.remove();

    },2200);

}

setInterval(shootingStar,8000);

// ===================================
// FIREWORK EFFECT
// ===================================

function createFirework(){

    const firework=document.createElement("div");

    firework.className="firework";

    firework.style.left=Math.random()*window.innerWidth+"px";

    firework.style.top=(100+Math.random()*300)+"px";

    celebration.appendChild(firework);

    setTimeout(()=>{

        firework.remove();

    },1500);

}

// Launch fireworks after mission accepted

setInterval(()=>{

    if(celebration.style.display==="flex"){

        createFirework();

    }

},600);

// ===================================
// CONFETTI
// ===================================

const canvas = document.getElementById("confettiCanvas");
const ctx = canvas.getContext("2d");

let confettiPieces = [];

function resizeCanvas(){

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

function createConfetti(){

    confettiPieces = [];

    for(let i = 0; i < 40; i++){

        confettiPieces.push({

            x: Math.random() * canvas.width,

            y: Math.random() * canvas.height - canvas.height,

            size: Math.random() * 8 + 4,

            speed: Math.random() * 4 + 2,

            rotation: Math.random() * 360,

            rotateSpeed: Math.random() * 8 - 4,

            color: `hsl(${Math.random()*360},100%,60%)`

        });

    }

    animateConfetti();

}

function animateConfetti(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    confettiPieces.forEach(piece=>{

        ctx.save();

        ctx.translate(piece.x,piece.y);

        ctx.rotate(piece.rotation*Math.PI/180);

        ctx.fillStyle = piece.color;

        ctx.fillRect(
            -piece.size/2,
            -piece.size/2,
            piece.size,
            piece.size
        );

        ctx.restore();

        piece.y += piece.speed;

        piece.rotation += piece.rotateSpeed;

    });

    confettiPieces = confettiPieces.filter(p=>p.y<canvas.height+30);

    if(confettiPieces.length>0){

        requestAnimationFrame(animateConfetti);

    }

}

// ===================================
// RIPPLE EFFECT
// ===================================

document.querySelectorAll("button").forEach(button=>{

    button.addEventListener("click",function(e){

        const ripple=document.createElement("span");

        ripple.style.position="absolute";

        ripple.style.left=e.offsetX+"px";

        ripple.style.top=e.offsetY+"px";

        ripple.style.width="10px";

        ripple.style.height="10px";

        ripple.style.borderRadius="50%";

        ripple.style.background="rgba(255,255,255,.7)";

        ripple.style.transform="translate(-50%,-50%)";

        ripple.style.animation="ripple .6s linear";

        this.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});

// ===================================
// HIDDEN EASTER EGG
// ===================================

const hero = document.getElementById("hero");

let heroClicks = 0;

hero.addEventListener("click",()=>{

    heroClicks++;

    if(heroClicks===5){

        alert(
`🕷️ Secret Mission Unlocked!

I spent a lot of time making this because you're someone special. ❤️`
        );

        heroClicks = 0;

    }

});

// ===================================
// RANDOM BUTTON MESSAGES
// ===================================

const funnyMessages=[

"Too slow! 😂",

"Catch me first!",

"Nice try! 😜",

"Nope!",

"Hehe 🤭",

"Almost!"

];

setInterval(()=>{

    if(noBtn){

        noBtn.innerHTML=

        funnyMessages[
            Math.floor(Math.random()*funnyMessages.length)
        ];

    }

},2000);

// ===================================
// MOUSE SPARKLES
// ===================================

document.addEventListener("mousemove",(e)=>{

    if(Math.random()>0.7){

        const sparkle=document.createElement("div");

        sparkle.className="sparkle";

        sparkle.style.left=e.clientX+"px";

        sparkle.style.top=e.clientY+"px";

        sparkles.appendChild(sparkle);

        setTimeout(()=>{

            sparkle.remove();

        },1800);

    }

});

// ===================================
// OPTIONAL BACKGROUND MUSIC
// ===================================

// To use music:
// 1. Put "music.mp3" in your project folder.
// 2. Uncomment the lines below.

/*
const bgMusic = new Audio("music.mp3");

bgMusic.loop = true;

bgMusic.volume = 0.35;

startBtn.addEventListener("click", () => {

    bgMusic.play();

});
*/

// ===================================
// MOBILE RESIZE FIX
// ===================================

window.addEventListener("resize", () => {

    resizeCanvas();

});

// ===================================
// PAGE VISIBILITY
// ===================================

document.addEventListener("visibilitychange", () => {

    if (document.hidden) {

        clearInterval(loadingInterval);

    }

});

// ===================================
// BUTTON HOVER SOUND (OPTIONAL)
// ===================================

/*
const hoverSound = new Audio("hover.mp3");

document.querySelectorAll("button").forEach(button => {

    button.addEventListener("mouseenter", () => {

        hoverSound.currentTime = 0;

        hoverSound.play();

    });

});
*/

// ===================================
// SIMPLE FADE FUNCTION
// ===================================

function fadeIn(element){

    element.style.opacity = 0;

    element.style.display = "flex";

    let opacity = 0;

    const animation = setInterval(() => {

        opacity += 0.05;

        element.style.opacity = opacity;

        if(opacity >= 1){

            clearInterval(animation);

        }

    },20);

}

// ===================================
// RESTART EVERYTHING
// ===================================

function resetMission(){

    celebration.style.display = "none";

    ticketPopup.style.display = "none";

    typewriter.innerHTML = "";

    noBtn.style.position = "static";

    noBtn.style.left = "";

    noBtn.style.top = "";

}

restartBtn.addEventListener("click", resetMission);

// ===================================
// PREVENT DOUBLE CLICK BUGS
// ===================================

let popupOpened = false;

startBtn.addEventListener("click", () => {

    if(popupOpened) return;

    popupOpened = true;

});

restartBtn.addEventListener("click", () => {

    popupOpened = false;

});

// ===================================
// KEYBOARD SHORTCUTS
// ===================================

document.addEventListener("keydown", (e) => {

    if(e.key === "Enter" && ticketPopup.style.display === "flex"){

        yesBtn.click();

    }

    if(e.key === "r" && celebration.style.display === "flex"){

        resetMission();

    }

});

// ===================================
// WELCOME MESSAGE
// ===================================

console.log(`
🕷️ ==========================
MISSION WEBSITE LOADED
==========================

Thanks for using this project!

Hope your invitation goes well. ❤️

Made with HTML, CSS & JavaScript.

==========================
`);

// ===================================
// END OF SCRIPT
// ===================================
