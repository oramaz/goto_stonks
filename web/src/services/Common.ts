import axiosStatic, {AxiosInstance} from 'axios';
import {HOST_URL} from "../settings";

export interface IRequestOptions {
   headers?: any;
   baseURL?: string;
   responseType?: string;
}

export interface IRequestPagination {
   limit?: number;
   page?: number;
}

export interface IRequestConfig {
   method?: any;
   headers?: any;
   url?: any;
   data?: any;
   params?: any;
}

export interface ServiceOptions {
   axios?: AxiosInstance;
}

export const serviceOptions: ServiceOptions = {};

export function axios(configs: IRequestConfig, resolve: (p: any) => void, reject: (p: any) => void, dataOnly: boolean = true) {
   const req = serviceOptions.axios ? serviceOptions.axios.request(configs) : axiosStatic(configs);
   return req
      .then(res => {
         resolve(dataOnly ? res.data : res);
      })
      .catch(err => {
         reject(err);
      });
}

export function getConfigs(method: string, contentType: string, endpointPath: string, options: any, host: string = HOST_URL): IRequestConfig {
   const url = host + endpointPath;
   const configs: IRequestConfig = {...options, method, url};

   configs.headers = {
      ...options.headers
   };
   console.log(configs)
   configs.headers = {
      ...configs.headers
   };

   return configs;
}
