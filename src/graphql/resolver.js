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
            return psql.manyOrNone(query, queryArgs);
        },
        pokemonByColor: (_, args, ctx) => {
            /**args.color shall always be Title Case; guaranteed by react component sending the query */

            const query = 'SELECT * from pokemon WHERE color = $1';
            const queryArgs=[args.color];
            return psql.manyOrNone(query, queryArgs);
        },
        pokemonByNo: (_, args, ctx) => {
            const query = 'SELECT * from pokemon WHERE dex_no = $1';
            const queryArgs=[args.no];
            return psql.oneOrNone(query, queryArgs); 
        },
        pokemonByName: (_, args, ctx) => {
            const query = 'SELECT * from pokemon WHERE name = $1';
            const queryArgs=[args.name];
            return psql.oneOrNone(query, queryArgs); 
        }
    }
}
