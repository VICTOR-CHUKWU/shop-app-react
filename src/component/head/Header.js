import Nav from './Nav';
// import NavBar from './NavBar';
import SideBar from './SideBar';
import NavMain from './NavMain';
import {useLocation} from 'react-router-dom';

const Header = () => {
    const Location = useLocation()
    const isCurrentLocation =(url) =>{
        return Location.pathname.toLowerCase() === url.toLowerCase()
    }
    if(isCurrentLocation("/user/dashboard")){
        return null;
    }
    return (
        <section>
            <Nav/>
            <NavMain/>
            <SideBar/>
        </section>
    )
}

export default Header
