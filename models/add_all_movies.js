import { Movie } from './movie.js';

const filmsToAdd = [
    {
        title: "The Perfect Candidate",
        arabicTitle: "المرشحة المثالية",
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
        director: "Rana Kazkaz, Anas Khalaf",
        year:  2020
    },
    {
        title: "200 Meters",
        arabicTitle: "200 متر",
        country: "Palestine",
        director: "Ameen Nayfeh",
        year:  2020
    },
]

Movie.create(filmsToAdd, (err, newMovie) => {
    if (err) console.log(err);
    else console.log(newMovie);
})