import express from 'express';
import handlebars from 'express-handlebars';
const app = express();
import { getAll, getItem } from './data.js';
import { Movie } from './models/movie.js';

// eslint-disable-next-line no-undef
app.set('port', process.env.PORT || 3000);
app.use(express.urlencoded({extended:false})); // parse url-encoded strings
app.use(express.json()); // parse json
app.use(express.static('./public')); // allow access to static files in the public folder
app.engine('hbs', handlebars({defaultLayout:false})); // all templates will have a .hbs extension
app.set("view engine", "hbs");

app.listen(app.get('port'), () => {
    console.log(`Listening on port ${app.get('port')}`);
})

app.get('/about', (req, res) => {
    res.send("Sarah Standish is the Deputy Director of OneWorld Now!, a nonprofit after-school world language program for high school students. In her free time, she enjoys reading, cooking, biking, learning web development, and coding.");
});

app.get('/detail', (req, res) => {
    // return one film

    Movie.findOne({title: req.query.title})
        .lean()
        .exec()
        .then(film => {
            if (film) {
                res.render('detail', { film });
            } else {
                res.redirect('/');
            }
        });
})

app.get('/', (req, res) => {

    Movie.find({})
        .lean()
        .exec()
        .then(movies => {
            res.type('html');
            res.render('home', { movies }); //look for home.hbs in the views directory; { movies } is a context variable used to render when the request comes in. Be sure to keep track of what each name refers to.
        }).catch(err => console.log(err));  
});

app.get('/delete', (req, res) => {
    let title = req.query.title;
    Movie.deleteOne({title: req.query.title})
        .exec()
        .then(deletedMovie => {
            if (deletedMovie) {
                res.render('deletion', { title });
            } else {
                res.redirect('/');
            }
        })
        .catch(err => console.log(err));
});

//404 response default
app.use((req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send("404: Page not found");
})