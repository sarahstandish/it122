import express from 'express';
import handlebars from 'express-handlebars';
const app = express();
import { getAll, getItem } from './data.js';

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
    console.log(req.query);
    if (getItem(req.query.id)) {
        res.render('detail', {film: getItem(req.query.id)})
    } else {
        //back to home page if passed an invalid id
        res.render('home', { films: getAll()});    
    }
})

app.get('/', (req, res) => {
    res.type('html')
    res.render('home', { films: getAll()}); //look for home.hbs in the views directory; { films: getAll()} is a context variable used to render when the request comes in. Be sure to keep track of what each name refers to.
});

//404 response default
app.use((req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send("404: Page not found");
})
