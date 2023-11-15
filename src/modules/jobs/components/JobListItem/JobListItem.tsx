import React from "react";
import { useServices } from "../../../../common/context/ServicesContext";
import { JobStatusLabel } from "../JobStatusLabel";
import { Job } from "../../types/Job";
import { JobDetails, JobMainInfo, JobTitleWrapper, StyledJobListItem } from "./JobListItem.styles";
import { Span } from "../../../../styles/TypographyStyles";
import { LinkPrimary } from "../../../../styles/CommonStyles";
import { JobDropdownButton } from "../JobDropdownButton";

type JobListItemProps = {
  job: Job;
};
const JobListItem: React.FC<JobListItemProps> = ({ job }) => {
  const { dateService } = useServices();

  const dateApplied = dateService.format(new Date(job.dateApplied), "dd/MM/yyyy");

  return (
    <StyledJobListItem>
      <JobDetails>
        <JobMainInfo>
          <JobTitleWrapper>
            <LinkPrimary to={`/job/${job._id}`}>
              <Span
                $fontSize={18}
                $bold
              >
                {job.title}
              </Span>
            </LinkPrimary>

            <JobStatusLabel applicationStatus={job.applicationStatus} />
          </JobTitleWrapper>

          <Span>{job.company}</Span>

          <Span $fontSize={14}>{job.location}</Span>
        </JobMainInfo>

        <Span $fontSize={12}>Applied on {dateApplied}</Span>
      </JobDetails>

      <JobDropdownButton />
    </StyledJobListItem>
  );
};

export default JobListItem;
