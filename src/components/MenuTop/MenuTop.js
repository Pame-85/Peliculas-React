import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import logo from "../../assets/popcorn.png";
import "./_MenuTop.sass";


const MenuTop = () => {
  return (
    <div className="menu-top">
      <div className="menu-top__logo">
        <img className="menu-top__img" src={logo} alt="popcorn" />
      </div>

      <Menu mode="horizontal">
        <Menu.Item key="1">
          <Link to="/project-movies">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/new-movies">Ultimos lanzamientos</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/popular">Populares</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/search">Buscar</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default MenuTop;