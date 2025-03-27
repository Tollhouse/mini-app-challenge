# Mini-App-Challenge-1

## How to setup/run locally

Make sure docker and npm is installed for the components to properly talk to eachother

in a terminal clone down the repo with:
```
git clone git@github.com:Tollhouse/mini-app-challenge.git
```

Navigate to the repo:
```
cd mini-app-challenge
```

Start up the POSTGRES database wtih:
```
docker run --rm --name db -e POSTGRES_PASSWORD=password -d -p 1000:5432 -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres
```

Log into the docker container with:
```
docker exec -it db psql -U postgres
```

Once inside run:
```
\c movies
```
then
```
CREATE DATABASE movies;
```

Get out of the docker container by:
```
\q
```

The database is now running with the correct parameters and an empty database called movies

Start up the Express server by navigating to the server with the knex seed and migration with:

```
cd server
```

Run sequencially
```
npx knex migrate:latest
npx knex seed:run
```

Finally:
```
node index.js
```

The express server should now display:
```
Express server listening on 3000
```

Navigate to the frontend directory with:
```
cd ..
cd client
```

Start up the frontend with:
```
npm start
```