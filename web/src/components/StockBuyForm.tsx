import React from "react";

type Props = {
  onBuy: () => void;
};
const StockBuyForm = (props: Props) => {
  return (
    <div>
      <form>
        <p>Купить акцию</p>
        <input
          type="text"
          placeholder="Введите цену акции"
          defaultValue="100"
        ></input>
        <span>готублей</span>
        <input
          type="text"
          placeholder="Введите кол-во акций для продажи"
          defaultValue="1"
        ></input>
        <span>акций</span>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StockBuyForm;
