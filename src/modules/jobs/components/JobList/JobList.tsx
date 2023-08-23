import React from "react";
import { StyledJobList } from "./JobList.styles";
import { Job } from "../../types/Job";
import { JobListItem } from "../JobListItem";

type JobListProps = {
  jobs: Job[];
};
const JobList: React.FC<JobListProps> = ({ jobs }) => {
  return (
    <StyledJobList>
      {jobs.map(job => (
        <JobListItem
          key={job._id}
          job={job}
        />
      ))}
    </StyledJobList>
  );
};

export default JobList;
