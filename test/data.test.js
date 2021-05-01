/* eslint-disable no-undef */
import { expect } from 'chai';
import { getAll, getItem, addItem, deleteItem } from '../data.js';

describe("Data functions", () => {
    it("Returns the first object in the arabicFilms array, which is 'The Perfect Candidate'", () => {
        
        expect(getItem(0)).to.eql({
            id: 0,
            title: "The Perfect Candidate",
            arabicTitle: "المرشحة المثالية",
            country: "Saudi Arabia",
            director: "Haifaa Al-Mansour",
            year:  2019
        });
    });

    it("Won't return anything when provided with an invalid id.", () => {
        expect(getItem(-1)).to.be.undefined;
    })

    it("Adds an object to the arabicFilms array", () => {
        let currentLen = getAll().length;
        let newObj = {
            title: "test title",
            arabicTitle: "عنوان",
            country: "test country",
            director: "test director",
            year:  1111
        };
        addItem(newObj);
        expect(getItem(currentLen)).to.eql(newObj);
    });

    it("Fails to add an invalid object to the arabicFilms array", () => {
        let currentLen = getAll().length;
        //object does not have all required properties
        let newObj = {
            title: "test title",
            arabicTitle: "عنوان",
        };
        addItem(newObj);
        //length of the array should not have changed
        expect(getAll().length).to.equal(currentLen);
    });

    it("Fails to add a duplicate film to the arabicFilms array", () => {
        let newFilm = getAll()[0];

        let messageObj = addItem(newFilm);

        expect(messageObj.success).to.equal(false);
    })

    it("Deletes an item from the arabicFilms array", () => {
        let i = Math.floor(Math.random(0 * getAll().length));

        deleteItem(i);
        expect(getItem(i)).to.be.undefined;
    });

    it("When passed an invalid index, fails to delete an item from the arabicFilms array", () => {
        //find the id of the last obj and add 1 to it
        //I guess I could use the length here, but I was thinking that if several items had been deleted already, the length and the greatest ID number may not correlate
        let currentLen = getAll().length;
        let i = getItem(currentLen).id + 1;
        deleteItem(i);
        expect(getAll().length).to.equal(currentLen);

    });

});
