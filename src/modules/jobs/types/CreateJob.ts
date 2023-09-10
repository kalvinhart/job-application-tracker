import { ApplicationStatus } from "../enums/ApplicationStatus";

export type CreateJob = {
  user: string;
  title: string;
  company: string;
  location: string;
  applicationStatus: ApplicationStatus;
  contactName?: string;
  contactNumber?: string;
  contactEmail?: string;
  description?: string;
  salaryMin?: number;
  salaryMax?: number;
  dateApplied: Date;
};
