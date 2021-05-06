import mongoose from 'mongoose';
const { Schema } = mongoose;
import { connectionsString } from '../lib/credentials.js'

mongoose.connect(connectionsString, {
    dbName: 'scc_projects',
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// .on is an event listener used for databases, 'open' is the event
mongoose.connection.on('open', () => {
    console.log('Mongoose connection');
    })
    .on('error', (error) => {
        console.log(`Your error is ${error}`);
    });

// define data model as JSON key/value pairs
// values indicate the data type of each key

const movieSchema = new Schema({
    title: {type: String, required: true },
    arabicTitle: String,
    director: String,
    country: String,
    year: Number
})

export const Movie = mongoose.model('Movie', movieSchema);