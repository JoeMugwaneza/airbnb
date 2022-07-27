import React from 'react';

function Card(props){
    let badgeText;

    if(props.card.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if (props.card.location === "Online"){
        badgeText = "ONLINE"
    }
    return(
        <div className='card'>
        {badgeText && <div className='card-openSpots'>{badgeText}</div>}
            <img src={require(`../images/${props.card.coverImg}`)} className="card-image" alt='card'/>

            <div className='card-stats'>
                <img src={require("../images/star.png")} className="card-star" alt='card-stats'/>
                <span >{props.card.stats.rating}</span>
                <span className='gray'>({props.card.stats.reviewCount}).</span>
                <span className='gray'> {props.card.location}</span>
            </div>
            <p className='card--title'>{props.card.title}</p>
            <p ><span className='bold'>From ${props.card.price}</span> / person</p>
        </div>
    )
}

export default Card