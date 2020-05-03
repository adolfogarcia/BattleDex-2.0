const pokedex = require('./pokedex').Pokedex;
const fs = require('fs');

let newList = []; 

for(let key in pokedex){
    let result = newList.filter(pkmn =>
       pokedex[key].num === pkmn.number
    )

    if(result.length === 0){
        let oldPkmn = pokedex[key];
        let newPkmn = {
            number: oldPkmn.num,
            name: oldPkmn.species,
            types: oldPkmn.types,
            genderRatio: oldPkmn.genderRatio,
            baseStats: oldPkmn.baseStats,
            abilities: oldPkmn.abilities,
            height: oldPkmn.heightm,
            weight: oldPkmn.weightkg,
            color: oldPkmn.color,
            eggGroups: oldPkmn.eggGroups
        };

        newList.push(newPkmn)
    }
}

console.log(newList.length)

var util = require('util');

fs.writeFileSync('./pokedex_filtered.js', 'exports.pokedex = [ \n');
for(let i = 0; i < newList.length; i++){
    fs.appendFileSync('./pokedex_filtered.js', util.inspect(newList[i]) + ', \n', 'utf-8');
}
fs.appendFileSync('./pokedex_filtered.js', ']');