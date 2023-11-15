import { styled } from "styled-components";

export const DatePickerStyles = styled.div`
  .react-datepicker-wrapper,
  .react-datepicker__input-container,
  .react-datepicker__input-container input {
    width: 100%;
  }

  .react-datepicker__input-container input {
    padding: 10px 20px;
    border: 1px solid var(--clr-outline);
    border-radius: var(--border-radius);
    outline: none;
    transition: border 0.2s ease-in-out;

    &:focus {
      border: 1px solid var(--clr-primary);
    }
  }

  .react-datepicker__close-icon::after {
    height: 18px;
    width: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    vertical-align: unset;
    text-align: unset;
    background-color: var(--clr-primary);
    font-size: 14px;
  }

  .react-datepicker__header,
  .react-datepicker__today-button {
    background-color: var(--clr-primary);
  }

  .react-datepicker__current-month,
  .react-datepicker__day-name {
    color: white;
  }

  .react-datepicker__today-button {
    color: white;
  }
`;
