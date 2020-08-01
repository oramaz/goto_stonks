import React from "react";
import "../assets/styles/Form.css";
type Props = {
   handleStockAction: () => void;
};
const StockAction = (props: Props) => {
   return (
      <div className="block block-sm">
         <form
            onSubmit={() => {
               props.handleStockAction();
            }}
         >
            <p className="block-title text-center"
               style={{marginBottom: "10px"}}>Рыночная цену</p>
            <div className="form-content" style={{marginBottom: "10px"}}>
               <span style={{fontSize: "16px"}}>100</span>
               <span>готублей</span>
               <input
                  type="number"
                  min={0}
                  required
               />
               <span>акций</span>
            </div>
            <div className="d-flex justify-content-center" style={{ justifyContent: "space-between" }}>
               <button type="submit" className="btn btn-green btn-full-width" style={{ width: "49%" }}>Купить</button>
               <button type="submit" className="btn btn-red btn-full-width" style={{ width: "49%" }}>Продать</button>
            </div>
         </form>
      </div>
   );
};

export default StockAction;
