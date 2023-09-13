<template>
  <div class="container-fluid">
    <section v-if="activeHouse" class="row">
      <div class="col-12">
        <img class="img-fluid w-100 mt-3" :src="activeHouse.imgUrl" alt="" srcset="">
      </div>
      <div class="col-12 text-center">
        <h2>${{ activeHouse.price }}</h2>
        <p>Description: {{ activeHouse.description }}</p>
        <p>Levels: {{ activeHouse.levels }}</p>
        <p>Bedrooms: {{ activeHouse.bedrooms }}</p>
        <p>Bathrooms: {{ activeHouse.bathrooms }}</p>
      </div>
      <h1></h1>
      <button @click="deleteHouse" v-if="account.id == activeHouse.creatorId" class="btn btn-danger "><i
          class="mdi mdi-delete"></i></button>
    </section>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { housesService } from "../services/HousesService";
import { computed, onMounted, popScopeId } from "vue";
import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";


export default {
  setup() {
    const route = useRoute()
    async function getHouseById() {
      const houseId = route.params.houseId
      await housesService.getHouseById(houseId)
    }
    onMounted(() =>
      getHouseById()
    )
    return {
      activeHouse: computed(() => AppState.activeHouse),
      account: computed(() => AppState.account),
      async deleteHouse() {
        try {
          logger.log('deltingHouse..')
          if (await Pop.confirm()) { await housesService.deleteHouse() }
          logger.log('deleted House')
        } catch (error) {
          Pop.error(error)
        }

      }
    };
  },
};
</script>


<style></style>