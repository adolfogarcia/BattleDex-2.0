const  psql  =  require('./pgConfig').psql;

exports.resolvers = {
    Query: {
        allPokemon: () => {
            const query = 'SELECT * from pokemon ORDER BY name ASC';
            return psql.manyOrNone(query);
        },
        pokemonByType: (_, args) => {
            /**args.types shall always be Title Case; guaranteed by react component sending the query */

            /***args.types is contained by types column */
            const query = 'SELECT * from pokemon where $1::varchar[] <@ types  ORDER BY name ASC';
            const queryArgs=[args.types];
            return psql.manyOrNone(query, queryArgs);
        },
        pokemonByColor: (_, args) => {
            /**args.color shall always be Title Case; guaranteed by react component sending the query */

            const query = 'SELECT * from pokemon WHERE color = $1  ORDER BY name ASC';
            const queryArgs=[args.color];
            return psql.manyOrNone(query, queryArgs);
        },
        pokemonByNo: (_, args) => {
            const query = 'SELECT * from pokemon WHERE dex_no = $1 ORDER BY name ASC';
            const queryArgs=[args.no];
            return psql.oneOrNone(query, queryArgs); 
        },
        pokemonByName: (_, args) => {
            const query = 'SELECT * from pokemon WHERE name = $1 ORDER BY name ASC';
            const queryArgs=[args.name];
            return psql.oneOrNone(query, queryArgs); 
        },

        allMoves: () => {
            const query = 'SELECT * from moves ORDER BY move_name ASC';
            return psql.manyOrNone(query);
        },
        movesByType: (_, args) => {
            const query = 'SELECT * from moves WHERE type = $1 ORDER BY move_name ASC';
            const queryArgs=[args.type];
            return psql.manyOrNone(query, queryArgs); 
        },
    }
}
