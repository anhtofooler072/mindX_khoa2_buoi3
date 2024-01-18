import React from "react";
import { IoIosAddCircle } from "react-icons/io";

export default function ({ value }) {
  return (
    <div className="productCard">
      <div className="product_img">
        <img
          src={value.img}
          alt=""
        />
      </div>
      <div className="product_info">
        <div className="product_name">
          <p>{value.name}</p>
        </div>
        <div className="product_price">
          <p className="recentPrice">
            {Number(value.price.slice(0, -1)).toLocaleString()} đ
          </p>
          <p>
            <span className="strikethrough">
              {(
                Number(value.price.slice(0, -1)) +
                0.19 * Number(value.price.slice(0, -1))
              ).toLocaleString()}
            </span>
            <span className="discountPercent">{value.discount}%</span>
          </p>
        </div>
        <div className="product_config">
          <p>chipset: {value.chip}</p>
          <p>kích thước màn hình: {value.sizeScreen} inch</p>
          <p>RAM: {value.ram} GB</p>
          <p>bộ nhớ trong: {value.rom} GB</p>
        </div>
      </div>
        <div className="addtoCompare">
        <IoIosAddCircle className="iconspacing"/> Thêm vào so sánh</div>
    </div>
  );
}
