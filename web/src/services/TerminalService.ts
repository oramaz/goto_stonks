import { axios, getConfigs, IRequestConfig, IRequestOptions } from "./Common";

export default class TerminalService {
   async getSells(params: {project: string},options: IRequestOptions = {}
   ): Promise<any> {
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
}
