import React from 'react';
import '../../css/melvin.css';
import '../../css/main.css';

const JobPostTemplate = (post) => {
  return (

    <div class="container" id="jpost">
        <div id="jpost-head">
            <h2>{post.position}</h2>
            <h3>{post.companyName}</h3>
            <br />
            <p>{post.location}</p>
            <p>{post.salary}</p>
            <br />
            <p>Posted 3 days ago</p>
            <div id="jpost-appply">
                <a href="apply.html"class="orangebutton regular nlw">Apply Now</a>
            </div>
        </div>
        <div id="line-break"></div>
        <div id="jpost-jobdes">
            <h4>Job Description</h4>
            <br />
            <p>{post.jobDescription1}</p>
            <p>{post.jobDescription2}</p>
        </div>    
        <div id="jpost-company">
        <div id="line-break"></div>
        
            <h4>Company Overview</h4>
            <br />
            <p>{post.companyOverview1}</p>
            <p>{post.companyOverview2}</p>
        </div>
        <div id="line-break"></div>
        <a href="../#" class="jobs-link">More jobs from this employer</a>
        <div id="jpost-save">
            <button class="graybutton regular">Save this Post</button>
        </div>
        <a href="../#" class="jobs-link">Report this job ad</a>
    </div>

  )
}

export default JobPostTemplate