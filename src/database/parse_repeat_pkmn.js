const pokedex = require('./pokedex').Pokedex;
const fs = require('fs');

let newList = []; 

for(let key in pokedex){
    let result = newList.filter(pkmn =>
       pokedex[key].num === pkmn.num
    )

    if(result.length === 0){
        newList.push(pokedex[key])
    }
}

var util = require('util');


for(let i = 0; i < newList.length; i++){
    fs.appendFileSync('./pokedex_filtered.js', util.inspect(newList[i]) + ', \n', 'utf-8');
}