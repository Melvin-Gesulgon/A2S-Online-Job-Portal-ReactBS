import React from 'react';
import '/node_modules/bootstrap/dist/css/bootstrap.css';
import JobPostTemplate from './pages/JobPostTemplate';

function App() {
  return (
    <div className="App">
       
    <JobPostTemplate
    position="Manager"
    companyName="Test Company"
    location="Caloocan"
    salary="PhP 35,000"
    jobDescription1="Manage the efficient workflow of staff and maximize the earning potential of the company."
    jobDescription2="He/She will work with marketing department to generate more leads from the campaign."
    companyOverview1="Test Company was founded by  brothers Test MyCode and Debug MyCode in 2000 to provide IT solutions to emerging companies across various fields."
    companyOverview2="The company has grown from a small agency to a multinational company that caters to both local and foreign clients across the world."
    
    />
              
    </div>
  );
}

export default App;
