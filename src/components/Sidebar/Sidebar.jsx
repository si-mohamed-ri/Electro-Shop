import React from "react";
import "./Sidebar.scss";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Electro-Shop</span>
        </Link>
      </div>
      <hr />
      <div className="center">
       <div className="items">
       <p>Main</p>
       <Link to="/" style={{textDecoration: "none", color: "#111"}}>
        <div className="item">
          <img src="https://cdn-icons-png.flaticon.com/512/1828/1828673.png" alt="" />
          <span>Dashboard</span>
        </div>
        </Link>
        <p>Shop By Department</p>
        <Link to="/phone" style={{textDecoration: "none", color: "#111"}}>
        <div className="item">
          <img src="https://cdn-icons-png.flaticon.com/512/2983/2983780.png" alt="" />
          <span>Phone</span>
        </div>
        </Link>
        <div className="item">
          <img src="https://cdn-icons-png.flaticon.com/512/3591/3591933.png" alt="" />
          <span>Headphones</span>
        </div>
        <div className="item">
          <img src="https://cdn-icons-png.flaticon.com/512/3616/3616437.png" alt="" />
          <span>Laptops</span>
        </div>
        <div className="item">
          <img src="https://cdn-icons-png.flaticon.com/128/4439/4439048.png" alt="" />
          <span>Smart watch</span>
        </div>
       </div>
      </div>
    </div>
  );
}

export default Sidebar;
