import React from "react";
import { ApplicationStatus } from "../../enums/ApplicationStatus";
import {
  AcceptedJobStatusLabel,
  AppliedJobStatusLabel,
  ExpiredJobStatusLabel,
  InterviewJobStatusLabel,
  OfferJobStatusLabel,
  RejectedJobStatusLabel,
} from "./JobStatusLabel.styles";

type JobStatusLabelProps = { applicationStatus: ApplicationStatus };

const JobStatusLabel: React.FC<JobStatusLabelProps> = ({ applicationStatus }) => {
  switch (applicationStatus) {
    case ApplicationStatus.APPLIED:
      return <AppliedJobStatusLabel>{applicationStatus}</AppliedJobStatusLabel>;
    case ApplicationStatus.INTERVIEW:
      return <InterviewJobStatusLabel>{applicationStatus}</InterviewJobStatusLabel>;
    case ApplicationStatus.OFFER_RECEIVED:
      return <OfferJobStatusLabel>{applicationStatus}</OfferJobStatusLabel>;
    case ApplicationStatus.ACCEPTED:
      return <AcceptedJobStatusLabel>{applicationStatus}</AcceptedJobStatusLabel>;
    case ApplicationStatus.REJECTED:
      return <RejectedJobStatusLabel>{applicationStatus}</RejectedJobStatusLabel>;
    case ApplicationStatus.EXPIRED:
      return <ExpiredJobStatusLabel>{applicationStatus}</ExpiredJobStatusLabel>;
    default:
      throw new Error("Unknown job application status.");
  }
};

export default JobStatusLabel;
