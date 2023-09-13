import { AppState } from "../AppState"
import { Job } from "../models/Job"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"


class JobsService {
  async getJobs() {
    let res = await api.get('api/jobs')
    logger.log(res.data)
    AppState.jobs = res.data.map(job => new Job(job))
    logger.log(AppState.jobs)
  }

  async createJob(newJob) {
    let res = await api.post(`api/jobs`, newJob)
    logger.log(res.data)
    AppState.jobs.push(new Job(res.data))
  }
}

export const jobsService = new JobsService()