import axios from "axios";

const tmdb = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: '746e89a29ccc1bdf5024c57911a4b5b5',
    }
});
export default tmdb;