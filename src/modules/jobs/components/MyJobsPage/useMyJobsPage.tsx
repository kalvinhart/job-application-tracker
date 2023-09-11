import { useState } from "react";
import { Job } from "../../types/Job";
import { usePageTitle } from "../../../../common/hooks/usePageTitle";
import { appConfig } from "../../../../config/config";
import { useJobs } from "../../hooks/useJobs";

type UseMyJobsPageReturnType = {
  isLoading: boolean;
  isError: boolean;
  error: unknown;
  jobs: Job[] | undefined;
  showModal: boolean;
  handleShowModal: () => void;
  handleCloseModal: () => void;
};
export const useMyJobsPage = (): UseMyJobsPageReturnType => {
  usePageTitle(`${appConfig.appName} - My Jobs`);
  const { error, isError, isLoading, jobs } = useJobs();

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = (): void => {
    setShowModal(true);
  };

  const handleCloseModal = (): void => {
    setShowModal(false);
  };

  return { isLoading, isError, error, jobs, showModal, handleShowModal, handleCloseModal };
};
