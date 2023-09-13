<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-12 card elevation-3 text-center">
        <h2>Title: {{ job.jobTitle }}</h2>
        {{ job.description }}
        <h3>Hourly Rate: {{ job.rate }}</h3>
      </div>
    </section>
  </div>
</template>

<script>
import { Job } from "../models/Job";

export default {
  props: { job: { type: Job, required: true } },
  setup() {

    return {};
  },
};
</script>


<style></style>