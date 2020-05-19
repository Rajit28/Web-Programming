let express = require('express');
let router = express.Router();


router.get('/', async (req, res) => {

    res.render('palindrome/static', {});

});

module.exports = router;