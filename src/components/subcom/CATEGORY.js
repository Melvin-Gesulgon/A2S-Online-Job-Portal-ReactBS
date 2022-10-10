import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/home.css'
import '../css/main.css'

const Categories = () => {
    return ( 
        <div class="container" id="categories">
        <h2>Search by Category</h2>
        <div id="categoryCards">
            <Link to = '/search'>
                <div class="card">
                <h4>IT & Development</h4>
                </div>
            </Link>  
            <Link to = '/search'>
                <div class="card">
               <h4>Design & Creative</h4>
                </div>
            </Link>
            <Link to = '/search'>
                <div class="card">
                <h4>Sales and Marketing</h4>
                </div>
            </Link>
            <Link to = '/search'>
                <div class="card">
                <h4>Writing & Translation</h4>
                </div>
            </Link>
            <Link to = '/search'>
                <div class="card">
                <h4>Admin & Support</h4>
                </div>
            </Link>
            <Link to = '/search'>
                <div class="card">
                <h4>Finance & Accounting</h4>
                </div>
            </Link>
            <Link to = '/search'>
                <div class="card">
                <h4>Engineering & Architecture</h4>
                </div>
            </Link>
            <Link to = '/search'>
                <div class="card">
                <h4>Legal</h4>
                </div>
            </Link>
        </div>
    </div>
     );
}
 
export default Categories;