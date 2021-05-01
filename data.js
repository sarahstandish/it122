import { json } from "express";

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
    });
};

const titleExists = title => {
    if(arabicFilms.find(film => film.title.toLowerCase() === title.toLowerCase())) {
        return true;
    }
}

const addItem = obj => {

    let returnObj = {
        success: false,
        message: "You must add an object with all required properties."
    }

    //check that all required properties exist
    if (obj.title && obj.arabicTitle && obj.director && obj.country && obj.year) {

        // check that the title doesn't already exist
        if (!titleExists(obj.title)) {
        //add an id incremented up by one
        obj.id = arabicFilms.length;
        arabicFilms.push(obj);
        returnObj.success = true;
        returnObj.message = "Successfully added";
        } else {
            returnObj.message = "This title already exists";
        }
    }

    return returnObj;
};

const deleteItem = id => {

    let returnObj = {
        success: false,
        message: "Film ID doesnt exist"
    }
    
    let film = arabicFilms.find((film) => {
        return film.id === id;
    });
    if (film) {
        let index = arabicFilms.indexOf(film);
        arabicFilms.splice(index, 1);
        returnObj.success = true;
        returnObj.message = "Sucessfully deleted";
    }

    return returnObj;
}

export { getAll, getItem, deleteItem, addItem };