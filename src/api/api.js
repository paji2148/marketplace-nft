import axios from "axios";

const url = 'http://api.dunefall.com/'

export default {
    get(path){
        return axios.get( url + path, {withCredentials: true} );
        },

    post(path, data){
        return axios.post( url+ path, data, {withCredentials: true} );
    },
}