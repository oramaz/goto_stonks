import React from "react";
import "../assets/styles/Form.css";
type Props = {
    handleStockAction: () => void;
};
const PriceAction = (props: Props) => {
    return (
        <div className="block block-sm">
            <form
                onSubmit={() => {
                    props.handleStockAction();
                }}
            >
                <div className="text-center" style={{marginBottom: "10px"}}>
              <span className="block-title">Заявка на цену</span>
                </div>
                <div className="form-content" style={{marginBottom: "10px"}}>
                    <input
                        type="number"
                        min={0}
                        required
                    />
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

export default PriceAction;
