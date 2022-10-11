import React from 'react';
import SearchJobsCategory from '../components/findJob';
import JobSearchBar from '../components/jobSearchBar';
import JobFilterResult from '../components/jobFilterResult';

const SearchJobs = () => {
  return (
    <div>
    <SearchJobsCategory />
    <JobSearchBar /> 
    <JobFilterResult /> 
    </div>
  )
}

export default SearchJobs