import axios from 'axios';

//https://api.hgbrasil.com/weather?key=114ac4ad&lat=-23.682&lon=-46.875

export const key = '114ac4ad';

const api = axios.create({
    baseURL: 'https://api.hgbrasil.com/'
});

export default api;
