import React from "react";
import styled from "styled-components";

const StyledCount = styled.div`
  color: #fff;
  font-size: 60px;
  left: 885px;
  line-height: 1;
  position: absolute;
  text-align: center;
  text-shadow: 0px 0px 6px #734f00;
  top: 75px;
  width: 100px;
`;

type ActiveCountProps = {
  count: number;
};

const ActiveCount = ({ count }: ActiveCountProps) => {
  return <StyledCount>{count}</StyledCount>;
};

export default ActiveCount;
