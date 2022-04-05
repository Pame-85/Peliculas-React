import { URL_API, API_KEY } from "../utils/constants";
import { Typography } from "antd";
import CatalogoMovies from "../components/CatalogoMovies/CatalogoMovies";
import "../components/_FixStyles.sass"

const { Title } = Typography;

const NewMovies = () => {
  const url = `${URL_API}/movie/now_playing${API_KEY}&languaje=es-ES`;
  return (
    <div className="page">
      <Title level={2} className="__title">Últimos Lanzamientos</Title>
      <CatalogoMovies url={url} />
    </div>
  );
};

export default NewMovies;