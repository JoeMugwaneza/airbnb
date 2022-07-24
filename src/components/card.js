import React from 'react';

function Card(){
    return(
        <div className='card'>
            <img src={require("../images/katie-zaferes.png")} alt="althete" className='card--image'/><br/>
            <div className='card--stats'>
                <img src={require("../images/star.png")} alt="star" className='card-star'/>
                <span className='gray'>(6)</span>
                <span className='gray'>USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><span className='bold'> From $136 </span>/ person</p>
        </div>
    )
}

export default Card