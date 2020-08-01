import React, {useState} from "react";
import "../assets/styles/Form.css";
type Props = {
    handleStockAction: (type: string, price: number, count: number) => void;
};
const PriceAction = (props: Props) => {
    const [priceValue, setPriceValue] = useState<number | undefined>();
    const [countValue, setCountValue] = useState<number | undefined>();

    const handleSubmit = (type: string, price: number | undefined, count: number | undefined) => {
        if(type && price && count && price > 0 && count > 0){
           props.handleStockAction(type, price, count)
        } else {
            alert("Введите нормальный формат данных")
        }
    }

    return (
        <div className="block block-sm">
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="text-center" style={{marginBottom: "10px"}}>
              <span className="block-title">Заявка на цену</span>
                </div>
                <div className="form-content" style={{marginBottom: "10px"}}>
                    <input
                        type="number"
                        onChange={(e => setPriceValue(Number(e.target.value)))}
                        min={0}
                        required
                    />
                    <span>готублей</span>
                    <input
                        type="number"
                        onChange={(e => setCountValue(Number(e.target.value)))}
                        min={0}
                        required
                    />
                    <span>акций</span>
                </div>
                <div className="d-flex justify-content-center" style={{ justifyContent: "space-between" }}>
                    <button type="submit"
                            onClick={() => handleSubmit("buy", priceValue, countValue)} className="btn btn-green btn-full-width" style={{ width: "49%" }}>Купить</button>
                    <button type="submit"
                            onClick={() => handleSubmit("sell", priceValue, countValue)} className="btn btn-red btn-full-width" style={{ width: "49%" }}>Продать</button>
                </div>
            </form>
        </div>
    );
};

export default PriceAction;
