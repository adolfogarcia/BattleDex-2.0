import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";
import pic from '../sprites/rayquaza.png'

export default function PokemonPage () {

    return(
        <div  style={{top:"5vh", left:"5vh", position: "absolute"}}>
            <h1  style={{textAlign:"left"}}>Rayquaza</h1>

             {/* Sprite, types, weaknesses, resistances */}
            <section style={{display: "flex", paddingTop:"20px"}}>
                <img src={pic} style={{width: "15vw", height: "15vw"}} alt="Rayquaza"></img>
                
            </section>
        </div>
    )
}