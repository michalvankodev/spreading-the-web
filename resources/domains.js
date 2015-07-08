var domains = [".academy",".accountants",".actor",".adult",".agency",".airforce",".apartments",".archi",".army",".associates",".attorney",".auction",".audio",".band",".bar",".bargains",".bayern",".beer",".berlin",".best",".bid",".bike",".bingo",".bio",".black",".blackfriday",".blue",".boutique",".brussels",".build",".builders",".business",".buzz",".cab",".camera",".camp",".capetown",".capital",".cards",".care",".career",".careers",".casa",".cash",".casino",".catering",".center",".ceo",".chat",".cheap",".christmas",".church",".city",".claims",".cleaning",".click",".clinic",".clothing",".club",".coach",".codes",".coffee",".cologne",".community",".company",".computer",".condos",".construction",".consulting",".contractors",".cooking",".cool",".country",".credit",".cricket",".cruises",".dance",".date",".dating",".deals",".degree",".delivery",".democrat",".dental",".dentist",".desi",".design",".diamonds",".diet",".digital",".direct",".directory",".discount",".domains",".durban",".education",".email",".energy",".engineer",".engineering",".enterprises",".equipment",".estate",".events",".exchange",".expert",".exposed",".fail",".faith",".farm",".fashion",".finance",".financial",".fish",".fishing",".fit",".fitness",".flights",".florist",".flowers",".football",".forsale",".foundation",".fund",".furniture",".futbol",".gallery",".garden",".gift",".gifts",".gives",".glass",".global",".gold",".golf",".graphics",".gratis",".green",".gripe",".guide",".guitars",".guru",".hamburg",".haus",".healthcare",".help",".hiphop",".hiv",".holdings",".holiday",".horse",".host",".hosting",".house",".how",".immo",".immobilien",".industries",".ink",".institute",".insure",".international",".investments",".jetzt",".joburg",".juegos",".kaufen",".kim",".kitchen",".kiwi",".koeln",".land",".lawyer",".lease",".legal",".lgbt",".life",".lighting",".limited",".limo",".link",".loans",".london",".ltda",".luxury",".maison",".management",".market",".marketing",".media",".melbourne",".memorial",".menu",".moda",".moe",".money",".mortgage",".nagoya",".navy",".network",".ngo",".ninja",".nrw",".nyc",".nz",".okinawa",".onl",".osaka",".paris",".partners",".parts",".party",".photo",".photography",".photos",".physio",".pics",".pictures",".pink",".pizza",".place",".plumbing",".plus",".poker",".porn",".press",".productions",".properties",".property",".pub",".qpon",".quebec",".recipes",".red",".rehab",".reise",".reisen",".rentals",".repair",".report",".republican",".rest",".restaurant",".review",".reviews",".rich",".rip",".rocks",".rodeo",".ruhr",".ryukyu",".saarland",".sale",".sarl",".school",".schule",".science",".scot",".services",".sexy",".shiksha",".shoes",".singles",".social",".software",".solar",".solutions",".soy",".space",".style",".supplies",".supply",".support",".surf",".surgery",".sydney",".systems",".tattoo",".tax",".technology",".tennis",".tienda",".tips",".tires",".today",".tokyo",".tools",".top",".tours",".town",".toys",".trade",".training",".university",".uno",".vacations",".vegas",".ventures",".versicherung",".vet",".viajes",".video",".villas",".vision",".vlaanderen",".vodka",".vote",".voting",".voto",".voyage",".wang",".watch",".webcam",".website",".wed",".wedding",".whoswho",".wien",".wiki",".work",".works",".world",".wtf",".онлайн",".сайт",".орг", ".xyz",".yoga",".yokohama",".zone"];

function displayDomain(domain) {
  var container = document.querySelector('#domains-container');
  var containerLeft = container.scrollWidth;
  return function() {
    var box = document.createElement('div');
    var text = document.createTextNode(domain);

    box.classList.add('domain-box');
    box.style.top = Math.floor((Math.random() * container.scrollHeight)) + 'px';
    box.style.left = Math.floor((Math.random() * container.scrollWidth)) + 'px';
    box.style.color = '#'+Math.floor(Math.random()*16777215).toString(16);

    box.appendChild(text);
    container.appendChild(box);
  }
}

/**
 * Display domain for every domain in array randomly in 110 seconds after 3 second delay
 */
function runDomains() {
  domains.forEach(function (domain) {
    setTimeout(displayDomain(domain), Math.floor((Math.random() * 11000 + 3000)));
  });
}
