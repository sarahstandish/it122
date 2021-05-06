'use strict'

import { Movie } from './movie.js';

//find all documents
//first paramater is a json object\
//database access is slow so it needs to be inherently asynchronous
//commands always must be in callback that runs when the operation is complete
Movie.find({}, (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
    return;
});

// return all records
//find is the method operating on the collection
// do something if it finds it, do something else if there's an error
// find returns an array
// can use findOne to return an object
Movie.find({}).lean().then((books) => {
    console.log(books);
}).catch(err => next(err));

//return all records that match a condition
//this is throwing an error that I don't understand
// Movie.find({"year":"2019"}).lean().then((books) => {
//     console.log(book);
// }).catch(err => next(err));

//when adding records, decide which approach you'll take

