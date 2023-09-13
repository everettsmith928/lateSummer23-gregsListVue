import { AppState } from "../AppState"
import { House } from "../models/House"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class HousesService {
  async getHouses() {
    let res = await api.get('api/houses')
    logger.log(res.data)
    AppState.houses = res.data.map(house => new House(house))
    logger.log(AppState.houses)
  }

  async createHouse(newHouse) {
    logger.log('New house in the Service', newHouse)
    let res = await api.post('api/houses', newHouse)
    logger.log(res.data)
    const createdHouse = new House(res.data)
    AppState.houses.push(createdHouse)
    return createdHouse
  }

  async getHouseById(houseId) {
    AppState.activeHouse = null
    let res = await api.get(`api/houses/${houseId}`)
    logger.log(res.data)
    let activeHouse = new House(res.data)
    AppState.activeHouse = activeHouse
  }

  async deleteHouse() {
    const houseId = AppState.activeHouse.id
    logger.log(houseId)
    let res = await api.delete(`api/houses/${houseId}`)
    logger.log(res.data)
  }

}

export const housesService = new HousesService()