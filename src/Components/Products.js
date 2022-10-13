import React from "react";
import { Link } from "react-router-dom";
import { MenuList } from "./MenuList";
import MenuItem from "./MenuItem";
import "../Styles/Menu.css";

function Products() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Products</h1>
      <div className="productNav">
        <Link to="/Cashew">Cashew</Link>
        <Link to="/Spices">Spices</Link>
        <Link to="/Grains">Grains and Pulses</Link>
      </div>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
