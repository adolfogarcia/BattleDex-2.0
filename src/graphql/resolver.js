const { GraphQLJSON } = require('graphql-type-json');
const  psql  =  require('./pgConfig').psql;

exports.resolvers = {
    Query: {
        allPokemon: () => {
            const query = 'SELECT * from pokemon';
            return psql.manyOrNone(query);
        },
        pokemonByType: (_, args, ctx) => {
            const query = 'SELECT * from pokemon';
            return psql.manyOrNone(query).then(pkmns => pkmns.filter(pkmn => {
                if(args.types.length === 1){
                    return pkmn.types.includes(args.types[0]);
                }
                else{
                    return pkmn.types.includes(args.types[0]) || pkmn.types.includes(args.types[1]);
                }
            }));
        }
    }
}
