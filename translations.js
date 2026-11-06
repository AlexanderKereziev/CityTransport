const translations = {
    bg: {
        // General and navigation
        pageTitle: "Градски Транспорт",
        brand: "Градски Транспорт",
        contactBrand: "Градски Транспорт - Гоце Делчев",
        home: "Начало",
        planning: "Планиране",
        lines: "Линии",
        transfers: "Трансфери",
        stops: "Спирки",
        schedules: "Разписания",
        contacts: "Контакти",

        // Homepage
        searchTitle: "Търсене на транспорт",
        searchPlaceholder: "Въведете линия или спирка...",
        searchButton: "Търси",
        quickAccess: "Бърз достъп",
        planTrip: "Планирайте вашето пътуване",
        viewLines: "Преглед на всички линии",
        viewStops: "Преглед на всички спирки",
        viewSchedules: "Разписания по часове",
        welcomeTitle: "Добре дошли",
        welcomeText: "Добре дошли в официалната система за информация на градския транспорт. Тук можете бързо да откриете разписания, маршрути и да планирате пътуването си.",
        footer: "© 2026 Градски Транспорт - Екип 1, XII \"В\" клас",

        // Contact page
        contactPageTitle: "Контакти - Градски Транспорт Гоце Делчев",
        contactInfoTitle: "Информация за връзка",
        contactIntro: "Имате въпроси, предложения или искате да подадете сигнал относно разписанията и обслужването на градския транспорт в гр. Гоце Делчев? Свържете се с нашия екип.",
        addressLabel: "📍 Адрес на управление:",
        addressValue: "гр. Гоце Делчев, ул. „Търговска“ № 1 (ПМГ „Яне Сандански“)",
        phoneLabel: "📞 Телефон за връзка:",
        emailLabel: "✉️ Имейл адрес:",
        workingHoursLabel: "⏰ Работно време:",
        workingHoursValue: "Понеделник - Петък: 08:30 – 17:30 ч.",
        contactFormTitle: "Изпратете ни съобщение или сигнал",
        nameLabel: "Име и фамилия:",
        namePlaceholder: "Въведете вашето име...",
        emailFieldLabel: "Имейл адрес:",
        subjectLabel: "Тема на съобщението:",
        subjectPlaceholder: "напр. Закъснение на автобус № 1",
        messageLabel: "Вашето съобщение:",
        messagePlaceholder: "Опишете подробно вашето запитване, препоръка или сигнал тук...",
        sendMessage: "Изпрати съобщение",
        sendingMessage: "Изпращане...",
        contactSuccess: "Съобщението беше изпратено успешно! Благодарим Ви.",
        contactError: "Възникна грешка при изпращането. Моля, опитайте отново.",
        contactFooter: "© 2026 Градски Транспорт - Екип 1, XII \"В\" клас, ПМГ \"Яне Сандански\"",

        // Lines page
        linesPageTitle: "Линии - Градски Транспорт",
        searchLineTitle: "Търсене на линия",
        lineSearchPlaceholder: "Въведете номер на линия...",
        searchLineButton: "Търси",
        showAllButton: "Покажи всички",
        allLinesTitle: "Всички линии",
        loadingLines: "Зареждане на линиите...",
        transport: "Градски транспорт",
        routeLabel: "Маршрут:",
        unknownStop: "Неизвестна спирка",
        noRouteData: "Няма налични данни за маршрута.",
        stopsCount: "спирки",
        viewSchedule: "Виж разписанието",
        noLinesFound: "Не са намерени линии.",
        linesLoadError: "Грешка при зареждането на линиите.",
        bus: "Автобус",
        trolleybus: "Тролейбус",
        linesFooter: "© 2026 Градски Транспорт - Екип 1, XII \"В\" клас",

        // Journey planner
        planPageTitle: "Планиране на пътуване - Градски Транспорт",
        planHeading: "Планирайте своето пътуване",
        planIntro: "Изберете начална и крайна спирка. Ще потърсим директни маршрути и маршрути с едно прекачване и ще изчислим времето за пътуване.",
        startStopLabel: "Начална спирка (От):",
        endStopLabel: "Крайна спирка (До):",
        departureTimeLabel: "Час на тръгване:",
        loadingStopsOption: "Зареждане на спирките...",
        selectStopOption: "Изберете спирка...",
        swapStops: "↕ Размени спирките",
        searchRoute: "Търси маршрут",
        loadingPlanner: "Зареждане на данните...",
        proposedRoutes: "Предложени маршрути",
        plannerEmpty: "Изберете две спирки и натиснете „Търси маршрут“.",
        insufficientStops: "Няма достатъчно спирки за планиране.",
        noUsableLines: "Заредени са спирките, но няма линии с подредени спирки в полето route.",
        plannerLoaded: "Заредени са {stops} спирки, {lines} линии и {schedules} записа за разписания.",
        plannerLoadError: "Неуспешно зареждане от Firebase. Проверете firebase.js и правилата за четене във Firestore.",
        stopLoadError: "Грешка при зареждане",
        selectBothStops: "Моля, изберете начална и крайна спирка.",
        sameStopError: "Началната и крайната спирка трябва да са различни.",
        noRouteFound: "Не намерихме маршрут от „{from}“ до „{to}“. Проверете дали двете спирки присъстват в маршрутите на линиите.",
        routesFound: "Намерени са {count} възможни маршрута. Показани са до 10.",
        travelTime: "Време в движение: ~{duration} мин.",
        noSegmentTimes: "Няма въведени времена за този участък",
        departureTime: "Час на тръгване: {time}",
        selectTimeForSchedule: "Изберете час, за да проверите разписанието",
        transferAt: "↳ Прекачване на {stop}",
        oneTransfer: "1 прекачване",
        noTransfer: "Без прекачване",
        segmentCount: "· {count} участъка",
        transferWaitNote: "Времето е сбор от двата участъка и не включва чакането за втората линия.",
        viewSchedulesLink: "Виж разписанията",
        plannerTitle: "Планирайте своето пътуване",
        plannerIntro: "Изберете начална и крайна спирка. Ще потърсим директни маршрути и маршрути с едно прекачване и ще изчислим времето за пътуване.",
        fromStopLabel: "Начална спирка (От):",
        toStopLabel: "Крайна спирка (До):",
        loadingStops: "Зареждане на спирките...",
        selectStop: "Изберете спирка...",
        suggestedRoutes: "Предложени маршрути",
        chooseStopsPrompt: "Изберете две спирки и натиснете „Търси маршрут“.",
        plannerFooter: "© 2026 Градски Транспорт - Екип 1, XII \"В\" клас",
        loadedData: "Заредени са {stops} спирки, {lines} линии и {schedules} записа за разписания.",
        sameStopsError: "Началната и крайната спирка трябва да са различни.",
        travelDuration: "Време в движение: ~{minutes} мин.",
        noTravelTimes: "Няма въведени времена за този участък.",
        routeSegments: "· {count} участъка",
        transferWaitingNote: "Времето е сбор от двата участъка и не включва чакането за втората линия.",
        viewSchedulesButton: "Виж разписанията",
        chooseTimeForSchedule: "Изберете час, за да проверите разписанието",

        // Schedules page
        schedulesPageTitle: "Разписания - Градски Транспорт",
        schedulesHeading: "Разписания",
        schedulesIntro: "Изберете линия, за да проверите часовете на тръгване.",
        loadingLinesSchedule: "Зареждане на линиите...",
        loadingSchedules: "Зареждане на разписанията...",
        noActiveSchedules: "Няма налични активни разписания.",
        scheduleLoadError: "Грешка при зареждането на разписанията. Проверете връзката с базата данни.",
        noActiveScheduleForLine: "Няма активно разписание за тази линия.",
        departureHeading: "Часове на тръгване",
        noDepartures: "Няма въведени часове.",
        scheduleInfo: "Часовете са съгласно публикуваното разписание.",
        bus7: "Автобус № 7",
        trolleybus5: "Тролейбус № 5",
        bus204: "Автобус № 204",

        // Stops page
        stopsPageTitle: "Спирки Гоце Делчев - Градски Транспорт",
        stopsSearchHeading: "Търсене на спирка в гр. Гоце Делчев",
        stopSearchPlaceholder: "Въведете име или код на спирка (напр. ПМГ, Болница)...",
        searchStopButton: "Търси спирка",
        accessibilityFilters: "Филтри за достъпност:",
        accessibleOnly: "♿ Само достъпни спирки (рампи / нископодови автобуси)",
        findNearbyStops: "📍 Намери спирки близо до мен",
        updateLocation: "📍 Обнови местоположението",
        stopsMapHeading: "Интерактивна карта на спирките в Гоце Делчев",
        mapInstruction: "Кликнете върху спирка от картата или списъка по-долу, за да прегледате информацията за нея.",
        showLines: "Показване на линии:",
        loadingRouteLines: "Зареждане на линиите...",
        noAvailableRoutes: "Няма налични маршрути.",
        accessibleStopLegend: "♿ Достъпна спирка (рампа / нископодов автобус)",
        standardStopLegend: "Стандартна спирка",
        stopsListHeading: "Списък на градските спирки",
        loadingStopsList: "Зареждане на спирките...",
        stopsLoadError: "Неуспешно зареждане на спирките от базата данни. Проверете интернет връзката и настройките на Firestore.",
        unnamedStop: "Спирка без име",
        lineLabel: "Линия № {number}",
        cityLine: "Градска линия",
        stopCountLabel: "Спирки:",
        stopCodeLabel: "Код:",
        accessibleStop: "♿ Достъпна спирка",
        passingLines: "Минаващи линии:",
        noLineInformation: "Няма добавена информация за линиите.",
        viewFullSchedule: "Виж пълно разписание →",
        noStopsFound: "Няма намерени спирки в гр. Гоце Делчев по зададените критерии.",
        distanceLabel: "📍 Разстояние:",
        distanceMeters: "м",
        distanceKilometers: "км",
        standardStop: "Стандартна спирка",
        scheduleLink: "Разписание →",
        osmAttribution: "&copy; OpenStreetMap сътрудници",
        browserNoGeolocation: "Браузърът не поддържа GPS местоположение.",
        locating: "Определяне на местоположението...",
        nearbySorted: "Спирките са подредени по близост до вас.",
        locationFailed: "Неуспешно определяне на местоположението.",
        locationPermissionDenied: "Нямате разрешение за достъп до местоположението.",
        locationUnavailable: "Местоположението не е достъпно.",
        locationTimeout: "Времето за определяне на местоположението изтече.",
        yourLocation: "Вашето местоположение",
        stopCode: "Код:",
        cityName: "Гоце Делчев",
        stopsFooter: "© 2026 Градски Транспорт - Екип 1, XII \"В\" клас, ПМГ \"Яне Сандански\"",


        // Transfers page
        transferPageTitle: "Трансферни връзки - Градски Транспорт Гоце Делчев",
        transferHeading: "Трансферни връзки",
        transferIntro: "Тук можете да разгледате местата, на които пътниците могат да се прекачат между различни автобусни линии, както и близки спирки, между които може да се извърши пешеходен трансфер.",
        sharedStopsCount: "Общи спирки между линии",
        walkingTransfersCount: "Пешеходни трансфери",
        transferNoteTitle: "Забележка:",
        transferNote: "Разстоянията между близките спирки са изчислени по координатите им по права линия. Посоченото време за ходене е приблизително и действителният пешеходен маршрут може да бъде по-дълъг.",
        availableTransfers: "Налични трансфери",
        filterAll: "Всички",
        filterShared: "Общи спирки",
        filterWalking: "Пешеходни трансфери",
        loadingTransferInfo: "Зареждане на информацията...",
        loadingFirebaseData: "Зареждане на данните от Firebase...",
        sharedStopPopup: "Обща спирка",
        sharedStopBetweenLines: "Обща спирка между линии",
        transferHere: "Тук пътниците могат да се прекачат между следните линии:",
        viewStopsMap: "Разгледай всички спирки на картата",
        walkingConnection: "Пешеходна връзка между две спирки",
        walkingTransfer: "Пешеходен трансфер",
        meters: "метра",
        minutesWalking: "мин. пеша",
        approx: "около",
        noTransfersOfType: "Няма открити трансфери от този тип.",
        transfersFound: "Открити са {shared} общи спирки и {walking} пешеходни трансфера.",
        transferLoadError: "Възникна грешка при зареждането на трансферите.",
        transferDataLoadError: "Неуспешно зареждане на данните. Проверете връзката с Firebase и опитайте отново.",
        transferFooter: "© 2026 Градски Транспорт - Екип 1, XII \"В\" клас",
        transferLine: "Линия {number}",
        transferTypeLabel: "Вид:",
        walkingTime: "Около {minutes} мин.",
        walkingTransferPopup: "Пешеходен трансфер"
    },

    en: {
        // General and navigation
        pageTitle: "City Transport",
        brand: "City Transport",
        contactBrand: "City Transport - Gotse Delchev",
        home: "Home",
        planning: "Journey Planner",
        lines: "Lines",
        transfers: "Transfers",
        stops: "Stops",
        schedules: "Schedules",
        contacts: "Contacts",

        // Homepage
        searchTitle: "Search for Transport",
        searchPlaceholder: "Enter a line or stop...",
        searchButton: "Search",
        quickAccess: "Quick Access",
        planTrip: "Plan your journey",
        viewLines: "View all transport lines",
        viewStops: "View all stops",
        viewSchedules: "View departure schedules",
        welcomeTitle: "Welcome",
        welcomeText: "Welcome to the official public transport information system. Here you can quickly find schedules, routes, and plan your journey.",
        footer: "© 2026 City Transport - Team 1, Class XII \"B\"",

        // Contact page
        contactPageTitle: "Contacts - City Transport Gotse Delchev",
        contactInfoTitle: "Contact Information",
        contactIntro: "Do you have questions, suggestions, or would you like to report an issue regarding public transport schedules and services in Gotse Delchev? Get in touch with our team.",
        addressLabel: "📍 Administration address:",
        addressValue: "1 Targovska Street, Gotse Delchev (Yane Sandanski Mathematics and Science High School)",
        phoneLabel: "📞 Phone:",
        emailLabel: "✉️ Email address:",
        workingHoursLabel: "⏰ Working hours:",
        workingHoursValue: "Monday - Friday: 08:30 – 17:30",
        contactFormTitle: "Send us a message or report",
        nameLabel: "Full name:",
        namePlaceholder: "Enter your name...",
        emailFieldLabel: "Email address:",
        subjectLabel: "Message subject:",
        subjectPlaceholder: "e.g. Bus No. 1 delay",
        messageLabel: "Your message:",
        messagePlaceholder: "Describe your question, suggestion, or report in detail here...",
        sendMessage: "Send message",
        sendingMessage: "Sending...",
        contactSuccess: "Your message was sent successfully! Thank you.",
        contactError: "An error occurred while sending your message. Please try again.",
        contactFooter: "© 2026 City Transport - Team 1, Class XII \"B\", Yane Sandanski Mathematics and Science High School",

        // Lines page
        linesPageTitle: "Lines - City Transport",
        searchLineTitle: "Search for a line",
        lineSearchPlaceholder: "Enter a line number...",
        searchLineButton: "Search",
        showAllButton: "Show all",
        allLinesTitle: "All lines",
        loadingLines: "Loading lines...",
        transport: "Public transport",
        routeLabel: "Route:",
        unknownStop: "Unknown stop",
        noRouteData: "No route data available.",
        stopsCount: "stops",
        viewSchedule: "View schedule",
        noLinesFound: "No lines found.",
        linesLoadError: "Error loading lines.",
        bus: "Bus",
        trolleybus: "Trolleybus",
        linesFooter: "© 2026 City Transport - Team 1, Class XII \"B\"",

        // Journey planner
        planPageTitle: "Journey Planner - City Transport",
        planHeading: "Plan your journey",
        planIntro: "Choose your starting and destination stops. We will look for direct routes and routes with one transfer, and calculate the travel time.",
        startStopLabel: "Starting stop (From):",
        endStopLabel: "Destination stop (To):",
        departureTimeLabel: "Departure time:",
        loadingStopsOption: "Loading stops...",
        selectStopOption: "Select a stop...",
        swapStops: "↕ Swap stops",
        searchRoute: "Find route",
        loadingPlanner: "Loading data...",
        proposedRoutes: "Suggested routes",
        plannerEmpty: "Choose two stops and click \"Find route\".",
        insufficientStops: "There are not enough stops for journey planning.",
        noUsableLines: "Stops were loaded, but no lines with ordered stops were found in the route field.",
        plannerLoaded: "Loaded {stops} stops, {lines} lines, and {schedules} schedule records.",
        plannerLoadError: "Failed to load data from Firebase. Check firebase.js and the Firestore read rules.",
        stopLoadError: "Loading error",
        selectBothStops: "Please select both a starting stop and a destination stop.",
        sameStopError: "The starting stop and destination stop must be different.",
        noRouteFound: "No route was found from \"{from}\" to \"{to}\". Check whether both stops are included in the line routes.",
        routesFound: "Found {count} possible routes. Showing up to 10.",
        travelTime: "Travel time: ~{duration} min.",
        noSegmentTimes: "No travel times have been entered for this section.",
        departureTime: "Departure time: {time}",
        selectTimeForSchedule: "Select a time to check the schedule",
        transferAt: "↳ Transfer at {stop}",
        oneTransfer: "1 transfer",
        noTransfer: "No transfer",
        segmentCount: "· {count} sections",
        transferWaitNote: "The time is the sum of both sections and does not include waiting time for the second line.",
        viewSchedulesLink: "View schedules",
        plannerTitle: "Plan your journey",
        plannerIntro: "Choose your starting and destination stops. We will look for direct routes and routes with one transfer, and calculate the travel time.",
        fromStopLabel: "Starting stop (From):",
        toStopLabel: "Destination stop (To):",
        loadingStops: "Loading stops...",
        selectStop: "Select a stop...",
        suggestedRoutes: "Suggested routes",
        chooseStopsPrompt: "Choose two stops and click \"Find route\".",
        plannerFooter: "© 2026 City Transport - Team 1, Class XII \"B\"",
        loadedData: "Loaded {stops} stops, {lines} lines, and {schedules} schedule records.",
        sameStopsError: "The starting stop and destination stop must be different.",
        travelDuration: "Travel time: ~{minutes} min.",
        noTravelTimes: "No travel times have been entered for this section.",
        routeSegments: "· {count} sections",
        transferWaitingNote: "The time is the sum of both sections and does not include waiting time for the second line.",
        viewSchedulesButton: "View schedules",
        chooseTimeForSchedule: "Select a time to check the schedule",

        // Schedules page
        schedulesPageTitle: "Schedules - City Transport",
        schedulesHeading: "Schedules",
        schedulesIntro: "Select a line to check its departure times.",
        loadingLinesSchedule: "Loading lines...",
        loadingSchedules: "Loading schedules...",
        noActiveSchedules: "There are no active schedules available.",
        scheduleLoadError: "Error loading schedules. Check the database connection.",
        noActiveScheduleForLine: "There is no active schedule for this line.",
        departureHeading: "Departure times",
        noDepartures: "No departure times have been entered.",
        scheduleInfo: "Times are according to the published timetable.",
        bus7: "Bus No. 7",
        trolleybus5: "Trolleybus No. 5",
        bus204: "Bus No. 204",

        // Stops page
        stopsPageTitle: "Stops in Gotse Delchev - City Transport",
        stopsSearchHeading: "Find a stop in Gotse Delchev",
        stopSearchPlaceholder: "Enter a stop name or code (e.g. High School, Hospital)...",
        searchStopButton: "Search stops",
        accessibilityFilters: "Accessibility filters:",
        accessibleOnly: "♿ Accessible stops only (ramps / low-floor buses)",
        findNearbyStops: "📍 Find stops near me",
        updateLocation: "📍 Update location",
        stopsMapHeading: "Interactive map of stops in Gotse Delchev",
        mapInstruction: "Click a stop on the map or in the list below to view its information.",
        showLines: "Show lines:",
        loadingRouteLines: "Loading lines...",
        noAvailableRoutes: "No routes available.",
        accessibleStopLegend: "♿ Accessible stop (ramp / low-floor bus)",
        standardStopLegend: "Standard stop",
        stopsListHeading: "City bus stops",
        loadingStopsList: "Loading stops...",
        stopsLoadError: "Failed to load stops from the database. Check your internet connection and Firestore settings.",
        unnamedStop: "Unnamed stop",
        lineLabel: "Line No. {number}",
        cityLine: "City route",
        stopCountLabel: "Stops:",
        stopCodeLabel: "Code:",
        accessibleStop: "♿ Accessible stop",
        passingLines: "Serving lines:",
        noLineInformation: "No line information available.",
        viewFullSchedule: "View full schedule →",
        noStopsFound: "No stops in Gotse Delchev match the selected criteria.",
        distanceLabel: "📍 Distance:",
        distanceMeters: "m",
        distanceKilometers: "km",
        standardStop: "Standard stop",
        scheduleLink: "Timetable →",
        osmAttribution: "&copy; OpenStreetMap contributors",
        browserNoGeolocation: "Your browser does not support geolocation.",
        locating: "Finding your location...",
        nearbySorted: "Stops have been sorted by distance from your location.",
        locationFailed: "Unable to determine your location.",
        locationPermissionDenied: "You have not granted permission to access your location.",
        locationUnavailable: "Your location is unavailable.",
        locationTimeout: "The location request timed out.",
        yourLocation: "Your location",
        stopCode: "Code:",
        cityName: "Gotse Delchev",
        stopsFooter: "© 2026 City Transport - Team 1, Class XII \"B\", Yane Sandanski Mathematics and Science High School",

        // Transfers page
        transferPageTitle: "Transfer Connections - City Transport Gotse Delchev",
        transferHeading: "Transfer Connections",
        transferIntro: "Here you can explore locations where passengers can transfer between different bus lines, as well as nearby stops that allow transfers on foot.",
        sharedStopsCount: "Stops shared between lines",
        walkingTransfersCount: "Walking transfers",
        transferNoteTitle: "Note:",
        transferNote: "Distances between nearby stops are calculated as straight-line distances using their coordinates. Walking times are approximate, and the actual walking route may be longer.",
        availableTransfers: "Available Transfers",
        filterAll: "All",
        filterShared: "Shared stops",
        filterWalking: "Walking transfers",
        loadingTransferInfo: "Loading information...",
        loadingFirebaseData: "Loading data from Firebase...",
        sharedStopPopup: "Shared stop",
        sharedStopBetweenLines: "Shared stop between lines",
        transferHere: "Passengers can transfer here between the following lines:",
        viewStopsMap: "View all stops on the map",
        walkingConnection: "Walking connection between two stops",
        walkingTransfer: "Walking transfer",
        meters: "metres",
        minutesWalking: "min. walk",
        approx: "approx.",
        noTransfersOfType: "No transfers of this type were found.",
        transfersFound: "Found {shared} shared stops and {walking} walking transfers.",
        transferLoadError: "An error occurred while loading transfers.",
        transferDataLoadError: "Failed to load data. Check the Firebase connection and try again.",
        transferFooter: "© 2026 City Transport - Team 1, Class XII \"B\"",
        transferLine: "Line {number}",
        transferTypeLabel: "Type:",
        walkingTime: "About {minutes} min.",
        walkingTransferPopup: "Walking transfer"
    }
};

function getTranslation(key, values = {}) {
    const language = localStorage.getItem("cityTransportLanguage") || "bg";

    let translation =
        translations[language]?.[key] ??
        translations.bg[key] ??
        key;

    Object.entries(values).forEach(([placeholder, value]) => {
        translation = translation.replaceAll(
            `{${placeholder}}`,
            String(value)
        );
    });

    return translation;
}

function applyLanguage(language) {
    const selectedTranslations = translations[language] || translations.bg;

    document.documentElement.lang = language;

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n;
        if (selectedTranslations[key] !== undefined) {
            element.textContent = selectedTranslations[key];
        }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
        const key = element.dataset.i18nPlaceholder;
        if (selectedTranslations[key] !== undefined) {
            element.placeholder = selectedTranslations[key];
        }
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(element => {
        const key = element.dataset.i18nAlt;
        if (selectedTranslations[key] !== undefined) {
            element.alt = selectedTranslations[key];
        }
    });

    const languageButton = document.getElementById("language-toggle");

    if (languageButton) {
        languageButton.textContent = language === "bg"
            ? "🇬🇧 English"
            : "🇧🇬 Български";
    }

    localStorage.setItem("cityTransportLanguage", language);
    document.dispatchEvent(new Event("languageChanged"));
}

document.addEventListener("DOMContentLoaded", () => {
    const savedLanguage = localStorage.getItem("cityTransportLanguage") || "bg";
    applyLanguage(savedLanguage);

    const languageButton = document.getElementById("language-toggle");

    if (languageButton) {
        languageButton.addEventListener("click", () => {
            const currentLanguage =
                localStorage.getItem("cityTransportLanguage") || "bg";

            applyLanguage(currentLanguage === "bg" ? "en" : "bg");
        });
    }
});