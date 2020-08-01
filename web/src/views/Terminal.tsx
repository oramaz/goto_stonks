import React, {FormEvent, useEffect, useState} from "react";
import Glass from "../components/Glass";
import { Chart } from "../components/Chart";
import PriceAction from "../components/PriceAction";
import News from "../components/News";
import StockAction from "../components/StockAction";
import TerminalService from "../services/TerminalService";
import {GlassItem} from "../models/Terminal";

const service = new TerminalService();

export const Terminal = () => {

   const getGlassData = () => {
      service.getSells({project: "ddddd"})
         .then((res) => setSellsData(res)).catch((e) => alert(e))

      service.getBuys({project: "ddddd"})
         .then((res) => setBuysData(res)).catch((e) => alert(e))
   }

  const handleStockAction = (type: string, price: number, count: number) => {
     console.log(type)
     if(type === "sell") {
        console.log(type, price, count)
        service.sell({project: "ddddd", author: "abakunov", price: price, count: count}).then((res) => getGlassData())
     } else if (type === "buy") {
        service.buy({project: "ddddd", author: "abakunov", price: price, count: count}).then((res) => getGlassData())
     }
  }

  const [sellsData, setSellsData] = useState<GlassItem[]>([])
  const [buysData, setBuysData] = useState<GlassItem[]>([])

   useEffect(() => {
      getGlassData()
   }, [])


  return (
     <div>
        <div className="main-content">
           <div className="block" style={{height: "52vh", marginBottom: "15px"}}>
               <Chart />
           </div>
           <div className="row-sb" style={{height: "42vh"}}>
              <Glass sellsData={sellsData} buysData={buysData} />
              <div className="column">
                 <div className="mb-auto">
                    <PriceAction handleStockAction={handleStockAction}/>
                 </div>
                 {/*<StockAction handleStockAction={handleStockAction}/>*/}
              </div>
           </div>
        </div>
        <News />
     </div>
  )
};
