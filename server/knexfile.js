// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      port: 1000,
      user: 'postgres',
      password: 'password',
      database: 'movies'
    },
    migrations:{
      directory: './migrations',
    },
    seeds:{
      directory: './seeds'
    },
  }

};
