import {MdSearch} from 'react-icons/md';
import '/node_modules/bootstrap/dist/css/bootstrap.css';
import '../css/main.css';
import '../css/melvin.css';


const JobSearchBar = () => {
    return ( 
       <div className="container-fluid" id="searchbar">
            <div className="container" 
               id="search">
               <input id="search1" 
                      type="text" 
                      placeholder="search jobs, keyword, company, etc">                    
               </input>
               <input id="search2" 
                      type="text" 
                      placeholder="location, area, city">
               </input>
               <input id="search3" 
                      type="text" 
                      placeholder="specialization">                    
               </input>
               <button class="orangebutton regular" 
                       onClick="searchbar.search();">
                       Search <MdSearch />
               </button>
           </div>
       </div>
     );
}
 
export default JobSearchBar;