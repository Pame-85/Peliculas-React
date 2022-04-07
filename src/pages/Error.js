import { Typography } from "antd";
import '../components/_FixStyles.sass';
import error404Img from '../assets/error 404.png';

const { Title } = Typography;

const Error404 = () => {
  return (
    <div className="page error-page">
      
      <figure>
        <img src={error404Img} alt="People filimg a movie" />
      </figure>

    </div>
  );
}

export default Error404;