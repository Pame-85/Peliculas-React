import React from "react";
import { Layout } from "antd";
import "./App.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/Home";
import NewMovies from "./pages/NewMovies";
import Popular from "./pages/Popular";
import Search from "./pages/Search";

//components
import MenuTop from "./components/MenuTop";
import Footer from "./components/Footer"



function App() {
  const { Header, Content } = Layout;
  return (
    <BrowserRouter>
    <Header style={{zIndex: '1'}}>
      <MenuTop/>
      </Header>
      <Content>
      <Routes>
        <Route path="/project-movies" element={<Home />} />
        <Route path="/new-movies" element={<NewMovies />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      </Content>
      <Footer style={{zIndex: '1'}}/>
    </BrowserRouter>
  );
}
export default App;
