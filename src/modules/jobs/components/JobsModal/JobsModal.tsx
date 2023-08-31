import React from "react";
import { Modal } from "../../../../common/components/Modal";
import { SubmitHandler, useForm } from "react-hook-form";
import { JobForm, JobModalContent } from "./JobsModal.styles";
import { InputGroup } from "../../../../common/components/InputGroup";
import { Label } from "../../../../common/components/Label";
import { Input } from "../../../../common/components/Input";
import { H2 } from "../../../../styles/TypographyStyles";

type JobFormInputs = {
  title: string;
};

type JobsModalProps = {
  show: boolean;
  onClose: () => void;
};
const JobsModal: React.FC<JobsModalProps> = ({ show, onClose }) => {
  const { register, handleSubmit } = useForm<JobFormInputs>();

  const onSubmit: SubmitHandler<JobFormInputs> = async data => {};

  return (
    <Modal
      show={show}
      onClose={onClose}
    >
      <H2>Add a Job</H2>

      <JobModalContent>
        <JobForm onSubmit={handleSubmit(onSubmit)}>
          <InputGroup>
            <Label
              htmlFor="title"
              labelText="Job Title:"
            />
            <Input
              id="title"
              {...register("title", { required: true })}
            />
          </InputGroup>
        </JobForm>
      </JobModalContent>
    </Modal>
  );
};

export default JobsModal;
