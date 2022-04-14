import CircleLoader from "react-spinners/CircleLoader";
import styled from "styled-components";

const Wrapper = styled.div`
  left: 690px;
  position: absolute;
  top: 515px;
`;

const LoadingIcon = () => (
  <Wrapper>
    <CircleLoader color="#66b19f" size="100px" />
  </Wrapper>
);

export default LoadingIcon;
