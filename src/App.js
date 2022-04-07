import React from "react";
import { Layout } from "antd";
import "./App.sass";
import { BrowserRouter, Routes, Route } from "react-router-dom";


//pages
import Home from "./pages/Home";
import NewMovies from "./pages/NewMovies";
import Popular from "./pages/Popular";
import Search from "./pages/Search";
import Movie from "./pages/Movie";
import Error404 from "./pages/Error";

//components
import MenuTop from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  const { Header, Content } = Layout;
  return (
    <BrowserRouter>
      <Header style={{ zIndex: "1"}}>
        <MenuTop />
      </Header>
      <Content>
        <Routes className="main-container">
          <Route path="/">
          <Route index element={<Home/>}/>
          <Route path="/project-movies" element={<Home />} />
          <Route path="/new-movies" element={<NewMovies />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/search" element={<Search />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="*" element={<Error404 />}/>
          </Route>
          </Routes>
      </Content>
      <Footer style={{ zIndex: "1" }} />
    </BrowserRouter>
  );
}
export default App;
