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
        {name:"Common",        class:"common",        value:1,      weight:1000},
        {name:"Uncommon",      class:"uncommon",      value:3,      weight:500},
        {name:"Rare",          class:"rare",           value:8,      weight:250},
        {name:"Epic",          class:"epic",           value:20,     weight:120},
        {name:"Legendary",     class:"legendary",     value:50,     weight:55},
        {name:"Mythic",        class:"mythic",        value:100,    weight:25},
        {name:"Divine",        class:"divine",        value:200,    weight:11},
        {name:"Celestial",     class:"celestial",     value:400,    weight:5},
        {name:"Transcendent",  class:"transcendent",  value:800,    weight:2.2},
        {name:"Ethereal",      class:"ethereal",      value:1500,   weight:1},
        {name:"Abyssal",       class:"abyssal",       value:3000,   weight:0.45},
        {name:"Chrono",        class:"chrono",        value:6000,   weight:0.2},
        {name:"Voidborn",      class:"voidborn",      value:12000,  weight:0.09},
        {name:"Omniversal",    class:"omniversal",    value:25000,  weight:0.04},
        {name:"TUFF GOD",      class:"tuffgod",       value:100000, weight:0.015},
        {name:"Limbo",         class:"limbo",         value:500000, weight:0.004}
    ];

    // Sort rarest first (index 0 = TUFF GOD, last index = Common)
    const sorted = [...rarities].sort((a, b) => a.weight - b.weight);
    const N = sorted.length;

    // Each tier gets a luck multiplier based on how rare it is.
    // rareFactor=1 for TUFF GOD, rareFactor=0 for Common.
    // At 0% luck all mults=1 so original weights are unchanged.
    // At higher luck, rare tiers gain exponentially more weight vs common ones.
    const boosted = sorted.map((r, i) => {
        const rareFactor = (N - 1 - i) / (N - 1);
        const mult = Math.pow(1 + luckBoost, rareFactor * 3);
        return { rarity: r, w: r.weight * mult };
    });

    const total = boosted.reduce((sum, r) => sum + r.w, 0);
    const roll = Math.random() * total;
    let cum = 0;
    for(const entry of boosted){
        cum += entry.w;
        if(roll < cum) return entry.rarity;
    }

    return sorted[N - 1].rarity;
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

        if(rarity.class === "limbo"){
            overlay.classList.add("overlay-active","limbo-overlay");
            playLimboMinigame().then((won) => {
                overlay.classList.remove("overlay-active","limbo-overlay");
                body.style.animation = "";
                if(won){
                    // Grant the Limbo Aura — add to inventory as special item
                    if(!inventory["Limbo Aura"]) inventory["Limbo Aura"] = 0;
                    inventory["Limbo Aura"]++;
                    updateInventory();
                    coins += 500000;
                    updateCoins();
                }
                resolve();
            });
            return;
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

        let canvas = document.getElementById("skibidiCanvas");
        if(canvas) canvas.remove();

        canvas = document.createElement("canvas");
        canvas.id = "skibidiCanvas";
        // Direct on body, z-index 99999 beats your existing 9999 overlays
        // position:fixed works on body-level elements even in most sandboxes
        canvas.style.cssText = "position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:99999;pointer-events:none;";
        document.body.appendChild(canvas);

        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;

        const W = canvas.width;
        const H = canvas.height;
        const ctx = canvas.getContext("2d");

        let frame = 0;
        const TOTAL = 200; // ~3.3s at 60fps
        const lasers = [];
        let toiletX = -180;
        const toiletY = H * 0.5;
        let phase = "walk";

        function addLaser(){
            const angle = (Math.random() - 0.5) * 1.2;
            lasers.push({ x: toiletX + 110, y: toiletY - 80, angle, life: 1.0,
                          color: `hsl(${Math.random()*80+160},100%,65%)` });
        }

        function drawBg(){
            const flash = phase === "shoot" ? Math.abs(Math.sin(frame * 0.4)) * 60 : 0;
            ctx.fillStyle = `rgb(${flash},0,${Math.floor(flash * 0.3)})`;
            ctx.fillRect(0, 0, W, H);

            ctx.save();
            ctx.textAlign = "center";
            ctx.font = `bold ${Math.floor(W * 0.09)}px Impact, sans-serif`;
            const pulse = 1 + Math.sin(frame * 0.12) * 0.04;
            ctx.scale(pulse, pulse);
            ctx.fillStyle = "#ffd700";
            ctx.fillText("TUFF GOD", W / 2 / pulse, H * 0.22 / pulse);
            ctx.fillStyle = "#ff6600";
            ctx.font = `bold ${Math.floor(W * 0.045)}px Impact, sans-serif`;
            ctx.fillText("YOU ROLLED THE RAREST", W / 2 / pulse, H * 0.3 / pulse);
            ctx.restore();
        }

        function drawLasers(){
            for(const l of lasers){
                ctx.save();
                ctx.globalAlpha = Math.max(0, l.life);
                ctx.strokeStyle = l.color;
                ctx.lineWidth = 5;
                ctx.beginPath();
                ctx.moveTo(l.x, l.y);
                ctx.lineTo(l.x + Math.cos(l.angle) * W * 1.5,
                           l.y + Math.sin(l.angle) * W * 1.5);
                ctx.stroke();
                ctx.restore();
            }
        }

        function drawToilet(x, y){
            const bob = Math.sin(frame * 0.3) * 5;
            ctx.save();
            ctx.translate(x, y + bob);

            // Bowl
            ctx.fillStyle = "#e0e0e0";
            ctx.beginPath();
            ctx.ellipse(60, 105, 52, 30, 0, 0, Math.PI*2);
            ctx.fill();
            ctx.fillRect(12, 75, 96, 40);

            // Tank
            ctx.fillStyle = "#d4d4d4";
            ctx.fillRect(18, 18, 84, 60);
            ctx.fillStyle = "#bcbcbc";
            ctx.fillRect(13, 13, 94, 10);

            // Seat outline
            ctx.strokeStyle = "#aaa";
            ctx.lineWidth = 5;
            ctx.beginPath();
            ctx.ellipse(60, 88, 46, 20, 0, 0, Math.PI*2);
            ctx.stroke();

            // Eyes (angry)
            const eyeShift = Math.sin(frame * 0.2) * 2;
            ctx.fillStyle = "#ff2222";
            ctx.beginPath(); ctx.ellipse(36+eyeShift, 38, 11, 14, -0.3, 0, Math.PI*2); ctx.fill();
            ctx.beginPath(); ctx.ellipse(84+eyeShift, 38, 11, 14,  0.3, 0, Math.PI*2); ctx.fill();
            ctx.fillStyle = "#000";
            ctx.beginPath(); ctx.ellipse(36+eyeShift, 40, 5, 7, 0, 0, Math.PI*2); ctx.fill();
            ctx.beginPath(); ctx.ellipse(84+eyeShift, 40, 5, 7, 0, 0, Math.PI*2); ctx.fill();
            // Eye glints
            ctx.fillStyle = "#fff";
            ctx.beginPath(); ctx.ellipse(38+eyeShift, 36, 2, 3, 0, 0, Math.PI*2); ctx.fill();
            ctx.beginPath(); ctx.ellipse(86+eyeShift, 36, 2, 3, 0, 0, Math.PI*2); ctx.fill();

            // Grin
            ctx.strokeStyle = "#222";
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(28, 62);
            ctx.quadraticCurveTo(60, 80, 92, 62);
            ctx.stroke();

            // Teeth
            ctx.fillStyle = "#fff";
            for(let t=0;t<5;t++) ctx.fillRect(32 + t*11, 62, 9, 10);

            // Legs walking
            const swing = Math.sin(frame * 0.28) * 18;
            ctx.fillStyle = "#c8c8c8";
            ctx.save(); ctx.translate(36, 118); ctx.rotate(swing * Math.PI/180);
            ctx.fillRect(-7, 0, 14, 42); ctx.restore();
            ctx.save(); ctx.translate(84, 118); ctx.rotate(-swing * Math.PI/180);
            ctx.fillRect(-7, 0, 14, 42); ctx.restore();

            // Laser barrel (mouth area)
            if(phase === "shoot"){
                const barrelFlash = Math.abs(Math.sin(frame * 0.5));
                ctx.fillStyle = `rgba(0,200,255,${barrelFlash})`;
                ctx.beginPath();
                ctx.ellipse(60, 75, 8, 8, 0, 0, Math.PI*2);
                ctx.fill();
            }

            ctx.restore();
        }

        function tick(){
            ctx.clearRect(0,0,W,H);
            drawBg();

            if(phase === "walk"){
                toiletX += 7;
                if(toiletX > W * 0.3) phase = "shoot";
            } else if(phase === "shoot"){
                if(frame % 5 === 0) addLaser();
                if(frame > 145) phase = "exit";
            } else {
                toiletX += 11;
            }

            for(let i = lasers.length-1; i >= 0; i--){
                lasers[i].life -= 0.015;
                if(lasers[i].life <= 0) lasers.splice(i,1);
            }

            drawLasers();
            drawToilet(toiletX, toiletY - 180);

            frame++;

            if(frame < TOTAL && toiletX < W + 250){
                requestAnimationFrame(tick);
            } else {
                // Fade out
                let alpha = 1;
                const fade = setInterval(() => {
                    alpha -= 0.07;
                    ctx.clearRect(0,0,W,H);
                    ctx.save();
                    ctx.globalAlpha = Math.max(0, alpha);
                    drawBg();
                    ctx.restore();
                    if(alpha <= 0){
                        clearInterval(fade);
                        canvas.remove();
                        resolve();
                    }
                }, 16);
            }
        }

        requestAnimationFrame(tick);
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
        "TUFF GOD":"tuffgod",
        "Limbo":"limbo"
    };

    // Value map so forced rolls actually give coins
    const values = {
        "common":1,"uncommon":3,"rare":8,"epic":20,"legendary":50,
        "mythic":100,"divine":200,"celestial":400,"transcendent":800,
        "ethereal":1500,"abyssal":3000,"chrono":6000,"voidborn":12000,
        "omniversal":25000,"tuffgod":100000, "limbo":9999999999999999999
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

/* -------- LIMBO MINIGAME -------- */

function playLimboMinigame(){
    return new Promise((resolve) => {

        const overlay = document.getElementById('rarityOverlay');
        overlay.innerHTML = '';

        const W = window.innerWidth;
        const H = window.innerHeight;

        const canvas = document.createElement('canvas');
        canvas.width = W;
        canvas.height = H;
        canvas.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;';
        overlay.appendChild(canvas);
        const ctx = canvas.getContext('2d');

        const uiDiv = document.createElement('div');
        uiDiv.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;';
        overlay.appendChild(uiDiv);

        const NUM_KEYS = 5;
        const DOOR_COUNT = 3;
        let round = 0;
        let phase = 'intro';
        let introFrame = 0;
        let bgOffset = 0;
        let flashColor = null;
        let flashTimer = 0;
        let won = false;
        let correctKeys = [];
        for(let i = 0; i < DOOR_COUNT; i++) correctKeys.push(Math.floor(Math.random() * NUM_KEYS));

        let buttons = [];
        let animId = null;
        let winTimer = 0;
        let frameCount = 0;

        let bgStars = [];
        for(let i = 0; i < 80; i++) bgStars.push({
            x: Math.random() * W, y: Math.random() * H,
            s: Math.random() * 2 + 0.5, sp: Math.random() * 0.4 + 0.1
        });

        function makeButtons(){
            uiDiv.innerHTML = '';
            buttons = [];
            if(phase !== 'picking') return;

            const btnW = 70, btnH = 80;
            const totalW = NUM_KEYS * (btnW + 14);
            const startX = (W - totalW) / 2;
            const y = H * 0.78;
            const keyColors = ['#ff4444','#44aaff','#ffcc00','#44ff88','#cc44ff'];
            const keySymbols = ['\u2666','\u2665','\u2663','\u2660','\u272A'];

            for(let i = 0; i < NUM_KEYS; i++){
                const btn = document.createElement('div');
                const bx = startX + i * (btnW + 14);
                btn.style.position = 'absolute';
                btn.style.left = bx + 'px';
                btn.style.top = y + 'px';
                btn.style.width = btnW + 'px';
                btn.style.height = btnH + 'px';
                btn.style.background = keyColors[i];
                btn.style.border = '3px solid #fff';
                btn.style.borderRadius = '10px';
                btn.style.display = 'flex';
                btn.style.flexDirection = 'column';
                btn.style.alignItems = 'center';
                btn.style.justifyContent = 'center';
                btn.style.cursor = 'pointer';
                btn.style.pointerEvents = 'all';
                btn.style.fontSize = '28px';
                btn.style.color = '#fff';
                btn.style.fontWeight = 'bold';
                btn.style.userSelect = 'none';
                btn.style.boxShadow = '0 0 18px ' + keyColors[i];
                btn.innerHTML = '<span>' + keySymbols[i] + '</span><span style="font-size:11px;margin-top:4px">KEY ' + (i+1) + '</span>';
                btn.addEventListener('mouseenter', function(){ this.style.transform = 'scale(1.13)'; });
                btn.addEventListener('mouseleave', function(){ this.style.transform = 'scale(1)'; });
                btn.addEventListener('click', function(){ handleKeyPick(i); });
                uiDiv.appendChild(btn);
                buttons.push(btn);
            }
        }

        function handleKeyPick(index){
            if(phase !== 'picking') return;
            buttons.forEach(function(b){ b.style.pointerEvents = 'none'; });

            if(index === correctKeys[round]){
                flashColor = '#00ff88';
                flashTimer = 40;
                phase = 'result';
                won = true;
                setTimeout(function(){
                    uiDiv.innerHTML = '';
                    round++;
                    if(round >= DOOR_COUNT){
                        phase = 'win';
                    } else {
                        phase = 'nextround';
                        setTimeout(function(){ phase = 'picking'; makeButtons(); }, 900);
                    }
                }, 900);
            } else {
                flashColor = '#ff2222';
                flashTimer = 50;
                phase = 'fail';
                won = false;
                setTimeout(function(){ phase = 'done'; }, 1800);
            }
        }

        function drawBg(){
            ctx.fillStyle = '#0a0014';
            ctx.fillRect(0, 0, W, H);
            for(let i = 0; i < bgStars.length; i++){
                var s = bgStars[i];
                s.x -= s.sp;
                if(s.x < 0) s.x = W;
                ctx.fillStyle = 'rgba(180,140,255,0.7)';
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.s, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.strokeStyle = '#6600cc';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(0, H * 0.72);
            ctx.lineTo(W, H * 0.72);
            ctx.stroke();
            ctx.strokeStyle = 'rgba(100,0,200,0.15)';
            ctx.lineWidth = 1;
            var gridSpacing = 60;
            var offset = (bgOffset * 2) % gridSpacing;
            for(var x = -offset; x < W; x += gridSpacing){
                ctx.beginPath(); ctx.moveTo(x, H * 0.72); ctx.lineTo(x - 80, H); ctx.stroke();
            }
            bgOffset += 1.5;
        }

        function drawPlayer(){
            var px = W * 0.2;
            var py = H * 0.62;
            var size = 38;
            ctx.save();
            ctx.translate(px, py);
            ctx.rotate(Math.sin(frameCount * 0.08) * 0.08);
            ctx.fillStyle = '#aa44ff';
            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 2;
            ctx.beginPath();
            if(ctx.roundRect){
                ctx.roundRect(-size/2, -size/2, size, size, 5);
            } else {
                ctx.rect(-size/2, -size/2, size, size);
            }
            ctx.fill(); ctx.stroke();
            ctx.fillStyle = '#cc88ff';
            ctx.beginPath();
            ctx.rect(-size/4, -size/4, size/2, size/2);
            ctx.fill();
            ctx.restore();
        }

        function drawDoor(){
            var dx = W * 0.72;
            var dy = H * 0.38;
            var dw = 70, dh = 120;
            ctx.shadowColor = '#cc44ff';
            ctx.shadowBlur = 12 + Math.sin(frameCount * 0.1) * 6;
            ctx.fillStyle = '#1a0033';
            ctx.strokeStyle = '#cc44ff';
            ctx.lineWidth = 3;
            ctx.fillRect(dx - dw/2, dy, dw, dh);
            ctx.strokeRect(dx - dw/2, dy, dw, dh);
            ctx.fillStyle = '#ffcc00';
            ctx.beginPath();
            ctx.arc(dx + dw/2 - 10, dy + dh * 0.55, 5, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;
            ctx.fillStyle = '#cc44ff';
            ctx.font = 'bold 32px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('?', dx, dy + dh * 0.5);
        }

        function drawHUD(){
            ctx.textAlign = 'center';
            ctx.globalAlpha = Math.min(1, introFrame / 30);
            ctx.fillStyle = '#cc44ff';
            ctx.font = 'bold ' + Math.floor(W * 0.075) + 'px Impact, Arial';
            ctx.shadowColor = '#cc44ff';
            ctx.shadowBlur = 25;
            ctx.fillText('LIMBO', W / 2, H * 0.2);
            ctx.shadowBlur = 0;
            ctx.fillStyle = '#ffcc00';
            ctx.font = 'bold ' + Math.floor(W * 0.025) + 'px Arial';
            ctx.fillText('Pick the correct key to claim the Limbo Aura', W / 2, H * 0.29);
            ctx.fillStyle = '#aaaaff';
            ctx.font = Math.floor(W * 0.02) + 'px Arial';
            ctx.fillText('Round ' + (round + 1) + ' of ' + DOOR_COUNT, W / 2, H * 0.35);
            ctx.globalAlpha = 1;
        }

        function drawFlash(){
            if(flashTimer > 0){
                var a = Math.floor((flashTimer / 50) * 200);
                ctx.fillStyle = flashColor;
                ctx.globalAlpha = a / 255;
                ctx.fillRect(0, 0, W, H);
                ctx.globalAlpha = 1;
                flashTimer--;
            }
        }

        function drawResultText(win){
            ctx.textAlign = 'center';
            if(win){
                ctx.fillStyle = '#00ff88';
                ctx.font = 'bold ' + Math.floor(W * 0.06) + 'px Impact, Arial';
                ctx.shadowColor = '#00ff88';
                ctx.shadowBlur = 20;
                ctx.fillText(round >= DOOR_COUNT ? 'AURA OBTAINED!' : 'CORRECT! NEXT ROUND...', W/2, H * 0.5);
            } else {
                ctx.fillStyle = '#ff2222';
                ctx.font = 'bold ' + Math.floor(W * 0.055) + 'px Impact, Arial';
                ctx.shadowColor = '#ff2222';
                ctx.shadowBlur = 20;
                ctx.fillText('WRONG KEY...', W / 2, H * 0.46);
                ctx.shadowBlur = 0;
                ctx.fillStyle = '#ffaaaa';
                ctx.font = Math.floor(W * 0.022) + 'px Arial';
                ctx.fillText('Limbo Aura lost. You will try again.', W / 2, H * 0.57);
            }
            ctx.shadowBlur = 0;
        }

        function drawWin(){
            var cx = W / 2, cy = H * 0.44;
            for(var r = 0; r < 4; r++){
                var radius = 60 + r * 35 + Math.sin(frameCount * 0.08 + r) * 10;
                var hue = (frameCount * 3 + r * 60) % 360;
                ctx.strokeStyle = 'hsl(' + hue + ',100%,65%)';
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.arc(cx, cy, radius, 0, Math.PI * 2);
                ctx.stroke();
            }
            ctx.fillStyle = '#ffcc00';
            ctx.font = 'bold ' + Math.floor(W * 0.065) + 'px Impact, Arial';
            ctx.textAlign = 'center';
            ctx.shadowColor = '#ffcc00';
            ctx.shadowBlur = 30;
            ctx.fillText('LIMBO AURA', cx, H * 0.23);
            ctx.shadowBlur = 0;
            ctx.fillStyle = '#ffffff';
            ctx.font = Math.floor(W * 0.025) + 'px Arial';
            ctx.fillText('Added to your inventory!', cx, H * 0.31);
            var g = ctx.createRadialGradient(cx, cy, 0, cx, cy, 55);
            g.addColorStop(0, '#ffffff');
            g.addColorStop(0.4, '#cc44ff');
            g.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.shadowColor = '#cc44ff';
            ctx.shadowBlur = 20 + Math.sin(frameCount * 0.1) * 10;
            ctx.fillStyle = g;
            ctx.beginPath();
            ctx.arc(cx, cy, 55, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;
        }

        function tick(){
            ctx.clearRect(0, 0, W, H);
            drawBg();

            if(phase === 'intro'){
                introFrame++;
                drawPlayer();
                drawDoor();
                drawHUD();
                if(introFrame > 80){
                    phase = 'picking';
                    makeButtons();
                }
            } else if(phase === 'picking'){
                drawPlayer();
                drawDoor();
                drawHUD();
            } else if(phase === 'result' || phase === 'nextround'){
                drawPlayer();
                drawDoor();
                drawHUD();
                drawFlash();
                drawResultText(true);
            } else if(phase === 'fail'){
                drawPlayer();
                drawFlash();
                drawResultText(false);
            } else if(phase === 'win'){
                winTimer++;
                drawWin();
                if(winTimer > 160){ phase = 'done'; }
            } else if(phase === 'done'){
                cancelAnimationFrame(animId);
                var alpha = 1;
                var fade = setInterval(function(){
                    alpha -= 0.07;
                    ctx.clearRect(0, 0, W, H);
                    ctx.globalAlpha = Math.max(0, alpha);
                    drawBg();
                    ctx.globalAlpha = 1;
                    if(alpha <= 0){
                        clearInterval(fade);
                        overlay.innerHTML = '';
                        resolve(won && round >= DOOR_COUNT);
                    }
                }, 16);
                return;
            }

            frameCount++;
            animId = requestAnimationFrame(tick);
        }

        requestAnimationFrame(tick);
    });
}
