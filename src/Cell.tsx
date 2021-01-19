import React from "react";
import styled from "styled-components";

type CellProps = {
  active?: boolean;
  img: number;
  onClick: () => void;
};

const CellContainer = styled.div<CellProps>`
  ${(props) => `
    cursor: pointer;
    display: inline-block;
    height: 60px;
    width: 60px;

    img {
      cursor: pointer;
      opacity: ${props.active ? 1 : 0};
      transition: .5s;
    }
  `}
`;

const Cell = (props: CellProps) => {
  return (
    <CellContainer {...props}>
      <img src={`images/${props.img}.png`} alt="" />
    </CellContainer>
  );
};

export default Cell;
