import styled from "styled-components";

export const JobStatusLabel = styled.span`
  padding: 5px 10px;
  border-radius: var(--border-radius);
  font-size: 12px;
  color: white;
`;

export const AppliedJobStatusLabel = styled(JobStatusLabel)`
  background-color: var(--status-label-applied);
`;

export const InterviewJobStatusLabel = styled(JobStatusLabel)`
  background-color: var(--status-label-interview);
`;

export const OfferJobStatusLabel = styled(JobStatusLabel)`
  background-color: var(--status-label-offer);
`;

export const AcceptedJobStatusLabel = styled(JobStatusLabel)`
  background-color: var(--status-label-accepted);
`;

export const RejectedJobStatusLabel = styled(JobStatusLabel)`
  background-color: var(--status-label-rejected);
`;

export const ExpiredJobStatusLabel = styled(JobStatusLabel)`
  background-color: var(--status-label-expired);
`;
