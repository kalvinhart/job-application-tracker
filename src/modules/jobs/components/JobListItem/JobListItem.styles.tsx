import { styled } from "styled-components";

export const StyledJobListItem = styled.li`
  display: flex;
  align-items: start;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 20px;
  background-color: white;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
`;

export const JobDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const JobTitleWrapper = styled.div`
  display: flex;

  & a {
    margin-right: 10px;
  }
`;

export const JobMainInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
