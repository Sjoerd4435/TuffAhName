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

let coins = 0;
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
    const roll = Math.random() - luckBoost;

    if(roll < 0.40) return {name:"Common", class:"common", value:1};
    if(roll < 0.65) return {name:"Uncommon", class:"uncommon", value:3};
    if(roll < 0.80) return {name:"Rare", class:"rare", value:6};
    if(roll < 0.90) return {name:"Epic", class:"epic", value:15};
    if(roll < 0.96) return {name:"Legendary", class:"legendary", value:40};
    if(roll < 0.985) return {name:"Mythic", class:"mythic", value:75};
    if(roll < 0.993) return {name:"Divine", class:"divine", value:120};
    if(roll < 0.997) return {name:"Celestial", class:"celestial", value:250};
    if(roll < 0.999) return {name:"Transcendent", class:"transcendent", value:500};
    return {name:"TUFF GOD", class:"tuffgod", value:2000};
}

function generate(){

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

        resultDiv.innerText = name;
        rarityDiv.innerText = rarity.name;
        rarityDiv.className = rarity.class;

        coins += rarity.value;
        updateCoins();

    }, 500);
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
    }
}
function upgradeAuto(){
    if(coins >= autoPrice){
        coins -= autoPrice;
        autoLevel++;

        clearInterval(autoInterval);
        autoInterval = setInterval(generate, 3000 - (autoLevel * 200));

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
