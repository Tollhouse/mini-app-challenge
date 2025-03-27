const cors = require('cors');
const express = require('express');
const server = express();
const PORT = 1000;
const knex = require('knex')(require('../knexfile.js')['development']);

server.use(express.json());
server.use(cors());
server.get('/', async (req, res) =>  {
    knex('movies')
    .select('*')
    .then(data => {
        res.status(200).json(data)
    });
});
server.post('/', async (req, res) => {
    const { title } = req.body;
    knex('movies')
    .insert({title})
    .then(res.status(200).send("Movie added"))
});
server.patch('/', async (req, res) => {
    const { id, title } = req.body;
    knex('movies')
    .where(id)
    .update(title)
    .then(res.status(200).send("Movie changed"))
});
server.delete('/', async (req, res) => {
    const { title } = req.body;
    knex('movies')
    .where({title : title})
    .delete()
    .then(res.status(200).send("Movie deleted"))
})

module.exports = server