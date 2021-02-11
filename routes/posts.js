const express = require('express');
const router = express.Router();

const { Client } = require('pg');
const configs = {
  connectionString: process.env.DATABASE_URL,
  ssl: false,
}

router.get('/', async (req,res,next)=>{
  try{
    const client = new Client(configs);
    client.connect();
  
    const query = await client.query('SELECT * FROM posts')
    client.end();
    res.json(query)
  } catch(err){
    client && client.end()
    next(err)
  }
})

module.exports = router;