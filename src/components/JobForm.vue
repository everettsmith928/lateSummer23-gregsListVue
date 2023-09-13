<template>
  <h1 class="text-center">Post a New Job</h1>
  <form class="row g-3 justify-content-center m-2" @submit.prevent="createJob">
    <div class="col-5">
      <input v-model="newJob.jobTitle" type="text" class="m-2 w-100 rounded" maxLength="10000" placeholder="Title">
      <input v-model="newJob.company" type="text" class="m-2 w-100 rounded" maxLength="10000" placeholder="Company">
      <input v-model="newJob.hours" type="number" class="m-2 w-100 rounded" max="10000000" placeholder="Hours">
      <input v-model="newJob.rate" type="number" class="m-2 w-100 rounded" max="500000" placeholder="Rate">

      <textarea v-model="newJob.description" class="m-2 w-100 rounded" maxLength="1000"
        placeholder="description"></textarea>
      <button class="m-2 btn btn-secondary">Create</button>
    </div>
  </form>
</template>

<script>
import { ref } from "vue";
import Pop from "../utils/Pop";
import { logger } from "../utils/Logger";
import { jobsService } from "../services/JobsService";

export default {

  setup() {
    const newJob = ref({})

    return {
      newJob,
      async createJob() {
        try {

          logger.log('creating your Job', newJob.value)
          await jobsService.createJob(newJob.value)
        } catch (error) {
          Pop.error(error)
        }
      }
    };
  },
};
</script>


<style></style>