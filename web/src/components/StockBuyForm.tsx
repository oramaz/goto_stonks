import React from "react";
import "../assets/styles/Form.css";
type Props = {
  onBuy: () => void;
};
const StockBuyForm = (props: Props) => {
  return (
    <div>
      <form
        onSubmit={() => {
          props.onBuy();
        }}
      >
        <p>Купить акцию</p>
        <div className="form-content">
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
            id="stock"
          ></input>
          <span>акций</span>
        </div>
        <br></br>
        <button type="submit">Купить</button>
      </form>
    </div>
  );
};

export default StockBuyForm;
