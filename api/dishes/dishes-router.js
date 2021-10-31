const router = require("express").Router();

router.get('/', async (req, res) => {
    res.json({message:'Hello from inside the router'})
}) 

module.exports = router;