import { axios, getConfigs, IRequestConfig, IRequestOptions } from "./Common";
import {GlassItem} from "../models/Terminal";

export default class TerminalService {
   async getSells(params: {project: string},options: IRequestOptions = {}
   ): Promise<GlassItem[]> {
      return new Promise((resolve, reject) => {
         let url = "/get_to_sale/";

         const configs: IRequestConfig = getConfigs(
            "get",
            "application/json",
            url,
            options
         );

         configs.params = params

         axios(configs, resolve, reject);
      });
   }
   async getBuys(params: {project: string},options: IRequestOptions = {}
   ): Promise<GlassItem[]> {
      return new Promise((resolve, reject) => {
         let url = "/get_to_buy/";

         const configs: IRequestConfig = getConfigs(
            "get",
            "application/json",
            url,
            options
         );

         configs.params = params

         axios(configs, resolve, reject);
      });
   }
   async sell(params: {project: string, price: number, count: number, author: string} ,options: IRequestOptions = {}
   ): Promise<any> {
      return new Promise((resolve, reject) => {
         let url = "/to_sale/";

         const configs: IRequestConfig = getConfigs(
            "post",
            "application/json",
            url,
            options
         );

         configs.data = params

         axios(configs, resolve, reject);
      });
   }
   async buy(params: {project: string, price: number, count: number, author: string},options: IRequestOptions = {}
   ): Promise<any> {
      return new Promise((resolve, reject) => {
         let url = "/to_buy/";

         const configs: IRequestConfig = getConfigs(
            "post",
            "application/json",
            url,
            options
         );

         configs.data = params

         axios(configs, resolve, reject);
      });
   }
}
