import '../../css/navbar.css'
import {Link} from 'react-router-dom';
import Logo from '../../images/logo.png'
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
                        <div className='dropdown'>
                            <Link to='/signup' id="dropdownSearch1">Applicant</Link>
                            <div className='dropdown-content'>
                                <Link to ='/'>Profile</Link>
                                <Link to ='/'>Logout</Link>
                            </div>
                        </div>
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
                    <li>
                        <Link to='/'>Applicant Profile</Link>
                    </li>
                    <li>
                        <Link to='/'>Logout</Link>
                    </li>
                    
                </ul>
            </div>
        </div>
    );
}
 
export default NavbarJobs;