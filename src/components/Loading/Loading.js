import {Spin} from 'antd';
import './_Loading.sass';

const Loading = () =>{
    return (
        <div className="loading">
            <Spin size="large"/>
        </div>
    )
}

export default Loading;