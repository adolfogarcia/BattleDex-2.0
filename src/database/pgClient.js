////   DO NOT COMMIT, CONTAINS SENSITIVE INFO (OR COMMIT WITHOUT PASSWORD)
const {Client} = require('pg');

exports.client = new Client({
    user: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'pokedex',
    password: 'cocopansa'
})