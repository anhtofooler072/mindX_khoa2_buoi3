import React from "react";
import Productitems from "./Productitems";

export default function Product_container({ hotTrend }) {
  return ([
    <h3 style={
        {
        marginBottom: "10px",
        }
    }
    >Top 10 điện thoại được yêu thích nhất</h3>,
    <div className="productContainer">
        
      {hotTrend.map((value) => {
        return <Productitems value={value} />;
      })}
    </div>

  ]
  );
}
