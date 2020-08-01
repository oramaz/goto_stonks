import React from "react";
import Glass from "../components/Glass";
import StockBuyForm from "../components/StockBuyForm";
import StockSellForm from "../components/StockSellForm";



export const Terminal = () => {
  function buy() {}
  function sell() {}
  return (
    <div>
      <Glass />
      <StockBuyForm onBuy={sell} />
      <StockSellForm onSell={buy} />
    </div>
  );
};
