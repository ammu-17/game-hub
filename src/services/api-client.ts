import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key : '926b1f7cb30740088fe4d298ebb5fd10'
    }
})