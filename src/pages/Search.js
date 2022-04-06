import "../components/_FixStyles.sass";
import { useState, useEffect } from "react";
import MovieCatalogo from "../components/CatalogoMovies/CatalogoMovies";
import { URL_API, API_KEY } from "../utils/constants";
import { Input, Typography } from "antd";
import { SearchOutlined } from "@ant-design/icons";
const { Title } = Typography;

const Search = () => {
    const [currentSearch, setCurrentSearch] = useState("");
    const [url, setUrl] = useState("");
  
    useEffect(() => {
      setTimeout(() => {
        if (currentSearch !== "") {
          setUrl(`${URL_API}/search/movie${API_KEY}&languaje=es-ES&query=${currentSearch}`);
        }
      }, 2000);
    }, [currentSearch]);
  
    const handlerOnChange = (input) => setCurrentSearch(input.target.value);
  
    return (
      <div className="page">
        <Title level={2} className="__title">Busca una película</Title>
        <Input
          prefix={<SearchOutlined />}
          placeholder="Introduce el nombre"
          onChange={handlerOnChange}
          className="input-search"
          size="large"
        />
        <MovieCatalogo url={url} />
      </div>
    );
  };
  
  export default Search;