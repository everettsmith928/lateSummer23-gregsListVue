<template>
  <div class="container-fluid">
    <HouseForm />
    <section class="row">
      <div class="row g-3 col-3" v-for="house in houses" :key="house.id">
        <HouseCard :house="house" />
      </div>
    </section>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { housesService } from '../services/HousesService.js'
import { AppState } from '../AppState.js'
import { logger } from "../utils/Logger";

export default {
  setup() {

    onMounted(getHouses)
    async function getHouses() {
      await housesService.getHouses()
    }
    return {
      houses: computed(() => AppState.houses),
      async deleteHouse() {
        await housesService.deleteHouse()
      },

      async setActiveHouse() {
        logger.log('setting active house')
      }
    };
  },
};
</script>


<style></style>