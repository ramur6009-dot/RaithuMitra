/* ==========================================
   రైతు మిత్ర (RAITHU MITRA) - పూర్తి తెలుగు వెర్షన్ (అన్ని ఫీచర్లతో సహా)
========================================== */

const API_KEY = "f778536a8d606c2fbb4c9866110ee451";

// పూర్తి తెలుగు డిక్షనరీ మరియు ఫీచర్ డేటా
const translations = {
    te: {
        appTitle: "Raithu Mitra",
        appSubtitle: "Smart Farming Assistant",
        loadingText: "స్మార్ట్ ఫార్మింగ్ లోడ్ అవుతోంది...",
        heroTitle: "🌾 రైతుకి డిజిటల్ మిత్రుడు",
        heroSubtitle: "వాతావరణం • మార్కెట్ ధరలు • ఎరువులు • స్ప్రేలు • పంట సలహాలు",
        searchGlobalPlaceholder: "శోధించండి...",
        searchPlaceholder: "గ్రామం లేదా ఊరి పేరు టైప్ చేయండి...",
        searchBtn: "వెతుకు",
        
        // కార్డ్స్ హెడ్డింగ్‌లు
        cardWeatherTitle: "వాతావరణం",
        cardWeatherDesc: "లైవ్ వాతావరణం & పాప్‌అప్ అంచనాలు",
        cardMarketTitle: "మార్కెట్ ధరలు",
        cardMarketDesc: "AP & TS అన్ని మార్కెట్ల ధరలు",
        cardCropsTitle: "పంటలు & గైడ్స్",
        cardCropsDesc: "అన్ని రకాల పంటల సమగ్ర సమాచారం",
        cardFertilizerTitle: "ఎరువుల క్యాల్క్యులేటర్",
        cardFertilizerDesc: "సమర్థవంతమైన ఎరువుల మోతాదు",
        cardSprayTitle: "స్ప్రే క్యాల్క్యులేటర్",
        cardSprayDesc: "మందుల పిచికారీ కొలతలు",
        cardAiTitle: "పంట వైద్యుడు (A to Z)",
        cardAiDesc: "వ్యాధులు మరియు నివారణ చర్యలు",
        cardSchemesTitle: "ప్రభుత్వ పథకాలు",
        cardSchemesDesc: "లేటెస్ట్ అప్‌డేటెడ్ స్కీమ్స్",
        cardVideosTitle: "సాగు శిక్షణ వీడియోలు",
        cardVideosDesc: "A నుండి Z అన్ని వీడియో గైడ్స్",
        cardNewsTitle: "వ్యవసాయ వార్తలు",
        cardNewsDesc: "రోజువారీ లేటెస్ట్ అప్‌డేట్లు",
        cardCalendarTitle: "సీజనల్ క్యాలెండర్",
        cardCalendarDesc: "A నుండి Z అన్ని వ్యవసాయ పనులు",
        cardReminderTitle: "పంట హెచ్చరికలు",
        cardReminderDesc: "ఆటోమేటిక్ అలర్ట్స్ & రిమైండర్లు",
        cardProfileTitle: "రైతు ఖాతా",
        cardProfileDesc: "మీ ప్రొఫైల్ మరియు వివరాలు",

        // పాప్‌అప్ మరియు సెక్షన్స్ టెక్స్ట్
        weatherPopupTitle: "🌤️ పూర్తి వాతావరణ వివరాలు (పాప్‌అప్)",
        marketPageTitle: "📈 AP & TS మార్కెట్ ధరలు",
        cropsPageTitle: "🌾 అన్ని రకాల పంటల గైడ్ (A to Z)",
        schemesPageTitle: "📋 ప్రభుత్వ వ్యవసాయ పథకాలు (ఆటోమేటిక్ అప్‌డేట్)",
        newsPageTitle: "📰 రోజువారీ వ్యవసాయ వార్తలు",
        calendarPageTitle: "📅 సీజనల్ పనులు క్యాలెండర్ (A to Z)",
        reminderPageTitle: "⏰ పంట హెచ్చరికలు & రిమైండర్లు",
        profilePageTitle: "👤 రైతు ఖాతా వివరాలు",

        closeBtnText: "❌ మూసివేయి (Close)",
        calcButton: "లెక్కింపు చేయి",
        
        footerSub: "స్మార్ట్ వ్యవసాయ వేదిక",
        footerMade: "రైతుల కోసం ప్రేమతో రూపొందించబడింది",
        footerCopy: "© 2026 రైతు మిత్ర. అన్ని హక్కులూ ప్రత్యేకించబడ్డాయి."
    }
};

// ==========================================
// 📅 1. సీజనల్ క్యాలెండర్ (A to Z) డేటా మరియు ఫంక్షన్లు
// ==========================================
const seasonalCalendarData = {
    june: {
        title: "🌱 జూన్ నెల సాగు పనులు (Kharif Season Start)",
        tasks: [
            "<strong>పత్తి సాగు:</strong> తొలకరి వర్షాలు కురిసిన వెంటనే నాణ్యమైన పత్తి విత్తనాలు విత్తడం ప్రారంభించాలి.",
            "<strong>వరి నారుమళ్లు:</strong> వర్షాకాలపు వరి సాగు కోసం నారుమళ్లను సిద్ధం చేసి విత్తనాలు వేసుకోవాలి.",
            "<strong>దుక్కులు దున్నడం:</strong> ఎరువులు వేసి పొలాన్ని కలియదున్ని చదును చేయాలి."
        ]
    },
    july: {
        title: "🌧️ జూలై నెల సాగు పనులు (Sowing & Transplanting)",
        tasks: [
            "<strong>వరి నాట్లు:</strong> సిద్ధమైన వరి నారును పొలంలో నాటుకోవడం ప్రారంభించాలి.",
            "<strong>కలుపు నివారణ:</strong> పత్తి మరియు ఇతర పంటల్లో కలుపు తీయడం చాలా ముఖ్యం.",
            "<strong>మొక్కజొన్న & సోయాబీన్:</strong> ఈ నెలలో మొక్కజొన్న మరియు అపరాలు విత్తుకోవచ్చు."
        ]
    },
    august: {
        title: "🌿 ఆగస్టు నెల సాగు పనులు (Crop Growth & Fertilization)",
        tasks: [
            "<strong>ఎరువుల యాజమాన్యం:</strong> వరి మరియు పత్తి పంటలకు తొలి విడత యూరియా / ఎరువులు అందించాలి.",
            "<strong>తెగుళ్ల నివారణ:</strong> వర్షాకాలం కాబట్టి రసం పీల్చే పురుగులు మరియు ఆకు తెగుళ్లపై నిఘా ఉంచి తగిన మందులు పిచికారీ చేయాలి.",
            "<strong>నీటి నిల్వ నిర్వహణ:</strong> వరి పొలంలో తగినంత నీరు ఉండేలా చూసుకోవాలి."
        ]
    },
    september: {
        title: "☀️ సెప్టెంబర్ నెల సాగు పనులు (Pest Monitoring)",
        tasks: [
            "<strong>పత్తి కాయ దశ:</strong> పత్తిలో పూత మరియు కాయ దశ ఉంటుంది కాబట్టి గులాబీ పురుగు నివారణకు తగిన చర్యలు తీసుకోవాలి.",
            "<strong>అదనపు కలుపు తొలగింపు:</strong> పంట ఎదుగుదలకు ఆటంకం కలిగించే కలుపు మొక్కలను పూర్తిగా తొలగించాలి."
        ]
    },
    october: {
        title: "🌾 అక్టోబర్ నెల సాగు పనులు (Rabi Preparation)",
        tasks: [
            "<strong>వరి కోతలు (Early Varieties):</strong> స్వల్పకాలిక వరి రకాలు కోతకు వస్తాయి.",
            "<strong>రబీ పంటల సన్నాహాలు:</strong> శెనగ, sunflower (సూర్యకాంతి), మరియు వేరుశనగ వంటి రబీ పంటల కోసం నేలను సిద్ధం చేయడం."
        ]
    },
    november: {
        title: "❄️ నవంబర్ నెల సాగు పనులు (Rabi Sowing)",
        tasks: [
            "<strong>రబీ విత్తనాలు:</strong> శెనగ, గోధుమ, మరియు ఆవాలు వంటి రబీ పంటల విత్తనాలు విత్తుకోవడానికి అనుకూలమైన సమయం.",
            "<strong>కూరగాయల సాగు:</strong> టమోటా, మిరప మరియు ఇతర కూరగాయల సాగు పనులు చేపట్టాలి."
        ]
    }
};

function scrollToSeasonalCalendar() {
    hideAllSections();
    var section = document.getElementById("seasonalCalendarSection");
    if (section) {
        section.style.display = "block";
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function loadSeasonalData(monthKey) {
    let container = document.getElementById("calendarListContainer");
    if (!container) return;
    container.innerHTML = "";

    let monthData = seasonalCalendarData[monthKey];

    if (!monthData) {
        container.innerHTML = `<p style="text-align: center; color: #666;">సమాచారం అందుబాటులో లేదు.</p>`;
        return;
    }

    let heading = document.createElement("h3");
    heading.style.cssText = "color: #2e7d32; font-size: 16px; margin-top: 0; margin-bottom: 12px;";
    heading.innerText = monthData.title;
    container.appendChild(heading);

    let ul = document.createElement("ul");
    ul.style.cssText = "margin: 0; padding-left: 20px; font-size: 14px; color: #333; line-height: 1.6;";

    monthData.tasks.forEach(task => {
        let li = document.createElement("li");
        li.style.marginBottom = "8px";
        li.innerHTML = task;
        ul.appendChild(li);
    });

    container.appendChild(ul);
}


// ==========================================
// ⏰ 2. పంట హెచ్చరికలు & ఆటోమేటిక్ రిమైండర్లు
// ==========================================
const cropRemindersData = [
    {
        month: 6,
        title: "🌱 జూన్ నెల హెచ్చరికలు (Kharif Start)",
        alerts: [
            "<strong>విత్తన ఎంపిక:</strong> నాణ్యమైన, ధృవీకరించబడిన పత్తి మరియు వరి విత్తనాలను మాత్రమే కొనుగోలు చేయండి. బిల్లు భద్రపరుచుకోండి.",
            "<strong>వర్షాధార పంటలు:</strong> తొలకరి వర్షాలు పడిన తర్వాతే (తగినంత తేమ ఉన్నప్పుడే) విత్తనాలు విత్తాలి."
        ]
    },
    {
        month: 7,
        title: "🌧️ జూలై నెల హెచ్చరికలు (Sowing & Weeding)",
        alerts: [
            "<strong>కలుపు యాజమాన్యం:</strong> వర్షాల తరువాత పొలంలో కలుపు మొక్కలు ఎక్కువగా పెరుగుతాయి, సమయానికి తొలగించండి.",
            "<strong>యూరియా మొదటి విడత:</strong> వరి మరియు పత్తి పంటలకు వయసును బట్టి మొదటి విడత నత్రజని (యూరియా) అందించాలి."
        ]
    },
    {
        month: 8, // ప్రస్తుత నెల (ఆగస్టు)
        title: "🌿 ఆగస్టు నెల హెచ్చరికలు (Pest & Disease Alert)",
        alerts: [
            "<strong>రసం పీల్చే పురుగులు:</strong> వర్షాకాలం కావడంతో తెల్లదోమ, తామర పురుగుల ఉధృతి ఉండే అవకాశం ఉంది. వ్యవసాయ అధికారుల సలహాతో మందులు పిచికారీ చేయండి.",
            "<strong>నీటి నిల్వ:</strong> వరి పొలంలో ఎప్పుడూ ఒక మోస్తరు నీరు నిల్వ ఉండేలా చూసుకోవాలి."
        ]
    },
    {
        month: 9,
        title: "☀️ సెప్టెంబర్ నెల హెచ్చరికలు (Growth Stage)",
        alerts: [
            "<strong>గులాబీ పురుగు నివారణ:</strong> పత్తిలో పూత మరియు కాయ దశ ఇది. పురుగు ఆశించకుండా లింగాకర్షక బుట్టలు (Pheromone traps) ఏర్పాటు చేయండి."
        ]
    },
    {
        month: 10,
        title: "🌾 అక్టోబర్ నెల హెచ్చరికలు (Harvest & Rabi Prep)",
        alerts: [
            "<strong>స్వల్పకాలిక వరి కోతలు:</strong> ముందస్తుగా వేసిన వరి రకాలు కోతకు వస్తాయి. ధాన్యం ఆరబెట్టుకోవడానికి ఏర్పాట్లు చేసుకోండి."
        ]
    },
    {
        month: 11,
        title: "❄️ నవంబర్ నెల హెచ్చరికలు (Rabi Sowing)",
        alerts: [
            "<strong>రబీ విత్తనాలు:</strong> శెనగ, వేరుశనగ మరియు ఇతర రబీ పంటల విత్తనాలకు ఇది సరైన సమయం."
        ]
    }
];

function loadAutoCropReminders() {
    let container = document.getElementById("reminderListContainer");
    if (!container) return;
    container.innerHTML = "";

    let currentDate = new Date();
    let currentMonth = currentDate.getMonth() + 1;

    let activeAlert = cropRemindersData.find(item => item.month === currentMonth);
    
    if (!activeAlert) {
        activeAlert = cropRemindersData[2]; // డిఫాల్ట్ ఆగస్టు హెచ్చరికలు
    }

    let card = document.createElement("div");
    card.style.cssText = "background: #fff8e1; border: 1px solid #ffe0b2; padding: 15px; border-radius: 8px;";

    let tasksHtml = "";
    activeAlert.alerts.forEach(alertText => {
        tasksHtml += `<p style="font-size: 14px; color: #333; margin: 8px 0; line-height: 1.5;">• ${alertText}</p>`;
    });

    card.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <span style="font-size: 12px; color: #e65100; font-weight: bold;">⏰ ఆటోమేటిక్ అలర్ట్ (లైవ్)</span>
            <span style="font-size: 12px; color: #2e7d32; font-weight: bold;">ప్రస్తుత నెల</span>
        </div>
        <h3 style="color: #e65100; margin: 5px 0 10px 0; font-size: 16px;">${activeAlert.title}</h3>
        ${tasksHtml}
    `;
    
    container.appendChild(card);
}

function scrollToReminders() {
    hideAllSections();
    var section = document.getElementById("reminderSection");
    if (section) {
        section.style.display = "block";
        section.scrollIntoView({ behavior: 'smooth' });
    }
    loadAutoCropReminders();
}


// ==========================================
// 3. ప్రధాన ఫీచర్లు (వాతావరణం, మార్కెట్, పథకాలు, వార్తలు మొదలైనవి)
// ==========================================

function openWeatherPopup(data) {
    let popup = document.getElementById('weatherPopupModal');
    if (!popup) {
        popup = document.createElement('div');
        popup.id = 'weatherPopupModal';
        popup.style.cssText = "position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.7); display:flex; justify-content:center; align-items:center; z-index:9999;";
        document.body.appendChild(popup);
    }
    popup.innerHTML = `
        <div style="background:white; padding:20px; border-radius:10px; width:90%; max-width:400px; text-align:center;">
            <h2>🌤️ వాతావరణ సమాచారం (పాప్‌అప్)</h2>
            <p><strong>ఉష్ణోగ్రత:</strong> ${data ? data.temp + '°C' : 'సమాచారం అందుబాటులో లేదు'}</p>
            <p><strong>తేమ (Humidity):</strong> ${data ? data.humidity + '%' : '--'}</p>
            <p><strong>గాలి వేగం:</strong> ${data ? data.wind + ' km/h' : '--'}</p>
            <p><strong>వాతావరణ స్థితి:</strong> వర్షం / ఎండ సూచన సరిగ్గా గమనించండి.</p>
            <button onclick="document.getElementById('weatherPopupModal').style.display='none'" style="padding:10px 20px; background:green; color:white; border:none; border-radius:5px; cursor:pointer; margin-top:15px;">మూసివేయి</button>
        </div>
    `;
    popup.style.display = 'flex';
}

const marketPricesData = [
    { market: "వరంగల్ (TS)", crop: "మిర్చి", price: "₹18,500 / క్వింటాల్" },
    { market: "ఖమ్మం (TS)", crop: "పత్తి", price: "₹7,200 / క్వింటాల్" },
    { market: "నిజామాబాద్ (TS)", crop: "పసుపు", price: "₹13,000 / క్వింటాల్" },
    { market: "గుంటూరు (AP)", crop: "మిర్చి", price: "₹19,200 / క్వింటాల్" },
    { market: "కర్నూలు (AP)", crop: "ఉల్లిపాయ", price: "₹2,500 / క్వింటాల్" },
    { market: "రాజమండ్రి (AP)", crop: "వరి (ధాన్యం)", price: "₹2,320 / క్వింటాల్" }
];

const allCropsList = [
    { name: "వరి (Paddy)", desc: "విత్తనం ఎంపిక నుండి కోత వరకు పూర్తి సాంకేతిక గైడ్." },
    { name: "పత్తి (Cotton)", desc: "గులాబీ పురుగు నివారణ, ఎరువులు మరియు సాగు పద్ధతులు." },
    { name: "మిర్చి (Chili)", desc: "తామర పురుగు నివారణ, నీటి యాజమాన్యం." },
    { name: "మొక్కజొన్న (Maize)", desc: "అధిక దిగుబడినిచ్చే హైబ్రిడ్ రకాలు." },
    { name: "వేరుశెనగ (Groundnut)", desc: "నేల తయారీ మరియు కాయ గట్టిపడే దశలో తీసుకోవాల్సిన జాగ్రత్తలు." },
    { name: "టమాటా & కూరగాయలు", desc: "తెగుళ్ల నివారణకు సరైన మందుల పిచికారీ." }
];

const latestGovtSchemes = [
    {
        title: "🌱 రైతు భరోసా / పీఎం కిసాన్ (PM Kisan & Rythu Bharosa)",
        desc: "రైతులకు పెట్టుబడి సాయం కింద నేరుగా బ్యాంక్ ఖాతాల్లో నగదు జమ చేసే పథకం.",
        status: "అందుబాటులో ఉంది (Active)",
        link: "https://pmkisan.gov.in"
    },
    {
        title: "🌾 పంట రుణ మాఫీ పథకం (Crop Loan Waiver)",
        desc: "అర్హులైన రైతుల పంట బకాయి రుణాలను ప్రభుత్వం మాఫీ చేసే తాజా పథకం.",
        status: "అమలులో ఉంది",
        link: "#"
    },
    {
        title: "💧 ఉచిత వ్యవసాయ విద్యుత్ & మోటార్లు (Free Power)",
        desc: "వ్యవసాయ భూములకు 24 గంటలు ఉచిత నాణ్యమైన విద్యుత్ సరఫరా.",
        status: "నిరంతరం కొనసాగుతుంది",
        link: "#"
    },
    {
        title: "🚜 నేషనల్ మిషన్ ఆన్ అగ్రికల్చర్ మెకానిజషన్ (Farm Machinery Subsidy)",
        desc: "ట్రాక్టర్లు, రోటవేటర్లు మరియు ఇతర వ్యవసాయ పరికరాలపై 40% నుండి 50% వరకు రాయితీ.",
        status: "దరఖాస్తులు స్వీకరించబడుతున్నాయి",
        link: "https://agrimachinery.nic.in"
    }
];

const trainingVideosData = {
    'paddy': {
        title: "🌾 వరి సాగు శిక్షణ వీడియోలు (Paddy A to Z)",
        desc: "🌾 వరి సాగు విధానం మరియు మెలకువల వీడియోల జాబితా ఇక్కడ వస్తుంది.",
        videos: [
            { title: "వరిలో నారు మడి తయారీ మరియు విత్తన శుద్ధి", url: "https://www.youtube.com/results?search_query=paddy+cultivation+telugu" },
            { title: "వరిలో ఎరువుల యాజమాన్యం మరియు కలుపు నివారణ", url: "https://www.youtube.com/results?search_query=paddy+fertilizer+management+telugu" }
        ]
    },
    'cotton': {
        title: "🌱 పత్తి సాగు శిక్షణ వీడియోలు (Cotton A to Z)",
        desc: "🌱 పత్తి సాగులో తీసుకోవాల్సిన జాగ్రత్తల వీడియోలు ఇక్కడ వస్తాయి.",
        videos: [
            { title: "పత్తిలో విత్తనాలు విత్తే విధానం మరియు దూరం", url: "https://www.youtube.com/results?search_query=cotton+sowing+methods+telugu" },
            { title: "పత్తిలో గులాబీ పురుగు నివారణ చర్యలు", url: "https://www.youtube.com/results?search_query=cotton+pink+bollworm+management+telugu" }
        ]
    },
    'chili': {
        title: "🌶️ మిర్చి సాగు శిక్షణ వీడియోలు (Chili A to Z)",
        desc: "🌶️ మిర్చి పంటలో తెగుళ్ల నివారణ వీడియోలు ఇక్కడ వస్తాయి.",
        videos: [
            { title: "మిర్చిలో తామర పురుగు (Thrips) మరియు తెగుళ్ల నివారణ", url: "https://www.youtube.com/results?search_query=chili+thrips+management+telugu" },
            { title: "మిర్చిలో డ్రిప్ ఇరిగేషన్ & ఎరువుల యాజమాన్యం", url: "https://www.youtube.com/results?search_query=chili+drip+irrigation+telugu" }
        ]
    },
    'maize': {
        title: "🌽 మొక్కజొన్న సాగు శిక్షణ (Maize A to Z)",
        desc: "🌽 మొక్కజొన్న సాగు పద్ధతుల వీడియోలు ఇక్కడ వస్తాయి.",
        videos: [
            { title: "మొక్కజొన్నలో అధిక దిగుబడినిచ్చే హైబ్రిడ్ రకాలు", url: "https://www.youtube.com/results?search_query=maize+cultivation+telugu" }
        ]
    }
};

const dailyAgricultureNews = [
    {
        date: "2026-08-01",
        title: "🌾 ధాన్యం కొనుగోలు కేంద్రాలపై ప్రభుత్వ తాజా ఆదేశాలు",
        desc: "రైతులు తమ పంట ఉత్పత్తులను సమీపంలోని ఐకేపీ (IKP) కేంద్రాలలో విక్రయించాలని వ్యవసాయ శాఖ సూచించింది.",
        source: "సాక్షి / ఈనాడు అగ్రికల్చర్"
    },
    {
        date: "2026-08-01",
        title: "💧 వర్షాకాల సాగులో రైతులు తీసుకోవాల్సిన మెలుకువలు",
        desc: "ప్రస్తుత వర్షపాతాన్ని దృష్టిలో ఉంచుకుని వరి మరియు పత్తి పంటలలో నీటి యాజమాన్యంపై వ్యవసాయ అధికారుల సలహాలు.",
        source: "టెస్కో (PJTSAU)"
    },
    {
        date: "2026-07-31",
        title: "🚜 రైతు భరోసా నిధుల విడుదలపై ప్రభుత్వం స్పష్టత",
        desc: "అర్హులైన ప్రతి రైతు ఖాతాలో త్వరలోనే పెట్టుబడి సాయం జమ చేయనున్నట్లు రాష్ట్ర ప్రభుత్వం వెల్లడించింది.",
        source: "వ్యవసాయ శాఖ వార్తలు"
    }
];

function scrollToVideos() {
    hideAllSections();
    var section = document.getElementById("videosSection");
    if (section) {
        section.style.display = "block";
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollToNews() {
    hideAllSections();
    var section = document.getElementById("newsSection");
    if (section) {
        section.style.display = "block";
        section.scrollIntoView({ behavior: 'smooth' });
    }
    loadDailyNews();
}

function loadTrainingVideos(cropKey) {
    let container = document.getElementById("videosListContainer");
    if (!container) return;
    container.innerHTML = "";

    let categoryData = trainingVideosData[cropKey];

    if (!categoryData) {
        container.innerHTML = `
            <div style="background: #fff3e0; border: 1px solid #ffe0b2; padding: 15px; border-radius: 8px; text-align: center;">
                <h3 style="color: #e65100; margin-top: 0; font-size: 16px;">సమాచారం అందుబాటులో లేదు</h3>
                <p style="font-size: 14px; color: #333;">మీరు వెతికిన అంశానికి సంబంధించిన వీడియోలు త్వరలో అప్‌డేట్ చేయబడతాయి.</p>
            </div>
        `;
        return;
    }

    let heading = document.createElement("h2");
    heading.style.cssText = "color: #2e7d32; font-size: 18px; margin-bottom: 15px;";
    heading.innerText = categoryData.title;
    container.appendChild(heading);

    if (categoryData.desc) {
        let descP = document.createElement("p");
        descP.style.cssText = "font-size: 15px; color: #2e7d32; font-weight: bold; text-align: center; margin: 0 0 15px 0;";
        descP.innerText = categoryData.desc;
        container.appendChild(descP);
    }

    categoryData.videos.forEach(video => {
        let card = document.createElement("div");
        card.style.cssText = "background: #f1f8e9; border: 1px solid #c5e1a5; padding: 12px 15px; border-radius: 8px; margin-bottom: 10px; display: flex; justify-content: space-between; align-items: center;";
        
        card.innerHTML = `
            <span style="font-size: 14px; color: #333; font-weight: bold; width: 70%;">${video.title}</span>
            <a href="${video.url}" target="_blank" style="background: #2e7d32; color: white; padding: 8px 12px; border-radius: 5px; font-size: 13px; text-decoration: none; text-align: center;">వీడియో చూడండి ▶</a>
        `;
        container.appendChild(card);
    });
}

function loadDailyNews() {
    let container = document.getElementById("newsListContainer");
    if (!container) return;
    container.innerHTML = "";

    dailyAgricultureNews.forEach(news => {
        let card = document.createElement("div");
        card.style.cssText = "background: #f9fbe7; border: 1px solid #dcedc8; padding: 15px; border-radius: 8px; margin-bottom: 10px;";
        
        card.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
                <span style="font-size: 12px; color: #e65100; font-weight: bold;">📅 ${news.date}</span>
                <span style="font-size: 12px; color: #2e7d32; font-weight: bold;">${news.source}</span>
            </div>
            <h3 style="color: #2e7d32; margin: 5px 0; font-size: 16px;">${news.title}</h3>
            <p style="font-size: 14px; color: #333; margin: 0; line-height: 1.5;">${news.desc}</p>
        `;
        container.appendChild(card);
    });
}

function scrollToSchemes() {
    hideAllSections();
    var section = document.getElementById("schemesSection");
    if (section) {
        section.style.display = "block";
        section.scrollIntoView({ behavior: 'smooth' });
    }
    loadGovernmentSchemes();
}

// అన్ని సెక్షన్లను క్లోజ్/దాచిపెట్టే ప్రధాన ఫంక్షన్ (అన్ని మాడ్యూల్స్‌తో సహా)
function hideAllSections() {
    let cropsSec = document.getElementById("cropsSection");
    if (cropsSec) cropsSec.style.display = "none";

    let marketSec = document.getElementById("marketSection");
    if (marketSec) marketSec.style.display = "none";

    let weatherSec = document.getElementById("weatherSectionContainer");
    if (weatherSec) weatherSec.style.display = "none";

    let fertSec = document.getElementById("fertilizerSection");
    if (fertSec) fertSec.style.display = "none";

    let spraySec = document.getElementById("spraySection");
    if (spraySec) spraySec.style.display = "none";

    let doctorSec = document.getElementById("doctorSection");
    if (doctorSec) doctorSec.style.display = "none";

    let schemesSec = document.getElementById("schemesSection");
    if (schemesSec) schemesSec.style.display = "none";
    
    var seasonalSec = document.getElementById("seasonalCalendarSection");
    if (seasonalSec) { seasonalSec.style.display = "none"; }
    
    var videosSec = document.getElementById("videosSection");
    if (videosSec) { videosSec.style.display = "none"; }

    var newsSec = document.getElementById("newsSection");
    if (newsSec) { newsSec.style.display = "none"; }

    var reminderSec = document.getElementById("reminderSection");
    if (reminderSec) { reminderSec.style.display = "none"; }
}

function closeSection(sectionId) {
    let sec = document.getElementById(sectionId);
    if (sec) {
        sec.style.display = "none";
    }
}

function loadGovernmentSchemes() {
    let container = document.getElementById("schemesListContainer");
    if (!container) return;
    container.innerHTML = "";

    latestGovtSchemes.forEach(scheme => {
        let card = document.createElement("div");
        card.style.cssText = "background: #f9fbe7; border: 1px solid #dcedc8; padding: 15px; border-radius: 8px;";
        
        card.innerHTML = `
            <h3 style="color: #2e7d32; margin-top: 0; font-size: 16px;">${scheme.title}</h3>
            <p style="font-size: 14px; color: #333; margin: 5px 0 10px 0; line-height: 1.5;">${scheme.desc}</p>
            <div style="display: flex; justify-content: space-between; align-items: center; font-size: 13px;">
                <span style="color: #e65100; font-weight: bold;">స్థితి: ${scheme.status}</span>
                <a href="${scheme.link}" target="_blank" style="color: #1b5e20; font-weight: bold; text-decoration: none;">మరిన్ని వివరాలు &rarr;</a>
            </div>
        `;
        container.appendChild(card);
    });
}

function applyLanguage() {
    const t = translations["te"];
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (t[key]) el.innerHTML = t[key];
    });
}

window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        loadingScreen.style.display = 'none';
    }
    applyLanguage();
});
