import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import { StyledLoaderWrapper } from './style';

function StyledLoader(props) {
  return (
    <StyledLoaderWrapper>
      {props.message ? props.message : 'Loading...'}
      <Loader
        type={props.type ? props.type : 'TailSpin'}
        color="white"
        height={70}
        width={70}
      />
    </StyledLoaderWrapper>
  );
}

export default StyledLoader;
