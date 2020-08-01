import React, {useEffect, useState} from "react";
import Glass from "../components/Glass";
import { Chart } from "../components/Chart";
import PriceAction from "../components/PriceAction";
import News from "../components/News";
import StockAction from "../components/StockAction";
import TerminalService from "../services/TerminalService";
import {GlassItem} from "../models/Terminal";

const service = new TerminalService();

export const Terminal = () => {
  const handleStockAction = () => {}

  const [sellsData, setSellsData] = useState<GlassItem[]>([])
  const [buysData, setBuysData] = useState<GlassItem[]>([])

   useEffect(() => {
      service.getSells({project: "ddddd"})
         .then((res) => setSellsData(res)).catch((e) => alert(e))

      service.getBuys({project: "ddddd"})
         .then((res) => setBuysData(res)).catch((e) => alert(e))
   }, [])


  return (
     <div>
        <div className="main-content">
           <div style={{height: "52vh"}}>
               <Chart />
           </div>
           <div className="row-sb" style={{height: "42vh", padding: "10px 30px"}}>
              <Glass sellsData={sellsData} buysData={buysData} />
              <div className="column">
                 <div className="mb-auto">
                    <PriceAction handleStockAction={handleStockAction}/>
                 </div>
                 <StockAction handleStockAction={handleStockAction}/>
              </div>
           </div>
        </div>
        <News />
     </div>
  )
};
