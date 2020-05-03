////   DO NOT COMMIT, CONTAINS SENSITIVE INFO (OR COMMIT WITHOUT PASSWORD)
const {Client} = require('pg');

exports.client = new Client({
    user: '',
    host: 'localhost',
    port: 5432,
    database: '',
    password: ''
})
