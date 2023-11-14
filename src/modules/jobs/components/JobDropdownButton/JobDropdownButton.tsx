import { forwardRef } from "react";
import { DropdownButton } from "../../../../common/components/DropdownButton";

const JobDropdownButton = forwardRef<HTMLButtonElement>((_, ref) => {
  return (
    <DropdownButton
      ref={ref}
      options={[
        { text: "Update Status", onClick: (): void => {} },
        { text: "Edit Job", onClick: (): void => {} },
      ]}
    />
  );
});

export default JobDropdownButton;
