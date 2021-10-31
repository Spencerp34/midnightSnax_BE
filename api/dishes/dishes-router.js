const router = require("express").Router();
const Dish = require('./dishes-model')

router.get('/', async (req, res) => {
    const result = await Dish.getAll()
    res.json(result)
}) 

router.get('/:dish_id', async (req, res) => {
    const {dish_id} = req.params
    const result = await Dish.getOne(dish_id)
    res.json(result)
}) 

router.get('/category/:category_id', async (req, res) => {
    const {category_id} = req.params
    const result = await Dish.getCategory(category_id)
    res.json(result)
}) 

module.exports = router;