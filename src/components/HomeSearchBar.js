import React from 'react';
import Select from 'react-select';

export default class HomeSearchBar extends React.Component {
    constructor(){
        super();
    }
      
    render(){
        return(
            <div style={{ bottom: "0px", right:"25vw", padding:"10px", width:"50vw", position: "absolute"}}>
              <Select 
                placeholder="Search for Pokemon, moves, abilities, etc..."
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
}