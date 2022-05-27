import axios from "axios";
 // import qs
import qs from 'qs'
 
axios.defaults.baseURL = '' 
 
//post header
axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";
//setting timeout
axios.defaults.timeout = 10000;
 
axios.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
 
axios.interceptors.response.use(
    response => {
        if (response.status == 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    error => {
        console.log(error);
    }
);

export default {
    get(url: any, data: any) {
        return new Promise((resolve, reject) => {
            axios({
                    method: 'get',
                    url,
                    params: data,
                })
                .then(res => {
                    resolve(res.data)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
    post(url: any, body: any) {
        return new Promise((resolve, reject) => {
            axios.post(url, body).then((result) => {
                resolve(result);
            }).catch((err)=>{
                reject(err);
            })
        })
    }
};