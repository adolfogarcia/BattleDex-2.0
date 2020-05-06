const {  gql } =  require('apollo-server');

exports.schema = gql`

    scalar JSON

    type Pokemon{
        name: String
        dex_no: Int
        height: Float
        weight: Float
        color: String
        types: [String]
        egg_groups: [String]
        gender_ratio: JSON
        abilities: JSON
        base_stats: JSON
    }

    type Move{
        move_id: String
        move_name: String
        move_no: Int
        base_power: String
        accuracy: String
        pp: Int
        category: String
        description: String
        short_desc: String
        priority: Int
        crit_ratio: Int
        isZ: Boolean
        secondary_effects: JSON
        flags: JSON
        type: String
        contest_type: String
        target: String
        boosts: JSON
        zmove_effects: String
    }

    type Query{
        allPokemon: [Pokemon]
        pokemonByType(types: [String]): [Pokemon]
        pokemonByColor(color: String!): [Pokemon]
        pokemonByNo(no: Int!): Pokemon
        pokemonByName(name: String!): Pokemon

        allMoves: [Move]
        movesByType(type: String!): [Move]
    }
`;
