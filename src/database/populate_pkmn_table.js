const pokedex = require('./pokedex_filtered').pokedex;
const client = require('./pgClient').client

//query string
const queryString = 'INSERT INTO pokemon(dex_no, name, types, gender_ratio, base_stats, abilities, weight, height, color, egg_groups) values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)';

client.connect(err => {
    if (err) {
      console.error('Connection error', err.stack)
    } else {
      console.log('Successfully connected to db.');

        pokedex.forEach(pkmn => {
          let values = Object.values(pkmn)
          client.query(queryString, values, (err,res) => {
          if (err) throw err
        })
     
    })}
  })




