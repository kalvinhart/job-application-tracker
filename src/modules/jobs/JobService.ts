import { HttpService } from "../../common/services/Http/HttpService";
import { appConfig } from "../../config/config";
import { CreateJob } from "./types/CreateJob";
import { Job } from "./types/Job";

export class JobService {
  private _httpService: HttpService;
  private apiRoot = `${appConfig.apiUrl}/jobs`;

  constructor(httpService: HttpService) {
    this._httpService = httpService;
  }

  async getAllJobs(): Promise<Job[]> {
    return await this._httpService.get<Job[]>(this.apiRoot);
  }

  async getJobById(jobId: string): Promise<Job> {
    return await this._httpService.get<Job>(`${this.apiRoot}/${jobId}`);
  }

  async createJob(job: CreateJob): Promise<Job> {
    return await this._httpService.post<Job, CreateJob>(this.apiRoot, job);
  }

  async updateJob(job: Job): Promise<Job> {
    return await this._httpService.put<Job, Job>(this.apiRoot, job);
  }

  async deleteJob(jobId: string): Promise<void> {
    await this._httpService.delete(`${this.apiRoot}/${jobId}`);
  }
}
