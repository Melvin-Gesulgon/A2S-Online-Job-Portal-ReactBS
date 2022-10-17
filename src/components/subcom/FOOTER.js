import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='background'>
        <div className="footer container">
            <div className="footer-row">
                <div className="footer-items">
                    <ul>
                        <h4>Find Talent</h4>
                        <li><Link to = '/search'>How to Hire</Link></li>
                        <li><Link to = '/search'>Limitation</Link></li>
                        <li><Link to = '/'>Report Talent</Link></li>
                    </ul>
                </div>
                <div className="footer-items"> 
                    <ul>
                        <h4>Find Work</h4>
                        <li><Link to = '/'>How to find work</Link></li>
                        <li><Link to = '/'>Tips</Link></li>
                        <li><Link to = '/'>Report Client</Link></li>
                    </ul>
                </div>
                <div className="footer-items">
                    <ul>
                        <h4>Resources</h4>
                        <li><Link to = '/'>Help and Support</Link></li>
                        <li><Link to = '/'>News</Link></li>
                        <li><Link to = '/'>FAQs</Link></li>
                        <li><Link to = '/'>Community</Link></li>
                    </ul>
                </div>
                <div className="footer-items">
                    <ul>
                        <li><h4>Company</h4></li>
                        <li><Link to = '/'>About Us</Link></li>
                        <li><Link to = '/'>Mission</Link></li>
                        <li><Link to = '/'>Careers</Link></li>
                        <li><Link to = '/'>Contact Us</Link></li>
                    </ul> 
                </div>
            </div>
            <div className="social-links">
                <h4>&nbsp;&nbsp;Social Handles: </h4>
            </div>
        </div>
        </div> 
     );
}
 
export default Footer;