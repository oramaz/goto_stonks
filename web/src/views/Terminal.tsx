import React from "react";
import Glass from "../components/Glass";
import { Chart } from "../components/Chart";
import StockAction from "../components/StockAction";

export const Terminal = () => {
  const handleStockAction = () => { }
  return (
    <div>
      <Chart />
      <Glass />
      <StockAction handleStockAction={handleStockAction} />
    </div>
  );
};
