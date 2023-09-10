import { useQuery } from "@tanstack/react-query";
import { Job } from "../types/Job";
import { useServices } from "../../../common/context/ServicesContext";
import { appConfig } from "../../../config/config";
import { AxiosError } from "axios";
import { QueryKeys } from "../../../common/enums/QueryKeys";

type Return = {
  isLoading: boolean;
  isError: boolean;
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  error: AxiosError<unknown, any> | null;
  jobs: Job[] | undefined;
};

export const useJobs = (): Return => {
  const { httpService } = useServices();

  const { isLoading, isError, error, data } = useQuery<Job[], AxiosError, Job[]>({
    queryKey: [QueryKeys.JOBS],
    queryFn: async () => await httpService.get<Job[]>(`${appConfig.apiUrl}/jobs`),
  });

  return {
    isLoading,
    isError,
    error,
    jobs: data,
  };
};
