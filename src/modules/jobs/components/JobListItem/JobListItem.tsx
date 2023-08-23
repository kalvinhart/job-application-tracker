import React from "react";
import { StyledJobListItem } from "./JobListItem.styles";
import { Job } from "../../types/Job";

type JobListItemProps = {
  job: Job;
};
const JobListItem: React.FC<JobListItemProps> = ({ job }) => {
  return <StyledJobListItem>JobListItem</StyledJobListItem>;
};

export default JobListItem;
