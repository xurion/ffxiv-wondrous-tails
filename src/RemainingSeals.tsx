import React from "react";
import styled from "styled-components";
import { Combination } from "./combinations";
import Cell from "./Cell";

const Wrapper = styled.div`
  left: 950px;
  position: absolute;
  top: 165px;
  width: 110px;
`;

type RemainingSealsProps = {
  activeCombo: Combination;
};

const order = [1, 9, 2, 10, 3, 11, 4, 12, 5, 13, 6, 14, 7, 15, 8, 16];

const RemainingSeals = ({ activeCombo }: RemainingSealsProps) => (
  <Wrapper>
    {order.map((index) => (
      <Cell img={index} visible={!activeCombo[index - 1]} size={50} />
    ))}
  </Wrapper>
);

export default RemainingSeals;
