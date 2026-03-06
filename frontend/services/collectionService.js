import api from './axios'

export const getCollection =(userData)=>{
    return api.post(`/collection?owner=${userid}`, userData)
}

export const createCollection = (collectionData) => {
    return api.post('/collections', collectionData);
};