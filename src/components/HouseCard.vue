<template>
  <router-link :to="{ name: 'House Details', params: { houseId: house.id } }">
    <div class="card elevation-2 bg-dark text-light">
      <img class="img-fluid" :src="house.imgUrl">
      <h3>${{ house.price }}</h3>
      <p>{{ house.description }}</p>
      <section class="row">
        <div class="col-6">
          <p>Bedrooms: {{ house.bedrooms }}</p>
        </div>
        <div class="col-6">
          <p>Levels: {{ house.levels }}</p>
        </div>
      </section>
    </div>
  </router-link>
</template>

<script>
import { House } from "../models/House";

export default {
  props: { house: { type: House, required: true } },
  setup() {

    return {};
  },
};
</script>


<style></style>