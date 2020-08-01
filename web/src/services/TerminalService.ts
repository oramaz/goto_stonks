import { axios, getConfigs, IRequestConfig, IRequestOptions } from "./Common";

export default class TerminalService {
   // async sell(params: {x: string, y: string},options: IRequestOptions = {}
   // ): Promise<any> {
   //    return new Promise((resolve, reject) => {
   //       let url = "/sell";
   //
   //       const configs: IRequestConfig = getConfigs(
   //          "post",
   //          "multipart/form-data",
   //          url,
   //          options
   //       );
   //       const formData = new FormData();
   //
   //       formData.append("x", params.x);
   //       formData.append("spacePlan", params.spacePlan.toFixed(2));
   //       formData.append("countPlan", params.countPlan.toString());
   //       formData.append("avgPricePlan", params.avgPricePlan.toFixed(2));
   //       formData.append("addressNumbers", params.addressNumbers);
   //       formData.append("date", params.date);
   //
   //       configs.data = formData;
   //
   //       axios(configs, resolve, reject);
   //    });
   // }
}
