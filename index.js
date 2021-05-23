import express from 'express';
import handlebars from 'express-handlebars';
const app = express();
import { Movie } from './models/movie.js';
import { movieApiRoute } from './routes/movieAPI.js';
import cors from 'cors';

// eslint-disable-next-line no-undef
app.set('port', process.env.PORT || 3000);
app.use(express.urlencoded({extended:false})); // parse url-encoded strings
app.use(express.json()); // parse json
app.use(express.static('./public')); // allow access to static files in the public folder
app.engine('hbs', handlebars({defaultLayout:false})); // all templates will have a .hbs extension
app.set("view engine", "hbs");

app.use('/api', cors()); // set Access-Control-Allow-Origin header for api route; could in theory be used to set a domain white-list

app.listen(app.get('port'), () => {
    console.log(`Listening on port ${app.get('port')}`);
})

app.use(movieApiRoute);

app.get('/about', (req, res) => {
    res.send("Sarah Standish is the Deputy Director of OneWorld Now!, a nonprofit after-school world language program for high school students. In her free time, she enjoys reading, cooking, biking, learning web development, and coding.");
});

app.get('/detail', (req, res, next) => {

    // return one film
    Movie.findOne({_id: req.query.id})
        .lean()
        .exec()
        .then(film => {
            if (film) {
                res.render('detail', { film });
            } else {
                res.redirect('/');
            }
        })
        .catch(err => next(err));
})

app.get('/', (req, res, next) => {

    Movie.find({})
        .lean()
        .then(movies => {
            res.type('html');
            res.render('home', {movies: JSON.stringify(movies)}); //look for home.hbs in the views directory; { movies } is a context variable used to render when the request comes in. Be sure to keep track of what each name refers to.
        }).catch(err => next(err));  
});

app.get('/delete', (req, res, next) => {
   
    Movie.findByIdAndDelete(req.query.id)
        .exec()
        .then(deletedMovie => {
            if (deletedMovie) {
                let title = deletedMovie.title;
                res.render('deletion', { title });
            } else {
                res.redirect('/');
            }
        })
        .catch(err => next(err));
});

//404 response default
app.use((req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send("404: Page not found");
})