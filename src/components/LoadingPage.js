import React from 'react';
import RingLoader from 'react-spinners/RingLoader';

export default function LoadingPage(){

    return(
        <div className="Loading-page">
            <RingLoader
            size='150'
            color='#FF0000'
            />
            <p>
            &nbsp;&nbsp; Loading BattleDex...
            </p>
      </div>
    )
}