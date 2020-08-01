import React from "react";
import {GlassItem} from "../models/Terminal";
import "../assets/styles/Glass.css"

type Props = {
   buysData: GlassItem[]
   sellsData: GlassItem[]
}
export default (props: Props) => {
   const { buysData, sellsData } = props;

  return (
     <div className="block block-sm " style={{maxWidth: "200px"}}>
        <div className="d-flex" style={{justifyContent: "space-between", marginBottom: "10px"}}>
           <div className="glass-column-green my-auto"/>
           <span className="block-title">Стакан</span>
           <div className="glass-column-red my-auto"/>
        </div>
        <div>
           <div className="d-flex glass-row">
              <div style={{width: "75px"}}>
                 {buysData.map((x,i) => {
                    return (
                        <div key={i} style={{marginBottom: "5px"}}>{x.price.toLocaleString()} гт. x {x.count}</div>
                    )
                 })}
              </div>
              <div style={{borderRight: "1px solid rgb(225 225 225)"}}></div>
              <div style={{width: "75px"}}>
                 {sellsData.map((x, i) => {
                    return (
                       <div key={i} style={{textAlign: "right", marginBottom: "5px"}}>{x.price.toLocaleString()} гт.  x {x.count}</div>
                    )
                 })}
              </div>
           </div>

        </div>
     </div>
  );
};
