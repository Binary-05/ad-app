import { apiClient } from "./config";


export const apiGetAdvert = async () => await apiClient.get('/adverts');

export const apiAddAdverts = async (payload) => apiClient.post("/adverts", payload);

export const apiUpdateAdverts = async (payload) => apiClient.post("/adverts/id")