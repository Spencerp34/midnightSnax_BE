const db = require('../data/db-config')

async function getAll(){
    const allResults = await db('dishes').select('*')
    return allResults
}

async function getOne(dish_id){
    const result = await db('dishes').where('dish_id', dish_id).select('*').first()
    return result
}

async function getCategory(category_id){
    const allResults = await db('dishes').select('*').where('category', category_id)
    return allResults
}


module.exports={
    getAll,
    getOne,
    getCategory,
}