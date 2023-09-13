<template>
  <h1 class="text-center">List a House Here</h1>
  <form class="row g-3 justify-content-center m-2" @submit.prevent="createHouse">
    <div class="col-5">
      <input v-model="newHouse.price" type="number" class="m-2 w-100 rounded" max="10000000" placeholder="price">
      <input v-model="newHouse.imgUrl" type="url" class="m-2 w-100 rounded" maxlength="5000" placeholder="imgUrl">
      <img class="img-fluid w-25" :src="newHouse.imgUrl">
      <input v-model="newHouse.bedrooms" type="number" class="m-2 w-100 rounded" max="100" placeholder="bedrooms">
      <input v-model="newHouse.bathrooms" type="number" class="m-2 w-100 rounded" max="100" placeholder="bathrooms">
      <input v-model="newHouse.levels" type="text" class="m-2 w-100 rounded" max="500" placeholder="levels">
      <input v-model="newHouse.year" type="text" class="m-2 w-100 rounded" max="2023" min="1000" placeholder="year">
      <textarea v-model="newHouse.description" class="m-2 w-100 rounded" maxLength="1000"
        placeholder="description"></textarea>
      <button class="m-2 btn btn-secondary">Create</button>
    </div>
  </form>
</template>

<script>
import { ref } from "vue";
import { housesService } from "../services/HousesService";
import { logger } from "../utils/Logger";


export default {
  setup() {
    const newHouse = ref({})
    return {
      newHouse,
      async createHouse() {
        logger.log(newHouse.value)
        let house = await housesService.createHouse(newHouse.value)
        logger.log('New House Created!', house)
      },

    };
  },
};
</script>


<style></style>