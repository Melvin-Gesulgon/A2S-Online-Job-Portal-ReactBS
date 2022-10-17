import '../css/navbar.css'
import {Link} from 'react-router-dom';
import Logo from '../images/logo.png'
import {GiHamburgerMenu} from 'react-icons/gi'
import { useState } from 'react';



const NavbarMain = () => {
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
                        <Link to= '/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/search'>Search</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <div className='dropdown'>
                            <Link to='/login'  id="dropdownSearch">Login</Link>
                            <div className='dropdown-content'>
                                <Link to ='/'>Job Seekers</Link>
                                <Link to ='/'>Employer</Link>
                            </div>
                        </div>
                        
                    </li>
                    <li id="signupbtn">
                        <Link to='/signup'>Signup</Link>
                    </li>
                </ul>
            </div>
            <div className={toggle ||'togglemenu'}>
                <GiHamburgerMenu onClick={toggleClick}/>
                <ul className='mobile-view'>
                    <li>
                        <Link to= '/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/search'>Search</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/login'>Login as Job Seekers</Link>
                    </li>
                    <li>
                        <Link to='/login'>Login as Employer</Link>
                    </li>
                    <li>
                        <Link to='/signup'>Signup</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
 
export default NavbarMain;