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
        {name:"Common", class:"common", value:1, weight:5000},
        {name:"Uncommon", class:"uncommon", value:3, weight:2500},
        {name:"Rare", class:"rare", value:8, weight:1200},
        {name:"Epic", class:"epic", value:20, weight:600},
        {name:"Legendary", class:"legendary", value:50, weight:250},
        {name:"Mythic", class:"mythic", value:100, weight:120},
        {name:"Divine", class:"divine", value:200, weight:50},
        {name:"Celestial", class:"celestial", value:400, weight:20},
        {name:"Transcendent", class:"transcendent", value:800, weight:8},
        {name:"Ethereal", class:"ethereal", value:1500, weight:3},
        {name:"Abyssal", class:"abyssal", value:3000, weight:1},
        {name:"Chrono", class:"chrono", value:6000, weight:0.5},
        {name:"Voidborn", class:"voidborn", value:12000, weight:0.2},
        {name:"Omniversal", class:"omniversal", value:25000, weight:0.05},
        {name:"TUFF GOD", class:"tuffgod", value:100000, weight:0.01}
    ];

    const luck = getLuckMultiplier();

    const scaled = rarities.map((r, index) => {

        // Rarity tier index (0 = Common, highest = TUFF GOD)
        const tier = index / (rarities.length - 1);

        // Luck influence curve (smooth, capped growth)
        const luckFactor = 1 + (tier * Math.log10(1 + luck + 1));

        // Reduce common weight slightly
        const commonReduction = 1 - (0.4 * tier * Math.min(1, luck / 100));

        return {
            ...r,
            weight: r.weight * luckFactor * commonReduction
        };
    });

    const totalWeight = scaled.reduce((sum, r) => sum + r.weight, 0);
    let roll = Math.random() * totalWeight;

    for(let r of scaled){
        if(roll < r.weight){
            return r;
        }
        roll -= r.weight;
    }

    return scaled[0]; // fallback safety
}

function makeRarity(name, css, value){
    return {name:name, class:css, value:value};
}

function getLuckMultiplier(){
    return Math.pow(1 + luckBoost, 1.5) - 1;
}

function triggerOverlay(rarity){

    const overlay = document.getElementById("rarityOverlay");
    const body = document.body;

    if(!overlay) return;

    overlay.className = "";

    if(rarity.class === "omniversal"){
        overlay.classList.add("overlay-active","omniversal-overlay");
    }

    if(rarity.class === "tuffgod"){
        overlay.classList.add("overlay-active","tuffgod-overlay");
    }
    if(rarity.class === "mythic" || rarity.class === "divine"){
    body.style.animation = "cosmicWarp 1s ease";
    }
    
    if(rarity.class === "abyssal" || rarity.class === "chrono"){
        body.style.animation = "voidCollapse 1s ease";
    }
    
    if(rarity.class === "celestial" ){
        body.style.animation = "beam 1s ease";
    }

    setTimeout(()=>{
    overlay.classList.remove(
        "overlay-active",
        "omniversal-overlay",
        "tuffgod-overlay"
    );
    body.style.animation = "";
},1600);
}

function updateInventory(){

    const invDiv = document.getElementById("inventory");

    if(!invDiv) return;

    invDiv.innerHTML = "<h3>Inventory</h3>";

    for(const key in inventory){
        let html = "<h3>Inventory</h3>";
        for(const key in inventory){
            html += key + ": " + inventory[key] + "<br>";
        }
        invDiv.innerHTML = html;
    }
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
        value: 0
    };

    resultDiv.innerText = "FORCED ROLL";
    rarityDiv.innerText = rarityName;
    rarityDiv.className = className;

    triggerOverlay(rarity);

    console.log("Forced rarity:", rarityName);
}

function generate(){
    if(isRolling) return;
    
    isRolling = true;
    
    const resultDiv = document.getElementById("result");
    const rarityDiv = document.getElementById("rarity");

    // Roll animation
    resultDiv.innerText = "Rolling...";
    rarityDiv.innerText = "";
    resultDiv.className = "";

    setTimeout(() => {

        const name =
            rand(finn_list) + " " +
            rand(henrico_list) + " " +
            rand(corne_list) + " " +
            rand(borsboom_list);

        const rarity = getRarity();

        triggerOverlay(rarity);

        resultDiv.innerText = name;
        rarityDiv.innerText = rarity.name;
        rarityDiv.className = rarity.class;

        if(!inventory[rarity.name]){
            inventory[rarity.name] = 0;
        }
        inventory[rarity.name]++;
        updateInventory();

        coins += rarity.value;
        updateCoins();
        isRolling = false;

    }, 1500);
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
        updateLuckDisplay();
        document.getElementById("luckPrice").innerText = luckPrice;
        document.getElementById("luckDisplay").innerText = "Luck: " + (Math.min(999999, luckBoost * 100)).toFixed(2) + "%";
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
