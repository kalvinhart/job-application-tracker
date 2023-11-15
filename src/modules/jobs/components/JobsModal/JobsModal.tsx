import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faSpinner, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useAuth } from "../../../auth/context/AuthContext";
import { useServices } from "../../../../common/context/ServicesContext";

import { Modal } from "../../../../common/components/Modal";
import { InputGroup } from "../../../../common/components/InputGroup";
import { Label } from "../../../../common/components/Label";
import { Input } from "../../../../common/components/Input";
import { TextArea } from "../../../../common/components/TextArea";
import { Button } from "../../../../common/components/Button";
import { InputErrorText } from "../../../../common/components/InputErrorText";

import { QueryKeys } from "../../../../common/enums/QueryKeys";
import { CreateJob } from "../../types/CreateJob";
import { ApplicationStatus } from "../../enums/ApplicationStatus";

import {
  JobButtonsWrapper,
  JobForm,
  JobFormGroup,
  JobFormRow,
  JobModalContent,
  JobSaveErrorWrapper,
} from "./JobsModal.styles";
import { H2 } from "../../../../styles/TypographyStyles";
import { DatePickerStyles } from "../../../../styles/DatePickerStyles";
import { JobFormInputs } from "../../types/JobFormInputs";

type JobsModalProps = {
  show: boolean;
  onClose: () => void;
};
const JobsModal: React.FC<JobsModalProps> = ({ show, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [saveError, setSaveError] = useState("");
  const { authState } = useAuth();
  const { jobService } = useServices();
  const queryClient = useQueryClient();

  const { mutateAsync: addJobMutation } = useMutation({
    mutationFn: (job: CreateJob) => jobService.createJob(job),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.JOBS] });
    },
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<JobFormInputs>();

  const onSubmit: SubmitHandler<JobFormInputs> = async data => {
    setLoading(true);
    setSaveError("");

    const newJob: CreateJob = {
      ...data,
      applicationStatus: ApplicationStatus.APPLIED,
      user: authState.user?._id as string,
    };

    try {
      await addJobMutation(newJob);
      closeModal();
    } catch (error) {
      setSaveError("There was an error saving this job.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const closeModal = (): void => {
    reset();
    onClose();
  };

  return (
    <Modal
      show={show}
      onClose={onClose}
    >
      <H2>Add a Job</H2>

      <JobModalContent>
        <JobForm onSubmit={handleSubmit(onSubmit)}>
          <JobFormRow>
            <JobFormGroup>
              {/* Job Title */}
              <InputGroup>
                <Label
                  htmlFor="title"
                  labelText="Job Title"
                />
                <Input
                  id="title"
                  {...register("title", { required: "A job title is required" })}
                  aria-invalid={errors.title ? "true" : "false"}
                />

                {errors.title && <InputErrorText>{errors.title.message}</InputErrorText>}
              </InputGroup>

              {/* Company */}
              <InputGroup>
                <Label
                  htmlFor="company"
                  labelText="Company"
                />
                <Input
                  id="company"
                  {...register("company", { required: "A company name is required" })}
                />

                {errors.company && <InputErrorText>{errors.company.message}</InputErrorText>}
              </InputGroup>

              {/* Location */}
              <InputGroup>
                <Label
                  htmlFor="location"
                  labelText="Location"
                />
                <Input
                  id="location"
                  {...register("location")}
                />
              </InputGroup>

              {/* Salary Min */}
              <InputGroup>
                <Label
                  htmlFor="salaryMin"
                  labelText="Salary"
                />
                <Input
                  id="salaryMin"
                  type="number"
                  step={500}
                  {...register("salaryMin", { valueAsNumber: true })}
                />
              </InputGroup>
            </JobFormGroup>

            <JobFormGroup>
              {/* Contact Name */}
              <InputGroup>
                <Label
                  htmlFor="contactName"
                  labelText="Contact Name"
                />
                <Input
                  id="contactName"
                  {...register("contactName")}
                />
              </InputGroup>

              {/* Contact Number */}
              <InputGroup>
                <Label
                  htmlFor="contactNumber"
                  labelText="Contact Number"
                />
                <Input
                  id="contactNumber"
                  {...register("contactNumber")}
                />
              </InputGroup>

              {/* Contact Email */}
              <InputGroup>
                <Label
                  htmlFor="contactEmail"
                  labelText="Contact Email"
                />
                <Input
                  id="contactEmail"
                  {...register("contactEmail")}
                />
              </InputGroup>

              {/* Date Applied */}
              <InputGroup>
                <Label
                  htmlFor="dateApplied"
                  labelText="Date Applied"
                />
                <Controller
                  control={control}
                  name="dateApplied"
                  rules={{ required: "A date is required" }}
                  render={({ field }): JSX.Element => (
                    <DatePickerStyles>
                      <DatePicker
                        isClearable
                        placeholderText="Select date"
                        onChange={(date): void => field.onChange(date ? new Date(date) : date)}
                        selected={field.value}
                        filterDate={(date): boolean => new Date() > date}
                        todayButton="Today"
                        dateFormat="dd/MM/yyyy"
                      />
                      {errors.dateApplied && <InputErrorText>{errors.dateApplied.message}</InputErrorText>}
                    </DatePickerStyles>
                  )}
                />
              </InputGroup>
            </JobFormGroup>
          </JobFormRow>

          {/* Job Description */}
          <InputGroup>
            <Label
              htmlFor="description"
              labelText="Job Description"
            />
            <TextArea
              id="description"
              rows={8}
              {...register("description")}
            />
          </InputGroup>

          {saveError && (
            <JobSaveErrorWrapper>
              <InputErrorText>{saveError}</InputErrorText>
            </JobSaveErrorWrapper>
          )}

          <JobButtonsWrapper>
            <Button
              type="submit"
              $variant="primary"
              disabled={loading}
            >
              <FontAwesomeIcon
                icon={loading ? faSpinner : faSave}
                spin={loading}
              />
              Save
            </Button>

            <Button
              type="button"
              $variant="secondary"
              onClick={closeModal}
            >
              <FontAwesomeIcon icon={faTimes} />
              Cancel
            </Button>
          </JobButtonsWrapper>
        </JobForm>
      </JobModalContent>
    </Modal>
  );
};

export default JobsModal;
