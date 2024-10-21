import { apiClient } from "./config";


export const apiGetAdvert = async () => apiClient.get('/adverts');