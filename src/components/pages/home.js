import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from '../images/banner.svg';
import '../css/home.css';
import '../css/main.css';
import { Link } from 'react-router-dom';
import Categories from '../subcom/CATEGORY';

const Home = () => {
    return ( 
        <div>
            <div className='container' style={{marginTop: "100px"}} id='slogan'>
            <div className='row'>
                <div className="col-md-6">
                    <h5>Access</h5>
                    <h5>your <span>Success</span></h5>
                    <button className='greenbutton regular' id='homebtn'>
                        <Link to='/search'>Start Job Hunting</Link>
                    </button>
                </div>
                <div className="col-md-6">
                    <img src={Banner} alt="" />
                </div>
            </div>
        </div>
        <Categories></Categories>

        </div>
        
     );
}
 
export default Home;