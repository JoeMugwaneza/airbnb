import React from 'react';

export default function NavBar(){
    return(
        <nav>
          <img src={require("../images/airbnb-logo.png")} alt='Nav Logo' className='nav--logo'/>
        </nav>
    )
}
