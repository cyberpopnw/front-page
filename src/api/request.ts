import axios from "axios";
 // import qs
 
axios.defaults.baseURL = '' 
 
//post header
// axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";
//setting timeout
axios.defaults.timeout = 10000;
 
axios.interceptors.request.use(
    ( config: any) => {
        if( localStorage.getItem('access_code') ){
            config.headers.Authorization = localStorage.getItem('token_type') + " " + localStorage.getItem('access_code')
        }
        return config;
    },
    ( error: any) => {
        return Promise.reject(error);
    }
);
 
axios.interceptors.response.use(
    (response: { status: number; }) => {
        if (response.status == 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    (error: any) => {
        console.log(error);
    }
);

export default {
    get(url: any, headers?: any, data?: any,) {
        return new Promise((resolve, reject) => {
            axios({
                    method: 'get',
                    url,
                    headers: headers,
                    params: data,
                })
                .then((res: any) => {
                    resolve(res.data)
                })
                .catch((err: any) => {
                    reject(err)
                })
        })
    },
    post(url: any, body: any, headers?: any) {
        return new Promise((resolve, reject) => {
            axios.post(url, body, headers).then((result: any) => {
                resolve(result);
            }).catch((err: any)=>{
                reject(err);
            })
        })
    }
};