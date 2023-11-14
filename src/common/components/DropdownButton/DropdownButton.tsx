import React, { ButtonHTMLAttributes, forwardRef, useState } from "react";
import { DropdownContent, DropdownOptionButton, DropdownWrapper, StyledDropdownButton } from "./DropdownButton.styles";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type DropdownButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  options: {
    text: string;
    icon?: JSX.Element;
    onClick: () => void;
  }[];
};

const DropdownButton = forwardRef<HTMLButtonElement, DropdownButtonProps>(({ children, options, ...props }, ref) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = (): void => {
    setOpen(prev => !prev);
  };

  return (
    <DropdownWrapper>
      <StyledDropdownButton
        ref={ref}
        {...props}
        onClick={toggleOpen}
      >
        <FontAwesomeIcon
          icon={faEllipsisVertical}
          size="lg"
        />
      </StyledDropdownButton>

      {open && (
        <DropdownContent>
          {options.map(option => (
            <DropdownOptionButton>
              {option.icon && option.icon}
              {option.text}
            </DropdownOptionButton>
          ))}
        </DropdownContent>
      )}
    </DropdownWrapper>
  );
});

export default DropdownButton;
