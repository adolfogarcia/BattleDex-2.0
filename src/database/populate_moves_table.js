const moves = require('./moves_filtered').moves;
const client = require('./pgClient').client

//query string
const queryString = 'INSERT INTO moves(move_no, accuracy, base_power, category, description, short_desc, move_id, move_name, pp, priority, crit_ratio, "isZ", secondary_effects, flags, type, contest_type, target, boosts, zmove_effect)'
+ ' values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19)';

client.connect(err => {
    if (err) {
      console.error('Connection error', err.stack)
    } else {
      console.log('Successfully connected to db.');

        moves.forEach(move => {
          let values = Object.values(move)
          client.query(queryString, values, (err,res) => {
          if (err){
                console.log(move)
               throw err
          }
        })
     
    })}
  })




