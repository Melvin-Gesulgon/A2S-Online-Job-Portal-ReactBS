import React from 'react';
import '/node_modules/bootstrap/dist/css/bootstrap.css';
import '../css/main.css';
import '../css/melvin.css';
import Logo from '../img/logo.png';
import { FaStar } from 'react-icons/fa';
import { FaStarHalfAlt } from 'react-icons/fa';
import { FaFlag } from 'react-icons/fa';
import { FaRegThumbsUp } from 'react-icons/fa';
const CompanyOverview = () => {
  return (
    
<div>

<div className="container" id="companyOverview">
        <div className="row">
            <div className="col-md-4">
                <img src={Logo} alt="" width="100%" />
            </div>
            <div className="col-md-8" id="companyName">
                <h2>Company XYZ</h2>
                <h3>BPO & Tech Industry</h3>
                <div id="overviewbtn">
                    <div>
                        <a href="#" className="graybutton regular">Overview</a>
                        <a href="#reviews" className="graybutton regular">Reviews</a>
                        <a href="#jobPosts" className="graybutton regular">Jobs</a>
                        <a href="companyprofile.html" className="graybutton regular">Visit Profile</a>
                    </div>
                    <button class="orangebutton regular">Write Review</button>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid" id="overviewratings">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div>
                        <h5>4.5</h5>
                    </div>
                    <div id="stars">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfAlt />
                    </div>
                    <p className="text-light">Based on 115 reviews</p>
                </div>
                <div className="col-md-3">
                    <h2>Key Points</h2>
                    <h3>"Salary"</h3>
                    <h3>"Work Environment"</h3>
                </div>
                <div className="col-md-3">
                    <h5>75%</h5>
                    {/* <i className="fa-solid fa-star" style="opacity: 0;"></i> */}
                    <p className="text-light">75% rated salary as high or average</p>
                </div>
                <div className="col-md-3">
                    <h5>75%</h5>
                    {/* <i className="fa-solid fa-star" style="opacity: 0;"></i> */}
                    <p className="text-light">75% rated salary as high or average</p>
                </div>
            </div>
            <p className="italic text-light">Disclaimer: metrics are based only on employees reviews under A2S guidelines</p>
        </div>
    </div>

    <div className="container" id="reviews">
        <h2>Employee Reviews</h2>
        <div className="row">
            <div className="col-md-6">
                <div id="reviewRatings">
                    <div>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfAlt />
                    </div>
                    <p>14 days ago</p>
                </div>
                <h3>Engineer</h3>
                <h4>former employee</h4>
                <h3>Work Environment is good</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, magnam voluptates. Aut reiciendis, consectetur quaerat, reprehenderit ea earum deserunt deleniti tempora possimus quidem dolores iste commodi asperiores, sint dolorem nesciunt. </p>

                <div id="reviews-btn">
                    <button className="graybutton">
                        <FaFlag />
                    </button>
                    <button className="orangebutton regular">
                        <FaRegThumbsUp />
                    </button>
                </div>
            </div>
            <div className="col-md-6">
                <div id="reviewRatings">
                    <div>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfAlt />
                        {/* <p>4.5</p> */}
                    </div>
                    <p>14 days ago</p>
                </div>
                <h3>Engineer</h3>
                <h4>former employee</h4>
                <h3>Work Environment is good</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, magnam voluptates. Aut reiciendis, consectetur quaerat, reprehenderit ea earum deserunt deleniti tempora possimus quidem dolores iste commodi asperiores, sint dolorem nesciunt.</p>
                <div id="reviews-btn">
                    <button className="graybutton regular">
                        <FaFlag />
                    </button>
                    <button className="orangebutton regular">
                        <FaRegThumbsUp />
                    </button>
                </div>
            </div>
        </div>
        <div id="seemore">
            <button className="graybutton regular">See More</button>
        </div>    
    </div>


</div>

    

    
  )
}

export default CompanyOverview;