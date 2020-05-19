const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const user_Data = require('./users');
const static = express.static(__dirname + '/public');

const app = express();
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use('/public', static);

app.use(bodyParser.json()); // //https://stackoverflow.com/questions/38306569/what-does-body-parser-do-with-express
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    name: 'AuthCookie',
    secret: 'This is a secret string!',
    resave: false,
    saveUninitialized: true
}));

app.use('/', async (req, res, next) => {
    let current_ts = new Date().toUTCString();
    let method = req.method;
    let req_route = req.originalUrl;

    let sess = req.session;
    let user_aut;
    if (sess.user_Name) {
        user_aut = "Authenticated user";
    }
    else {
        user_aut = "Unauthenticated user";
    }
    let output_str = "[" + current_ts + "]" + method + "  " + req_route + " " + user_aut;;
    console.log(output_str);
    next();
});

app.get('/private', async (req, res, next) => {
    let sess = req.session;

    if (!sess.user_Name) {
        res.status(403).render('error', { title: "Error", message: "You are not logged In" });
    }
    next();
});

app.get('/', async (req, res) => {
    let sess = req.session;

    if (sess.user_Name) {
        res.redirect('/private');
    } else {
        res.render('login', { title: "Login Page", message: "This is the Login Page!" });
    }
});

app.post('/login', (req, res) => {
    let sess_login = req.session;
    let user_Name = req.body.username;
    let user_Password = req.body.password;
    let all_Users = user_Data;

    if (sess_login.user_Name) {
        res.redirect('/private');
    } else {
        for (let i = 0; i < all_Users.length; i++) {
            let user_i = all_Users[i];
            if (user_i.username == user_Name && bcrypt.compareSync(user_Password, user_i.hashedPassword)) {
                sess_login.user_Name = user_i.username;
                break;
            }
        }
        if (sess_login.user_Name) {
            res.redirect('/private');
        } else {
            res.render('login', { title: "login", error: "You have entered wrong Username/Passwarod or both!!" });
        }
    }

});

app.get('/private', (req, res) => {
    let all_Users = user_Data;

    for (let i = 0; i < all_Users.length; i++) {
        let user_i = all_Users[i];
        if (user_i.username == req.session.user_Name) {
            res.render('private', { title: "private", user_i: user_i, message: "Here are your Details!!" });
        }
    }

});

app.get('/logout', (req, res) => {
    let sess = req.session;
    if (sess.user_Name) {
        req.session.destroy();
        res.render('logout', { title: "logged out", message: "you just logged out. Sign in again! " });
    } else {
        res.status(403).render('error', { title: "Error", message: "You are not logged In" });
    }


});

app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log('Your routes will be running on http://localhost:3000');
});