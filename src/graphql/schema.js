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

    type Query{
        allPokemon: [Pokemon]
        pokemonByType(types: [String]): [Pokemon]
        pokemonByColor(color: String!): [Pokemon]
        pokemonByNo(no: Int!): Pokemon
        pokemonByName(name: String!): Pokemon
    }
`;
