import React from 'react';
import AsyncSelect from 'react-select/async';
import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";

const GET_ALL_POKEMON = gql`
    {
        allPokemon{
        name
        }
    }
`;

export default function HomeSearchBar () {
    const { loading, error, data } = useQuery(GET_ALL_POKEMON);

    if (loading) return <p style={{ bottom: "0px", right:"25vw", padding:"10px", width:"50vw", position: "absolute"}}>Loading Pokemon info...</p>;
    if (error) return <p style={{ bottom: "0px", right:"25vw", padding:"10px", width:"50vw", position: "absolute"}}>Error loading Pokemon</p>;

    const filterOptions = (input) => {
        return data.allPokemon.filter(pkmn =>
            pkmn.name.toLowerCase().includes(input.toLowerCase())
        ).map(pkmn => ({label: pkmn.name, value: pkmn.name}));
    }
    
    const loadOptions = (input, callback) => {
        setTimeout(() => {
            callback(filterOptions(input));
        }, 1000);
    }    

    return(
        <div style={{ bottom: "0px", right:"25vw", padding:"10px", width:"50vw", position: "absolute"}}>
            <AsyncSelect
                cacheOptions
                placeholder="Search for Pokemon, moves, abilities, etc..."
                loadOptions={loadOptions}
                components={
                    {
                    DropdownIndicator: () => null,
                    IndicatorSeparator: () => null
                    }
                }
            />
        </div>
    )
}