import { apiClient } from "./config";


export const apiGetAdverts = async (id) => await apiClient.get(`/adverts/${id}`);
// export const apiGetAdvert = async (id) => await apiClient.get(`/adverts/${id}`);    

export const apiGetSingleAd = async (adId) => apiClient.get(`/adverts/${adId}`);
export const apiGetAdvert = async () => await apiClient.get('/adverts');
export const apiGetSingleAdvert =async (id) => await apiClient.get(`/adverts/${id}`);
export const apiSearch =async ()=> await apiClient.get('/adverts');

export const apiAddAdverts = async (payload) => apiClient.post("/adverts", payload);


export const apiUpdateAdverts = async (payload) => apiClient.post("/adverts/id")