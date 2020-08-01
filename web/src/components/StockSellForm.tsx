import React from "react";
type Props = {
  onSell: () => void;
};
const StockSellForm = (props: Props) => {
  return (
    <div>
      <form>
        <p>Продать акцию</p>
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

export default StockSellForm;
