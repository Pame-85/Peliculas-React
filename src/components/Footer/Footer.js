import "./_Footer.sass";
import { Layout } from "antd";
import {
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from '@ant-design/icons';
import { Divider } from 'antd';


const Footer = () => {
  const { Footer } = Layout;

  return (

  <Footer className="footer">
    <Divider />
    <p> By Pamela Fumagalli </p>
    <div className="contact">
    <a href="https://github.com/Pame-85" target="_blanck" className= "gitHub">
     
      <GithubOutlined />
    </a>
    <a href="https://www.linkedin.com/in/pamela-fumagalli-53335825/" target="_blanck" className="linkedIn">
      
      <LinkedinOutlined />
    </a>
    <a href="https://twitter.com/PamelaFumagalli" target="_blanck" className= "twiter">
        <TwitterOutlined/>
    </a>

    </div>
  </Footer>
  );
};

export default Footer;