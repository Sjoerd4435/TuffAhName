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

function rand(arr){
    return arr[Math.floor(Math.random() * arr.length)];
}

function generate(){
    let text =
        rand(finn_list) + " " +
        rand(henrico_list) + " " +
        rand(corne_list) + " " +
        rand(borsboom_list);

    document.getElementById("result").textContent = text;
}
