import React from "react";
import Glass from "../components/Glass";
import { Chart } from "../components/Chart";
import StockAction from "../components/StockAction";

export const Terminal = () => {
  const handleStockAction = () => { }
  return (
     <div>
        <div className="main-content">
           <Chart />
           <div className="row-sb">
              <Glass />
              <div className="column">
                 <StockAction handleStockAction={handleStockAction}/>
              </div>
           </div>
        </div>
        <News />
     </div>
  )
};
