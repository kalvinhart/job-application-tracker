import { useQuery } from "@tanstack/react-query";
import { Job } from "../types/Job";
import { useServices } from "../../../common/context/ServicesContext";
import { QueryKeys } from "../../../common/enums/QueryKeys";

type Return = {
  isLoading: boolean;
  isError: boolean;
  error: unknown;
  jobs: Job[] | undefined;
};

export const useJobs = (): Return => {
  const { jobService } = useServices();

  const { isLoading, isError, error, data } = useQuery({
    queryKey: [QueryKeys.JOBS],
    queryFn: async () => await jobService.getAllJobs(),
    staleTime: Infinity,
  });

  return {
    isLoading,
    isError,
    error,
    jobs: data,
  };
};
