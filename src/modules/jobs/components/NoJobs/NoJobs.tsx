import React from "react";
import { NoJobsContainer } from "./NoJobs.styles";
import { Span } from "../../../../styles/TypographyStyles";
import { Button } from "../../../../common/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

type NoJobsProps = {
  showModal: () => void;
};
const NoJobs: React.FC<NoJobsProps> = ({ showModal }) => {
  return (
    <NoJobsContainer>
      <Span>You have no saved jobs to display.</Span>
      <Button
        $variant="primary"
        onClick={showModal}>
        <FontAwesomeIcon icon={faPlus} />
        Add New Job
      </Button>
    </NoJobsContainer>
  );
};

export default NoJobs;
