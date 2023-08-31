import React from "react";
import { Span } from "../../../../styles/TypographyStyles";
import { JobList } from "../JobList";
import { useMyJobsPage } from "./useMyJobsPage";
import { NoJobs } from "../NoJobs";
import { Button } from "../../../../common/components/Button";
import { JobsContent, JobsHeader } from "./MyJobsPage.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Card } from "../../../../common/components/Card";
import { JobsModal } from "../JobsModal";

const MyJobsPage: React.FC = () => {
  const { isLoading, isError, error, jobs, showModal, handleShowModal, handleCloseModal } = useMyJobsPage();

  const content = jobs && jobs.length > 0 ? <JobList jobs={jobs} /> : <NoJobs showModal={handleShowModal} />;

  return (
    <>
      <JobsHeader>
        <Span
          $fontSize={24}
          $bold>
          My Jobs
        </Span>

        {jobs && jobs.length > 0 && (
          <Button
            $variant="primary"
            onClick={handleShowModal}>
            <FontAwesomeIcon icon={faPlus} />
            Add Job
          </Button>
        )}
      </JobsHeader>

      <JobsContent>
        {isError ? <span>{error?.message}</span> : <Card>{isLoading ? "Loading" : content}</Card>}
      </JobsContent>

      <JobsModal
        show={showModal}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default MyJobsPage;
