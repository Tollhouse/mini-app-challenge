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
    const movie_to_add = req.body
    knex('movies')
    .insert(movie_to_add)
    .then(res.status(200).send("Movie added"))
});
server.patch('/', async (req, res) => {
    const movie_to_change = req.body
    knex('movies')
    .where(movie_to_change.id)
    .update(movie_to_change.title)
    .then(res.status(200).send("Movie changed"))
});
server.delete('/', async (req, res) => {
    const movie_to_delete = req.body
    knex('movies')
    .where(movie_to_delete)
    .delete()
    .then(res.status(200).send("Movie deleted"))
})

module.exports = server