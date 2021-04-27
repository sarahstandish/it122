let arabicFilms = [
    {
        id: 0,
        title: "The Perfect Candidate",
        arabicTitle: "المرشحة المثالية",
        country: "Saudi Arabia",
        director: "Haifaa Al-Mansour",
        year:  2019
    },
    {
        id: 1,
        title: "Captains of Zaatari",
        arabicTitle: "كباتن الزعتري",
        country: "Egypt",
        director: "Ali El Arabi",
        year:  2021,
    },
    {
        id: 2,
        title: "The Unknown Saint",
        arabicTitle: "سيد المجهول",
        country: "Morocco",
        director:  "Alaa Eddine Aljem",
        year:  2019 
    },
    {
        id: 3,
        title: "The Translator",
        arabicTitle: "المترجم",
        country: "Syria",
        director: ["Rana Kazkaz", "Anas Khalaf"],
        year:  2020
    },
    {
        id: 4,
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

const getItem = (id) => {
    return arabicFilms.find((film) => {
        return film.id === parseInt(id);
    })
};

export { getAll, getItem };