import React from 'react';

function Jokes({Setup, Punchline}){
    return(
        <div className='jokes'>
            <h4>Setup: {Setup}</h4>
            <p><span className='joke--punch'>Punchline:</span> {Punchline}</p>
        </div>
    )
}

export default Jokes