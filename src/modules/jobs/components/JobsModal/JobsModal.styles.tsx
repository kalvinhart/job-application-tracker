import { styled } from "styled-components";

export const JobModalContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const JobForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const JobSaveErrorWrapper = styled.div`
  margin-bottom: 20px;
`;

export const JobButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & button:first-of-type {
    margin-bottom: 10px;
  }
`;
