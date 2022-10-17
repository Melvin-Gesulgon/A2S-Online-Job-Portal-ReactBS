import React from "react";
import '../css/main.css';
import '../css/melvin.css';
import Logo from '../img/logo.png';


const CompanyOverview = () => {
    return ( 

<div>

        <div className="container" id="companyProfile">
        <div className="row">
            <div className="col-md-4">
                <img src={Logo} alt="" width="100%"/>
            </div>
            <div className="col-md-8" id="companyName">
                <h2>
                    Company XYZ
                </h2>
                <h3>BPO & Tech Industry</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum rerum dolorum quidem architecto. Odio voluptatum doloribus vero ipsum nobis! Qui obcaecati facilis reiciendis voluptatibus error possimus voluptas deleniti aliquid iusto.</p>
                <span><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eum, temporibus similique quod labore eaque reprehenderit. Repellat facere quod est perspiciatis aliquam ut reprehenderit, et magni officiis atque ullam voluptas.<a className="jobs-link" href=""> read more</a>
                </p></span>
                <div id="buttonbox">
                    <button className="graybutton regular" href="">View Job Posts</button>
                    <button className="orangebutton regular" href="">Visit Website</button>
                </div>
            </div>
        </div>
    </div>

<div className="container" id="highlights">
<h2>Highlights</h2>
<div className="row">
    <div className="col-md-6">
        <div className="highlights-items">
            <div>
                <i className="fa-solid fa-location-dot"></i>
            </div>
            <div>
                <h4>Location</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias voluptatem adipisci laboriosam maxime consequatur magnam.</p>
            </div>
        </div>
        <div className="highlights-items">
            <div>
                <i className="fa-solid fa-boxes-packing"></i>
            </div>
            <div>
                <h4>Benefits</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias voluptatem adipisci laboriosam maxime consequatur magnam.</p>
            </div>
        </div>
        <div className="highlights-items">
            <div>
                <i className="fa-solid fa-hourglass-start"></i>
            </div>
            <div>
                <h4>Work Hours</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias voluptatem adipisci laboriosam maxime consequatur magnam.</p>
            </div>
        </div>
    </div>
    <div className="col-md-6">
        <div className="highlights-items">
            <div>
                <i className="fa-solid fa-sitemap"></i>
            </div>
            <div>
                <h4>Company Size</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias voluptatem adipisci laboriosam maxime consequatur magnam.</p>
            </div>
        </div>
        <div className="highlights-items">
            <div>
                <i class="fa-solid fa-house-laptop"></i>
            </div>
            <div>
                <h4>Work Setup</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias voluptatem adipisci laboriosam maxime consequatur magnam.</p>
            </div>
        </div>
        <div className="highlights-items">
            <div>
                <i className="fa-solid fa-shirt"></i>
            </div>
            <div>
                <h4>Dress Code</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias voluptatem adipisci laboriosam maxime consequatur magnam.</p>
            </div>
        </div>
    </div>
</div>
</div>


</div>

     );
}
 
export default CompanyOverview;