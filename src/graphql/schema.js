import {  gql } from 'apollo-server';

export default  gql`

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
        egg_groups: JSON
        base_stats: JSON
    }

    type Query{
        allPokemon: [Pokemon]
    }
`;