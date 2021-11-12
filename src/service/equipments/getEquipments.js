import api from "../api"
import { WS_EQUIPMENTS } from "../config"

export const getEquipments = async () => {
    try {
        let response = await api.get(WS_EQUIPMENTS)
        return response.data
    } catch (exception) {
        throw new Error('Não foi possível obter a lista de equipamentos!')
    }
}