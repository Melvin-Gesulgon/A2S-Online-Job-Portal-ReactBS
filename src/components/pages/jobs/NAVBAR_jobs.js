import '../css/navbar.css'
import {Link} from 'react-router-dom';
import Logo from '../images/logo.png'
import {GiHamburgerMenu} from 'react-icons/gi'
import { useState } from 'react';



const NavbarJobs = () => {
    const [toggle, setToggle] = useState('');

    const toggleClick = () => {
        toggle ? setToggle('') : setToggle('togglemenu open');
    };
    return ( 
        <div className="navbar">
            <div className="brand">
                <img src={Logo} alt="" />
                <h1>Access Success</h1>
            </div>
            <div className="pages">
                <ul>
                    <li>
                        <Link to='/search'>Search</Link>
                    </li>
                    <li>
                        <Link to='/messages'>Messages</Link>
                    </li>
                    <li id="signupbtn">
                        <Link to='/signup'>Applicant</Link>
                    </li>
                </ul>
            </div>
            <div className={toggle ||'togglemenu'}>
                <GiHamburgerMenu onClick={toggleClick}/>
                <ul className='mobile-view'>
                    <li>
                        <Link to='/search'>Search</Link>
                    </li>
                    <li>
                        <Link to='/messages'>Messages</Link>
                    </li>
                    <li id="signupbtn">
                        <Link to='/signup'>Applicant</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
 
export default NavbarJobs;