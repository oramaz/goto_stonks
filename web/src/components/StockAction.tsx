import React, {FormEvent, useState} from "react";
import "../assets/styles/Form.css";
type Props = {
   handleStockAction: (type: string, price: number, count: number) => void;
};
const StockAction = (props: Props) => {
   const [countValue, setCountValue] = useState<number | undefined>();

   const handleSubmit = (type: string, price: number | undefined, count: number | undefined) => {
      if(type && price && count && price > 0 && count > 0){
         props.handleStockAction(type, price, count)
         setCountValue(undefined)
      } else {
         alert("Введите нормальный формат данных")
      }
   }

   return (
      <div className="block block-sm">
         <form>
            <div className="text-center"  style={{marginBottom: "10px"}}>
              <span className="block-title">Рыночная цена</span>
            </div>
            <div className="form-content" style={{marginBottom: "10px"}}>
               <span style={{fontSize: "16px"}}>100</span>
               <span>готублей</span>
               <input
                  type="number"
                  min={0}
                  required
                  onChange={(e => setCountValue(Number(e.target.value)))}

               />
               <span>акций</span>
            </div>
            <div className="d-flex justify-content-center" style={{ justifyContent: "space-between" }}>
               <button type="submit"
                       onClick={() => handleSubmit("buy", 100, countValue)} className="btn btn-green btn-full-width" style={{ width: "49%" }}>Купить</button>
               <button type="submit"
                       onClick={() => handleSubmit("sell", 100, countValue)} className="btn btn-red btn-full-width" style={{ width: "49%" }}>Продать</button>
            </div>
         </form>
      </div>
   );
};

export default StockAction;
