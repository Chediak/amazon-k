const router = require('express').Router()
const Owner = require('../models/owner');
const upload = require('../middlewares/upload-photo');

// Post Api
router.post('/owners', upload.single("photo"), async (req, res) => {
    try {
        let owner = new Owner();
        owner.name = req.body.name;
        owner.about = req.body.about;
        owner.photo = req.file.location;
        await owner.save();

        res.json({
            success: true,
            message: "successfully created!"
        });
    } catch (err) {
        console.log(err);
        res.json({
            success: false,
            message: err.message
        });
    }
});

// Get Api
router.get("/owners", async (req, res) => {
    try {
        let owners = await Owner.find();

        res.json({
            owners: owners
        })
    } catch (err) {
        res.json({
            success: false,
            message: err.message
        });
    }
})

module.exports = router;