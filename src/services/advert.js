import { apiClient } from "./config";


export const apiGetAdvert = async () => await apiClient.get('/adverts');