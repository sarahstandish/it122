import { Movie } from '../models/movie.js';
import express from 'express';
let router = express.Router();

router.get('/api/movies', (req, res) => {
    Movie.find({})
        .then(movies => {
            res.json(movies)
        })
        .catch(err => {
            res.status(500).json(err);
        })
})

router.get('/api/movie', (req, res) => {
    if (!req.query.id && !req.query.title) {
        res.status(400).send("Missing parameters: need either id or title");
    } else if (req.query.id) {
        Movie.findById(req.query.id).lean()
        .then(foundMovie => {
            if (!foundMovie) {
                res.status(404).send("Id not found")
            }
            res.json(foundMovie);
        })
        .catch(err => {
            res.status(500).json(err);
        })
    } else if (req.query.title) {
        Movie.findOne({title: req.query.title})
        .then(foundMovie => {
            if (!foundMovie) {
                res.status(404).send("Title not found")
            }
            res.json(foundMovie);
        })
        .catch(err => {
            res.status(500).json(err);
        })
    }

})

router.put('/api/movie', (req, res) => {
    if (!req.body.title && !req.body.id) {
        res.status(500).send("Missing body paramaters: must send either title or id");
    } else if (req.query.id) {
        Movie.findByIdAndUpdate(req.query.id, req.body, {new: true})
        .then(doc => {
            if (!doc) {
                res.status(404).send("ID not found")
            }
            res.json(doc);
        })
        .catch(err => {
            res.json(err);
        })
    } else if (req.query.title) {
        Movie.findOneAndUpdate({ title: req.query.title}, req.body, { new: true})
        .then(doc => {
            if (!doc) {
                res.status(404).send("Title not found")
            }
            res.json(doc);
        })
        .catch(err => {
            res.json(err);
        })
    }
})

router.post('/api/movie', (req, res) => {
    if (!req.body) {
        res.status(500).send("Must include a body");
    } else if (!req.body.title) {
        res.status(500).send("Title is required")
    } else {
        let newMovie = new Movie(req.body);
        newMovie.save()
            .then(savedMovie => {
                if (!savedMovie || savedMovie.length < 1) {
                    res.status(500).send(savedMovie);
                } else {
                    res.status(201).send(savedMovie);
                }
            })
            .catch(err => {
                res.status(500).json(err);
            })
    }

})

router.delete('/api/movie', (req, res) => {
    if (!req.query.id && !req.query.title) {
        res.status(400).send("Missing parameter: need either id or title.")
    } else if (req.query.id) {
        Movie.findByIdAndDelete(req.query.id)
        .then(deletedMovie => {
            if (!deletedMovie) {
                res.status(404).send("ID not found")
            }
            res.json(deletedMovie);
        })
        .catch(err => {
            res.status(500).json(err);
        })
    } else if (req.query.title) {
        console.log(req.query.title)
        Movie.findOneAndDelete({title: req.query.title })
        .then(deletedMovie => {
            if (!deletedMovie) {
                res.status(404).send("Title not found")
            }
            res.json(deletedMovie);
        })
        .catch(err => {
            res.status(500).json(err);
        })
    }
})

export { router as movieApiRoute };