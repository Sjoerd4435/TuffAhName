const finn_list = ["Finn","Fynn","Fin","Finley","Finlay","Finbar","Finnick","Finnian","Finnur","Finzo",
"Finno","Finra","Finro","Finla","Finlo","Finme","Finte","Finel","Finem","Finax",
"Finar","Finat","Finis","Finet","Finor","Finus","Finco","Finjo","Finya","Finzi",
"Finwin","Finmar","Finrad","Finroy","Finby","Finly","Finny","Finns","Finnz","Finnx",
"Finland","Finnland","Finmark","Finsta","Finster","Finder","Fintex","Finbox","Finbase","Finset",
"Finwell","Finbell","Finzell","Finchell","Finrell","Finwell","Finhill","Finhold","Finford","Finwood",
"Finstone","Finridge","Finlake","Finshore","Finport","Finbay","Finpark","Finzone","Finfield","Fincrest",
"Finbrook","Finmount","Finval","Finridge","Finpath","Finroad","Finway","Finlink","Finweb","Fintech",
"Finart","Finlux","Finmax","Finprime","Finstar","Finblue","Finred","Fingold","Finbright","Finlight"
];

const henrico_list = ["Henrico","Henrigo","Henriko","Enrico","Henrique","Henriek","Henricano","Henricon","Henricus","Henrion",
"Henrino","Henrizo","Henrino","Henrix","Henrixo","Henray","Henroy","Henral","Henraldo","Henrado",
"Henrano","Henricoz","Henrizo","Henricel","Henricel","Henricor","Henricor","Henridor","Henridor","Henrigoz",
"Henrivo","Henrivoz","Henriv","Henrivox","Henrivon","Henrivan","Henrivus","Henrivis","Henrivor","Henrivex",
"Henrad","Henrax","Henraxo","Henrex","Henrexo","Henrezo","Henrexo","Henrizo","Henrizo","Henrizo",
"Henmark","Hensco","Henbro","Hensio","Henbio","Henvio","Henlio","Henpio","Henqio","Henqico",
"Henzo","Henra","Henriq","Henriqo","Henrie","Henriex","Henriel","Henrian","Henrio","Henryco",
"Henrayco","Henricoo","Henricoo","Henricox","Henricox","Henricor","Henricon","Henricon","Henricus","Henricos",
"Henrillos","Henrillos","Henrillo","Henrillo","Henrillo","Henrillo","Henrillos","Henrillos","Henrillos","Henrillos"
];

const corne_list = ["Corne","Cornel","Corney","Corino","Corwin","Cornaro","Corneel","Corneus","Corzal","Corvin",
"Corban","Corbin","Corbyn","Cordel","Cordell","Corden","Corey","Cory","Corrie","Corrin",
"Corra","Corrazo","Corzo","Corno","Corna","Cornezo","Corneus","Corneo","Cornex","Cornix",
"Cornis","Cornish","Cornet","Cornett","Cornell","Cornelio","Cornelia","Cornelius","Cornelix","Cornelus",
"Corlix","Corlux","Cormax","Corzen","Corzel","Corzal","Corwinx","Corvix","Corvox","Corvyx",
"Corland","Corwood","Corhill","Corpark","Corzone","Corfield","Corbay","Corport","Corpath","Corway",
"Corline","Corlink","Corneto","Corneo","Corneo","Cornea","Corneax","Corneusx","Corneix","Cornexy",
"Corstar","Corblue","Corred","Corgold","Corbright","Corlight","Corprime","Corbase","Corweb","Cortech"
];

const borsboom_list = [
"Borsboom","Borspad","Borsveld","Borsrand","Borshoek","Borsmeer","Borsstraat","Borspark","Borszone","Borslijn",
"Borsweg","Borsdam","Borsblok","Borsbrug","Borsstad","Borsdorp","Borskade","Borsland","Borskern","Borspunt",
"Borszijde","Borszijde","Borsrandje","Borsstrook","Borsveldje","Borsweide","Borsbasis","Borsdeel","Borsring","Borsnet",
"Borsroute","Borspadje","Borswegje","Borsplein","Borshaven","Borsberg","Borsbergje","Borssteen","Borshout","Borsgroen",
"Borsblauw","Borsrood","Borswit","Borsgoud","Borslicht","Borsnacht","Borsdag","Borsjaar","Borsstadje","Borshuis",
"Borsvilla","Borscentrum","Borswereld","Borszonee","Borscore","Borsdata","Borstech","Borsai","Borsaii","Borsmax",
"Borsneo","Borsnova","Borsprime","Borsbase","Borsweb","Borsnetto","Borslab","Borssys","Borslogic","Borscore"
];

let isRolling = false;
let coins = 0;
let inventory = {};
let luckBoost = 0;
let autoInterval = null;
let luckPrice = 50;
let autoPrice = 100;
let luckLevel = 0;
let autoLevel = 0;
let auto = false;
let devMode = false;

function rand(arr){
    return arr[Math.floor(Math.random() * arr.length)];
}

function getRarity(){

    const rarities = [
        {name:"Common",        class:"common",        value:1,      weight:5000},
        {name:"Uncommon",      class:"uncommon",      value:3,      weight:2500},
        {name:"Rare",          class:"rare",           value:8,      weight:1200},
        {name:"Epic",          class:"epic",           value:20,     weight:600},
        {name:"Legendary",     class:"legendary",     value:50,     weight:250},
        {name:"Mythic",        class:"mythic",        value:100,    weight:120},
        {name:"Divine",        class:"divine",        value:200,    weight:50},
        {name:"Celestial",     class:"celestial",     value:400,    weight:20},
        {name:"Transcendent",  class:"transcendent",  value:800,    weight:8},
        {name:"Ethereal",      class:"ethereal",      value:1500,   weight:3},
        {name:"Abyssal",       class:"abyssal",       value:3000,   weight:1},
        {name:"Chrono",        class:"chrono",        value:6000,   weight:0.5},
        {name:"Voidborn",      class:"voidborn",      value:12000,  weight:0.2},
        {name:"Omniversal",    class:"omniversal",    value:25000,  weight:0.05},
        {name:"TUFF GOD",      class:"tuffgod",       value:100000, weight:0.01}
    ];

    // Sort rarest first so TUFF GOD sits at the lowest cumulative range
    const sorted = [...rarities].sort((a, b) => a.weight - b.weight);
    const totalWeight = sorted.reduce((sum, r) => sum + r.weight, 0);

    // Build cumulative thresholds rarest → most common
    let cum = 0;
    const thresholds = sorted.map(r => {
        cum += r.weight;
        return { rarity: r, threshold: cum };
    });

    // Math.pow(random, luckPower) skews the roll TOWARD 0
    // Rare tiers live at the low end of cumulative range, so high luck = low roll = rare
    // At 0% luck: luckPower=1, flat random, weights respected normally
    // At 99000% luck: luckPower~100, roll almost always near 0 = TUFF GOD
    const luckPower = 1 + Math.log1p(luckBoost * 3);
    const roll = Math.pow(Math.random(), luckPower) * totalWeight;

    for(const entry of thresholds){
        if(roll < entry.threshold){
            return entry.rarity;
        }
    }

    return sorted[sorted.length - 1];
}

// Returns a Promise that resolves when the animation fully finishes
// generate() awaits this so rolls cannot fire during any animation
function triggerOverlay(rarity){
    return new Promise((resolve) => {

        const overlay = document.getElementById("rarityOverlay");
        const body = document.body;

        if(!overlay){ resolve(); return; }

        overlay.className = "";

        if(rarity.class === "omniversal"){
            overlay.classList.add("overlay-active","omniversal-overlay");
        }

        if(rarity.class === "tuffgod"){
            overlay.classList.add("overlay-active","tuffgod-overlay");
            playSkibidiAnimation().then(() => {
                overlay.classList.remove("overlay-active","tuffgod-overlay");
                body.style.animation = "";
                resolve();
            });
            return; // tuffgod resolves via playSkibidiAnimation
        }

        if(rarity.class === "mythic" || rarity.class === "divine"){
            body.style.animation = "cosmicWarp 1s ease";
        }

        if(rarity.class === "abyssal" || rarity.class === "chrono"){
            body.style.animation = "voidCollapse 1s ease";
        }

        if(rarity.class === "celestial"){
            body.style.animation = "beam 1s ease";
        }

        if(rarity.class === "abyssal"){
            const flood = document.getElementById("abyssalFlood");
            if(flood){
                flood.classList.add("active");
                setTimeout(() => flood.classList.remove("active"), 1400);
            }
        }

        if(rarity.class === "celestial"){
            const sky = document.getElementById("celestialSky");
            if(sky){
                sky.classList.add("active");
                setTimeout(() => sky.classList.remove("active"), 2000);
            }
        }

        const duration = rarity.class === "celestial" ? 2000 : 1600;
        setTimeout(() => {
            overlay.classList.remove(
                "overlay-active",
                "omniversal-overlay",
                "tuffgod-overlay"
            );
            body.style.animation = "";
            resolve();
        }, duration);
    });
}

/* -------- SKIBIDI TOILET TUFF GOD ANIMATION -------- */

function playSkibidiAnimation(){
    return new Promise((resolve) => {

        // Build the fullscreen canvas overlay
        let canvas = document.getElementById("skibidiCanvas");
        if(!canvas){
            canvas = document.createElement("canvas");
            canvas.id = "skibidiCanvas";
            canvas.style.cssText = `
                position:fixed; top:0; left:0; width:100vw; height:100vh;
                z-index:99999; pointer-events:none;
            `;
            document.body.appendChild(canvas);
        }

        const W = canvas.width  = window.innerWidth;
        const H = canvas.height = window.innerHeight;
        const ctx = canvas.getContext("2d");

        canvas.style.display = "block";

        // Animation state
        let frame = 0;
        const TOTAL_FRAMES = 180; // 3 seconds at 60fps

        // Laser beams state
        const lasers = [];
        let toiletX = -200;
        const toiletY = H * 0.5;
        let phase = "walk"; // walk → shoot → exit

        function addLaser(){
            lasers.push({
                x: toiletX + 110,
                y: toiletY - 60,
                angle: (Math.random() - 0.5) * 0.6,
                speed: 18 + Math.random() * 12,
                life: 1,
                color: `hsl(${Math.random()*60 + 180}, 100%, 60%)`
            });
        }

        function drawToilet(x, y, bobOffset){
            ctx.save();
            ctx.translate(x, y + bobOffset);

            // toilet base / bowl
            ctx.fillStyle = "#e8e8e8";
            ctx.beginPath();
            ctx.ellipse(60, 100, 55, 35, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillRect(10, 70, 100, 45);

            // toilet tank
            ctx.fillStyle = "#d0d0d0";
            ctx.fillRect(20, 20, 80, 55);
            ctx.fillStyle = "#c0c0c0";
            ctx.fillRect(15, 15, 90, 10);

            // toilet seat
            ctx.strokeStyle = "#bbb";
            ctx.lineWidth = 6;
            ctx.beginPath();
            ctx.ellipse(60, 85, 48, 22, 0, 0, Math.PI * 2);
            ctx.stroke();

            // FACE on the tank
            // head glow
            ctx.shadowColor = "#ff0";
            ctx.shadowBlur = 20;

            // eyes
            ctx.fillStyle = "#ff4444";
            ctx.beginPath(); ctx.ellipse(38, 40, 10, 13, -0.2, 0, Math.PI*2); ctx.fill();
            ctx.beginPath(); ctx.ellipse(82, 40, 10, 13, 0.2, 0, Math.PI*2); ctx.fill();

            // pupils
            ctx.fillStyle = "#000";
            ctx.beginPath(); ctx.ellipse(38, 42, 5, 7, 0, 0, Math.PI*2); ctx.fill();
            ctx.beginPath(); ctx.ellipse(82, 42, 5, 7, 0, 0, Math.PI*2); ctx.fill();

            // evil grin
            ctx.shadowBlur = 0;
            ctx.strokeStyle = "#333";
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(30, 62);
            ctx.quadraticCurveTo(60, 78, 90, 62);
            ctx.stroke();

            // teeth
            ctx.fillStyle = "#fff";
            for(let t = 0; t < 4; t++){
                ctx.fillRect(36 + t * 12, 62, 9, 10);
            }

            // legs (walking animation)
            const legSwing = Math.sin(frame * 0.25) * 15;
            ctx.fillStyle = "#ccc";
            ctx.save();
            ctx.translate(35, 115);
            ctx.rotate((legSwing * Math.PI) / 180);
            ctx.fillRect(-6, 0, 12, 40);
            ctx.restore();
            ctx.save();
            ctx.translate(85, 115);
            ctx.rotate((-legSwing * Math.PI) / 180);
            ctx.fillRect(-6, 0, 12, 40);
            ctx.restore();

            ctx.restore();
        }

        function drawLasers(){
            for(const l of lasers){
                ctx.save();
                ctx.globalAlpha = l.life;
                ctx.strokeStyle = l.color;
                ctx.shadowColor = l.color;
                ctx.shadowBlur = 15;
                ctx.lineWidth = 4;
                ctx.beginPath();
                ctx.moveTo(l.x, l.y);
                ctx.lineTo(l.x + Math.cos(l.angle) * 800, l.y + Math.sin(l.angle) * 800);
                ctx.stroke();
                ctx.restore();
            }
        }

        function drawBackground(){
            // Dark flashing bg
            const flash = phase === "shoot" ? Math.abs(Math.sin(frame * 0.4)) * 0.3 : 0;
            ctx.fillStyle = `rgba(0,0,0,${0.85 - flash})`;
            ctx.fillRect(0, 0, W, H);

            // TUFF GOD text
            ctx.save();
            ctx.font = `bold ${Math.floor(W * 0.1)}px sans-serif`;
            ctx.textAlign = "center";
            const pulse = 1 + Math.sin(frame * 0.15) * 0.05;
            ctx.scale(pulse, pulse);
            ctx.fillStyle = "#gold";

            const grad = ctx.createLinearGradient(0, H*0.15, 0, H*0.3);
            grad.addColorStop(0, "#ffe066");
            grad.addColorStop(0.5, "#ff9900");
            grad.addColorStop(1, "#ff3300");
            ctx.fillStyle = grad;
            ctx.shadowColor = "#ff9900";
            ctx.shadowBlur = 30;
            ctx.fillText("✨ TUFF GOD ✨", W / 2 / pulse, H * 0.2 / pulse);
            ctx.restore();
        }

        function loop(){
            ctx.clearRect(0, 0, W, H);
            drawBackground();

            const bob = Math.sin(frame * 0.3) * 5;

            // Phase logic
            if(phase === "walk"){
                toiletX += 6;
                if(toiletX > W * 0.35){ phase = "shoot"; }
            } else if(phase === "shoot"){
                // Shoot lasers every 4 frames
                if(frame % 4 === 0) addLaser();
                if(frame > 130) phase = "exit";
            } else if(phase === "exit"){
                toiletX += 10;
            }

            // Update lasers
            for(const l of lasers){
                l.x += Math.cos(l.angle) * l.speed * 0.1;
                l.life -= 0.012;
            }
            // Remove dead lasers
            for(let i = lasers.length - 1; i >= 0; i--){
                if(lasers[i].life <= 0) lasers.splice(i, 1);
            }

            drawLasers();
            drawToilet(toiletX, toiletY - 160, bob);

            frame++;

            if(frame < TOTAL_FRAMES && toiletX < W + 300){
                requestAnimationFrame(loop);
            } else {
                // Fade out
                let alpha = 1;
                const fadeOut = setInterval(() => {
                    alpha -= 0.08;
                    ctx.clearRect(0, 0, W, H);
                    ctx.globalAlpha = alpha;
                    drawBackground();
                    if(alpha <= 0){
                        clearInterval(fadeOut);
                        canvas.style.display = "none";
                        ctx.globalAlpha = 1;
                        resolve();
                    }
                }, 16);
            }
        }

        requestAnimationFrame(loop);
    });
}

function updateInventory(){

    const invDiv = document.getElementById("inventory");
    if(!invDiv) return;

    // Fixed: was double-looping before, now clean
    let html = "<h3>Inventory</h3>";
    for(const key in inventory){
        html += key + ": " + inventory[key] + "<br>";
    }
    invDiv.innerHTML = html;
}

function forceRarity(rarityName){

    const rarities = {
        "Common":"common",
        "Uncommon":"uncommon",
        "Rare":"rare",
        "Epic":"epic",
        "Legendary":"legendary",
        "Mythic":"mythic",
        "Divine":"divine",
        "Celestial":"celestial",
        "Transcendent":"transcendent",
        "Ethereal":"ethereal",
        "Abyssal":"abyssal",
        "Chrono":"chrono",
        "Voidborn":"voidborn",
        "Omniversal":"omniversal",
        "TUFF GOD":"tuffgod"
    };

    // Value map so forced rolls actually give coins
    const values = {
        "common":1,"uncommon":3,"rare":8,"epic":20,"legendary":50,
        "mythic":100,"divine":200,"celestial":400,"transcendent":800,
        "ethereal":1500,"abyssal":3000,"chrono":6000,"voidborn":12000,
        "omniversal":25000,"tuffgod":100000
    };

    const resultDiv = document.getElementById("result");
    const rarityDiv = document.getElementById("rarity");

    const className = rarities[rarityName];

    if(!className){
        console.log("Invalid rarity name");
        return;
    }

    const rarity = {
        name: rarityName,
        class: className,
        value: values[className] || 0  // Fixed: forced rolls now give proper coins
    };

    resultDiv.innerText = "FORCED ROLL";
    rarityDiv.innerText = rarityName;
    rarityDiv.className = className;

    coins += rarity.value;
    updateCoins();

    if(!inventory[rarity.name]) inventory[rarity.name] = 0;
    inventory[rarity.name]++;
    updateInventory();

    triggerOverlay(rarity);

    console.log("Forced rarity:", rarityName);
}

async function generate(){
    if(isRolling) return;
    
    isRolling = true;
    
    const resultDiv = document.getElementById("result");
    const rarityDiv = document.getElementById("rarity");

    resultDiv.innerText = "Rolling...";
    rarityDiv.innerText = "";
    resultDiv.className = "";

    await new Promise(r => setTimeout(r, 1500));

    const name =
        rand(finn_list) + " " +
        rand(henrico_list) + " " +
        rand(corne_list) + " " +
        rand(borsboom_list);

    const rarity = getRarity();

    resultDiv.innerText = name;
    rarityDiv.innerText = rarity.name;
    rarityDiv.className = rarity.class;

    // Await the full animation — auto-roller cannot fire until this resolves
    await triggerOverlay(rarity);

    if(!inventory[rarity.name]) inventory[rarity.name] = 0;
    inventory[rarity.name]++;
    updateInventory();

    coins += rarity.value;
    updateCoins();
    isRolling = false;
}

function updateCoins(){
    document.getElementById("coins").innerText = coins;
}

function updateLuckDisplay(){
    document.getElementById("luckDisplay").innerText =
        "Luck: " + (luckBoost * 100).toFixed(1) + "%";
}

/* -------- SHOP -------- */

function upgradeLuck(){
    if(coins >= luckPrice){
        coins -= luckPrice;
        luckLevel++;
        luckBoost += 0.01;

        luckPrice = Math.floor(luckPrice * 1.6);

        updateCoins();
        document.getElementById("luckPrice").innerText = luckPrice;
        document.getElementById("luckDisplay").innerText =
            "Luck: " + (Math.min(999999, luckBoost * 100)).toFixed(2) + "%";
    }
}

function upgradeAuto(){
    if(coins >= autoPrice){
        coins -= autoPrice;
        autoLevel++;

        clearInterval(autoInterval);
        let speed = Math.max(500, 3000 - (autoLevel * 200));
        autoInterval = setInterval(generate, speed);

        autoPrice = Math.floor(autoPrice * 1.8);

        updateCoins();
        document.getElementById("autoPrice").innerText = autoPrice;
    }
}

/* -------- DEV MODE -------- */

function redeemCode(){
    const code = document.getElementById("codeBox").value;

    if(code.toLowerCase() === "tuff"){
        devMode = true;
        coins += 10000;
        luckBoost += 0.3;
        updateCoins();
        updateLuckDisplay();
        alert("DEV MODE ACTIVATED 😈");
    }
}

window.triggerOverlay = triggerOverlay;
