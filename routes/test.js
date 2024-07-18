const express = require("express");
const router = express.Router();
const cors = require('cors');

router.get('/',cors(), async(req,res,next) => {
    return res.status(200).json({
        "message": "Hello world"
    })
});

module.exports = router;