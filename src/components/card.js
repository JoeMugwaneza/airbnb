import React from 'react';

function Card(props){
    console.log(props);
    return(
        <div className='card'>
            <img src={require(`../images/${props.img}`)} className="card-image" alt='card'/>

            <div className='card-stats'>
                <img src={require("../images/star.png")} className="card-star" alt='card-stats'/>
                <span>{props.rating}</span>
                <span className='gray'>{props.reviewCount}.</span>
                <span className='gray'> {props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className='bold'>From ${props.price}</span> / person</p>
        </div>
    )
}

export default Card