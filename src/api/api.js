import axios from "axios";

const url = 'http://localhost:3000'

export default {
    get(path){
        return axios.get( url + path);
        },

    put(path){
        return axios.put(url+ path);
    },

    create(path){
        return axios.post(url + path);
    }
}