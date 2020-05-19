let express = require('express');
let router = express.Router();
let data = require('../data');
let resultData = data.result;

router.get('/', async (req, res) => {

    res.render('palindrome/palindromecheck', { title: "The Best Palindrome Checker in the World!" });

});

router.post('/result', async (req, res) => {

    try {
        let textInput = req.body;
        if (textInput.forminput == null || textInput.forminput.trim().length == 0) {
            res.status(400).render('palindrome/error', { error: "No text to check" });
            return;
        }

        const check = await resultData.palindromechecker(textInput.forminput);

        res.render('palindrome/palindromeresult', { title: "The Palindrome Results!", answer: check });
    } catch (e) {
        res.status(400);
    }
});

module.exports = router;



