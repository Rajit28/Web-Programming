let express = require("express");
let router = express.Router();


router.get("/", async (req, res) => {
    try {

        res.json({
            "storyTitle": "Who am I ?",
            "story": "The story is about a confused cat who thinks she is a dog.\n She never considered herself a cat.\n All her friends were dogs."
        })
    } catch (e) {
        res.status(404).json({ message: "Post not found" });

    }
});

module.exports = router;