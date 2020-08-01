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
                <p className="block-title te">Купить акцию</p>
                <div className="form-content">
                    <input
                        type="text"
                        placeholder="Введите цену акции"
                        defaultValue="100"
                    />
                    <span>готублей</span>
                    <input
                        type="text"
                        placeholder="Введите кол-во акций для продажи"
                        defaultValue="1"
                        id="stock"
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
