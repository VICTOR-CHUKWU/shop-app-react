import React from 'react';
import {useLocation} from 'react-router-dom';
import NavBar from './NavBar';
import NavBarRegular from './NavBarRegular';

const NavMain = () => {

    const Location = useLocation()
    const isCurrentLocation =(url) =>{
        return Location.pathname.toLowerCase() === url.toLowerCase()
    }
    
    return (
        <div>
           {
        isCurrentLocation('/')? <NavBar/>: isCurrentLocation('/cart')? <NavBar/>: <NavBarRegular/>
    } 
        </div>
    )
}

export default NavMain
