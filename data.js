let arabicFilms = [
    {
        title: "The Perfect Candidate",
        arabicTitle: "المرحشة المثالية",
        country: "Saudi Arabia",
        director: "Haifaa Al-Mansour",
        year:  2019
    },
    {
        title: "Captains of Zaatari",
        arabicTitle: "كباتن الزعتري",
        country: "Egypt",
        director: "Ali El Arabi",
        year:  2021,
    },
    {
        title: "The Unknown Saint",
        arabicTitle: "سيد المجهول",
        country: "Morocco",
        director:  "Alaa Eddine Aljem",
        year:  2019 
    },
    {
        title: "The Translator",
        arabicTitle: "المترجم",
        country: "Syria",
        director: ["Rana Kazkaz", "Anas Khalaf"],
        year:  2020
    },
    {
        title: "200 Meters",
        arabicTitle: "200 متر",
        country: "Palestine",
        director: "Ameen Nayfeh",
        year:  2020
    },
];

const getAll = () => {
    return arabicFilms;
};

const getItem = (title) => {
    return arabicFilms.find((film) => {
        return film.title.toLowerCase() === title.toLowerCase();
    })
};

export { getAll, getItem };
