import React from "react";
import { H2 } from "../../../../styles/TypographyStyles";
import { JobList } from "../JobList";
import { useMyJobsPage } from "./useMyJobsPage";
import { NoJobs } from "../NoJobs";

const MyJobsPage: React.FC = () => {
  const { loading, jobs } = useMyJobsPage();

  const content = jobs.length > 0 ? <JobList jobs={jobs} /> : <NoJobs />;

  return (
    <>
      <H2>My Jobs</H2>
      {loading ? null : content}
    </>
  );
};

export default MyJobsPage;
