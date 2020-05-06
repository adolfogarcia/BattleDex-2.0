const { GraphQLJSON } = require('graphql-type-json');
const  psql  =  require('./pgConfig').psql;

exports.resolvers = {
    Query: {
        allPokemon: () => {
            const query = 'SELECT * from pokemon';
            return psql.manyOrNone(query);
        },
        pokemonByType: (_, args, ctx) => {
            /**args.types shall always be Title Case; guaranteed by react component sending the query */

            /***args.types is contained by types column */
            const query = 'SELECT * from pokemon where $1::varchar[] <@ types';
            const queryArgs=[args.types];
            return psql.manyOrNone(query, queryArgs)
        },
        pokemonByColor: (_, args, ctx) => {
            /**args.color shall always be Title Case; guaranteed by react component sending the query */

            const query = 'SELECT * from pokemon where color = $1';
            const queryArgs=[args.color];
            return psql.manyOrNone(query, queryArgs)
        },
    }
}
