import React from 'react';

function Card(props){
    let badgeStatus;

    if(props.card.openSpots === 0){
        badgeStatus = "SOLD OUT"
    } else if (props.card.location === "ONLINE"){
        badgeStatus = "ONLINE"
    }
    return(
        <div className='card'>
        {badgeStatus && <div className='card-openSpots'>{badgeStatus}</div>}
            <img src={require(`../images/${props.card.coverImg}`)} className="card-image" alt='card'/>

            <div className='card-stats'>
                <img src={require("../images/star.png")} className="card-star" alt='card-stats'/>
                <span >{props.card.rating}</span>
                <span className='gray'>({props.card.reviewCount}).</span>
                <span className='gray'> {props.card.country}</span>
            </div>
            <p className='card--title'>{props.card.title}</p>
            <p ><span className='bold'>From ${props.card.price}</span> / person</p>
        </div>
    )
}

export default Card