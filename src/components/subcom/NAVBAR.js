import '../css/navbar.css'
import {Link} from 'react-router-dom';
import Logo from '../images/logo.png'
import {GiHamburgerMenu} from 'react-icons/gi'

const NavbarMain = () => {
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
                        <Link to='/login'>Login</Link>
                    </li>
                    <li id="signupbtn">
                        <Link to='/signup'>Signup</Link>
                    </li>
                </ul>
            </div>
            <div className='togglemenu'>
                <GiHamburgerMenu />
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
                        <Link to='/login'>Login</Link>
                    </li>
                    <li id="signupbtn">
                        <Link to='/signup'>Signup</Link>
                    </li>
                </ul>
            </div>
        </div>
     );
}
 
export default NavbarMain;