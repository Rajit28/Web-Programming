let express = require("express");
let router = express.Router();


router.get("/", async (req, res) => {
    try {

        res.json({
            "name": "Rajit Gohel",
            "cwid": "10455405",
            "biography": "Hi, my name is Rajit. I am currently pursuing Ms in Computer SCience at Stevens Inst of Tech \n Sometimes, I miss my family and friends back in my country",
            "favoriteShows": ["Office", "GOT", "friends", "Peaky Blinders"],
            "hobbies": ["reading", "jogging", "cycling"]
        })
    } catch (e) {
        res.status(404).json({ message: "Post not found" });

    }
});

module.exports = router;