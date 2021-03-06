import useFetch from "../hooks/useFetch";
import ListMovies from "../components/ListMovies";
import { URL_API, API_KEY } from "../utils/constants";
import { Row, Col } from "antd";
import CarouselMovies from "../components/CarouselMovies";

const Home = () => {
  const urlNewMovies = `${URL_API}/movie/now_playing${API_KEY}&language=es-ES&page=1`;
  const popularNewMovies = `${URL_API}/movie/popular${API_KEY}&language=es-ES&page=1`;
  const recommendedNewMovies = `${URL_API}/movie/top_rated${API_KEY}&language=es-ES&page=1`;
  const newMoviesData = useFetch(urlNewMovies);
  const popularMoviesData = useFetch(popularNewMovies);
  const recommendedMoviesData = useFetch(recommendedNewMovies);

  return (
    <div>
      <CarouselMovies moviesData={newMoviesData} />
      <Row>
        <Col xs={24} sm={24} md={12}>
          <ListMovies
            title="Películas Populares"
            moviesData={popularMoviesData}
          />
        </Col>
        <Col xs={24} sm={24} md={12}>
          <ListMovies
            title="Películas Mejor Puntuadas"
            moviesData={recommendedMoviesData}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
