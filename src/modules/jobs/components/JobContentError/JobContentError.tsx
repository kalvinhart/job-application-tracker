import React from "react";
import { Card } from "../../../../common/components/Card";
import { SpanError } from "../../../../styles/TypographyStyles";
import { CenteredDiv } from "../../../../styles/CommonStyles";

type JobContentErrorProps = {
  message: string;
};
const JobContentError: React.FC<JobContentErrorProps> = ({ message }) => {
  return (
    <Card>
      <CenteredDiv>
        <SpanError>{message}</SpanError>
      </CenteredDiv>
    </Card>
  );
};

export default JobContentError;
