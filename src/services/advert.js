import { apiClient } from "./config";


export const apiGetAdvert = async () => await apiClient.get('/adverts');

export const apiAddAdverts = async (payload) => apiClient.post("/adverts", payload);