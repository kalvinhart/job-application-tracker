import { styled } from "styled-components";
import { MediaSizes } from "../../../../styles/MediaSizes";

export const JobModalContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;

  @media only screen and (min-width: ${MediaSizes.medium}) {
    width: 660px;
  }
`;

export const JobForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const JobFormRow = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: ${MediaSizes.medium}) {
    flex-direction: row;
  }
`;

export const JobFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  @media only screen and (min-width: ${MediaSizes.medium}) {
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
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

  @media only screen and (min-width: ${MediaSizes.medium}) {
    flex-direction: row;
    align-self: end;

    & button:first-of-type {
      margin-bottom: 0;
      margin-right: 10px;
    }
  }
`;
