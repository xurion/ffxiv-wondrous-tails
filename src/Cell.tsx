import React from "react";
import styled from "styled-components";

type CellProps = {
  visible?: boolean;
  img: number;
  onClick?: () => void;
  size?: number;
};

const CellContainer = styled.div<CellProps>`
  ${(props) => `
    cursor: ${props.onClick ? "pointer" : "default"};
    display: inline-block;
    height: ${props.size || 60}px;
    width: ${props.size || 62}px;

    img {
      cursor: ${props.onClick ? "pointer" : "default"};
      opacity: ${props.visible ? 1 : 0};
      transition: .5s;
    }
  `}
`;

const Cell = (props: CellProps) => {
  const { img, size = 60 } = props;
  return (
    <CellContainer {...props}>
      <img
        src={`${process.env.PUBLIC_URL}/images/${img}.png`}
        alt=""
        width={size}
        height={size}
      />
    </CellContainer>
  );
};

export default Cell;
