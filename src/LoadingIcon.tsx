import React from "react";
import CircleLoader from "react-spinners/CircleLoader";
import styled from "styled-components";

const Wrapper = styled.div`
  left: 690px;
  position: absolute;
  top: 515px;
`;

const LoadingIcon = () => (
  <Wrapper>
    <CircleLoader color="#66b19f" size="100" />
  </Wrapper>
);

export default LoadingIcon;
