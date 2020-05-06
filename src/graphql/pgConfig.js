////   DO NOT COMMIT, CONTAINS SENSITIVE INFO (OR COMMIT WITHOUT PASSWORD)
const pgPromise =  require('pg-promise');

const config = {
    host: "localhost",
    port: 5432,
    database: "pokedex",
    user: "",
    password: ""
}

const pgp = pgPromise({}); // empty pgPromise instance
const psql = pgp(config); // get connection to your db instance

exports.psql = psql;
