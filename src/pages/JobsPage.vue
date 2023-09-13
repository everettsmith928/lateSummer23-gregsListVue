<template>
  <div class="container-fluid">
    <JobForm />
    <section class="row text-center">
      <div v-for="job in jobs" :key="job.id">
        <JobCard :job="job" />
      </div>
    </section>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { AppState } from "../AppState";
import Pop from "../utils/Pop";
import { jobsService } from "../services/JobsService.js"


export default {
  setup() {
    async function getJobs() {
      try {
        await jobsService.getJobs()
      } catch (error) {
        Pop.error(error)
      }
    }
    onMounted(getJobs)
    return {
      jobs: computed(() => AppState.jobs)
    };
  },
};
</script>


<style></style>