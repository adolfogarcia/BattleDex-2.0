/***
 * takes the old moves file and converts it into list of moves
 * w/o unnecessary data and better formatted for database
 */

 const moves = require('./moves').moves;
const fs = require('fs');

let newList = [];

for(let key in moves){

    let oldMove = moves[key];

    let newMove = {
        move_no: oldMove.hasOwnProperty('num')? oldMove.num : null,
        accuracy: oldMove.hasOwnProperty('accuracy')? oldMove.accuracy : null,
        base_power: oldMove.hasOwnProperty('basePower')? oldMove.basePower: null,
        category: oldMove.hasOwnProperty('category')? oldMove.category: null,
        description: oldMove.hasOwnProperty('desc')? oldMove.desc: null,
        short_desc: oldMove.hasOwnProperty('shortDesc')? oldMove.shortDesc: null,
        move_id: oldMove.hasOwnProperty('id')? oldMove.id: null,
        move_name: oldMove.hasOwnProperty('name')? oldMove.name: null,
        pp: oldMove.hasOwnProperty('pp')? oldMove.pp: null,
        priority: oldMove.hasOwnProperty('priority')? oldMove.priority: null,
        crit_ratio: oldMove.hasOwnProperty('critRatio')? oldMove.critRatio: null,
        isZ: oldMove.hasOwnProperty('isZ')? true: false,
        secondary : oldMove.hasOwnProperty('secondary')? oldMove.secondary: null,
        flags: oldMove.hasOwnProperty('flags')? oldMove.flags: null,
        type: oldMove.hasOwnProperty('type')? oldMove.type: null,
        contest_type: oldMove.hasOwnProperty('contestType')? oldMove.contestType: null,
        target: oldMove.hasOwnProperty('target')? oldMove.target: null,
        boosts: oldMove.hasOwnProperty('boosts')? oldMove.boosts: null,
        zMoveEffect: oldMove.hasOwnProperty('zMoveEffect')? oldMove.zMoveEffect: null 
    }
    newList.push(newMove);
}

console.log(newList.length)

var util = require('util');

fs.writeFileSync('./moves_filtered.js', 'exports.moves = [ \n');
for(let i = 0; i < newList.length; i++){
    fs.appendFileSync('./moves_filtered.js', util.inspect(newList[i]) + ', \n', 'utf-8');
}
fs.appendFileSync('./moves_filtered.js', ']');