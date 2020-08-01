import React from "react";
import Glass from "../components/Glass";
import { Chart } from "../components/Chart";
import PriceAction from "../components/PriceAction";
import News from "../components/News";
import StockAction from "../components/StockAction";

export const Terminal = () => {
  const handleStockAction = () => {console.log("kirill kukold") }
  return (
     <div>
        <div className="main-content">
           <div style={{height: "52vh"}}>
               <Chart />
           </div>
           <div className="row-sb" style={{height: "42vh"}}>
              <Glass />
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
