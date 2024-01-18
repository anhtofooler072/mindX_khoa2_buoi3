import React from "react";
import { FaRegListAlt, FaTools} from "react-icons/fa";
import { FaBookBookmark } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { IoDiamondOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <div className="navContainer">
      <div className="navTab navDiv">
        <FaRegListAlt className="iconspacing"/>
        Danh mục sản phẩm
      </div>
      <div className="navTab navDiv">
        <TbTruckDelivery className="iconspacing"/>
        Giao lắp chuyên nghiệp
      </div>
      <div className="navTab navDiv">
        <FaTools className="iconspacing"/>
        Bảo hành nhanh gọn
      </div>
      <div className="navTab navDiv">
        <FaBookBookmark className="iconspacing"/>
        Tổng hợp khuyến mãi
      </div>
      <div className="navTab ">
        <IoDiamondOutline className="iconspacing"/>
        Nguyễn Kim luxury</div>
    </div>
  );
}
