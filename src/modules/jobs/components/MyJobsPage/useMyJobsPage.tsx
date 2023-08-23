import { useState, useCallback, useEffect } from "react";
import { useServices } from "../../../../common/context/ServicesContext";
import { Job } from "../../types/Job";
import { usePageTitle } from "../../../../common/hooks/usePageTitle";
import { appConfig } from "../../../../config/config";

export const useMyJobsPage = (): { loading: boolean; jobs: Job[] } => {
  usePageTitle(`${appConfig.appName} - My Jobs`);
  const { jobService } = useServices();
  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState<Job[]>([]);

  const getJobs = useCallback(async (): Promise<void> => {
    setLoading(true);

    const jobs = await jobService.getAllJobs();
    setJobs(jobs);

    setLoading(false);
  }, [jobService]);

  useEffect(() => {
    getJobs();
  }, [getJobs]);

  return { loading, jobs };
};
