import React from 'react';
import '../css/main.css';
import '../css/melvin.css';
import Apply from '../img/apply.svg';

const JobApply
 = () => {
  return (
    
        <div className="container" id="apply">
        <div className="row">
            <div className="col-md-6">
                <div id="apply-job">
                    <h2>Position</h2>
                    <h3>Company XYZ</h3>
                    <br />
                    <p>National Capital Region</p>
                    <p>PHP 25, 000 - PHP 30, 000</p>
                    <div id="line-break"></div>
                    <h4><i className="fa-solid fa-briefcase"></i> Min. 1 year exp</h4>
                    <h4><i className="fa-solid fa-book-open"></i> Bachelor/College Degree in Engineering</h4>
                </div>
                <div>
                    <img src={Apply} alt="" width="90%"/>
                </div>
                
            </div>
            <div className="col-md-6">
                <div id="apply-profile">
                    <h2>Juan Dela Cruz</h2>
                    <h3>Engineer</h3>
                    <br />
                    <p>juandelacruz@gmail.com</p>
                    <p>0919-876-54321</p>
                    <div id="line-break"></div>
                    <h4>Resume/Curriculum Vitae</h4>
                    <a href="#" class="jobs-link">juandelacruz.pdf</a><br />
                </div>
                <div id="apply-write">
                    <h4>Write additional information for the employer.</h4>
                    <textarea name="write" id="" cols="30" rows="10"></textarea>
                </div>
                <div id="apply-button">
                    <button className="graybutton regular" onclick="window.history.go(-1); return false;">back</button>
                    <button className="graybutton regular"><a class="nl"href="talent-account-page.html">review profile</a></button>
                    <button className="orangebutton regular" onclick="submit()">Submit Application</button>
                </div> 
            </div>
        </div>
     </div>
    
  )
}


export default JobApply