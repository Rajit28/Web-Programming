let express = require("express");
let router = express.Router();


router.get("/", async (req, res) => {
    try {
        // Array of objects
        res.json([{
            "schoolName": "Dav Public school",
            "degree": "CBSE 12th",
            "favoriteClass": "Physics",
            "favoriteMemory": "time spent with friends"
        },
        {
            "schoolName": "Mumbai University",
            "degree": "B.E",
            "favoriteClass": "Cyber Security",
            "favoriteMemory": "After Party at Udit's place"
        }, {
            "schoolName": "Stevens",
            "degree": "Master of Science",
            "favoriteClass": "Web Programming",
            "favoriteMemory": "Diwali Celebration"
        }])
    } catch (e) {
        res.status(404).json({ message: "Post not found" });

    }
});

module.exports = router;