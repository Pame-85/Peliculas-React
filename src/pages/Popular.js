import { URL_API, API_KEY } from "../utils/constants";
import { Typography } from "antd";
import "../components/_FixStyles.sass";
import CatalogoMovies from "../components/CatalogoMovies/CatalogoMovies";
const { Title } = Typography;

const Populares = () => {
  const url = `${URL_API}/movie/popular${API_KEY}&languaje=es-ES`;
  return (
    <div className="page">
      <Title level={2} className="__title">
        Películas Populares
      </Title>
      <CatalogoMovies url={url} />
    </div>
  );
};

export default Populares;
