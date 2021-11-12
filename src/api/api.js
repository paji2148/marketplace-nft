import axios from "axios";

const url = 'http://localhost:3000'

export default {
    get(path){
        return axios.get( url + path, {withCredentials: true} );
        },

    post(path, data){
        return axios.post( url+ path, data, {withCredentials: true} );
    },

    // create(path){
    //     return axios.post(url + path);
    // }
}