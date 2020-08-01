import React from "react";
import Glass from "../components/Glass";
import StockBuyForm from "../components/StockBuyForm";
import StockSellForm from "../components/StockSellForm";
import { Chart } from "../components/Chart";
import News from "../components/News";

export const Terminal = () => {
  function buy() {}
  function sell() {}
  return (
    <div>
      <div className="main-content">
        <Chart />
        <div className="row-sb">
          <Glass />
           <div className="column">
            <StockBuyForm onBuy={sell} />
            <StockSellForm onSell={buy} />
          </div>
        </div>
      </div>
      <News />
    </div>
  );
};
