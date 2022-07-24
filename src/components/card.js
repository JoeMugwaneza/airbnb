import React from 'react';

function Card(props){
    console.log();
    return(
        <div className='card'>
            <img src={require("../images/katie-zaferes.png")} className="card-image" alt='card'/>

            <div className='card-stats'>
                <img src={require("../images/star.png")} className="card-star" alt='card-stats'/>
                <span className='gray'>5.0(6).</span>
                <span className='gray'>USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className='bold'>From $136</span> / person</p>
        </div>
    )
}

export default Card