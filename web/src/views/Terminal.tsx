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
   const [project, setProject] = useState("ddddd")
   const [sellsData, setSellsData] = useState<GlassItem[]>([])
   const [buysData, setBuysData] = useState<GlassItem[]>([])
   const [dealsData, setDealsData] = useState<{price: number, time: string}[]>([])

   const getDealsData = () => {
      service.getDeals({project: project})
         .then((res) => setDealsData(res)).catch((e) => alert(e))
   }

   const getGlassData = () => {
      service.getSells({project: project})
         .then((res) => setSellsData(res)).catch((e) => alert(e))

      service.getBuys({project: project})
         .then((res) => setBuysData(res)).catch((e) => alert(e))
   }

   const loadData = () => {
      getGlassData()
      getDealsData()
   }

  const handleStockAction = (type: string, price: number, count: number) => {
     if(type === "sell") {
        service.sell({project: project, author: "abakunov", price: price, count: count}).then((res) => getGlassData())
     } else if (type === "buy") {
        service.buy({project: project, author: "abakunov", price: price, count: count}).then((res) => getGlassData())
     }
  }

   useEffect(() => {
      loadData()
   }, [])

   const interval = setInterval(function() {
      getDealsData()
   }, 600000);

  return (
     <div>
        <div className="main-content">
           <div className="block" style={{height: "52vh", marginBottom: "15px"}}>
               <Chart data={dealsData} project={project} />
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
