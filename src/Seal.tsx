import styled from "styled-components";

type SealProps = {
  visible?: boolean;
  img: number;
  onClick?: () => void;
  size?: number;
};

const spriteWidth = 960;

const SealContainer = styled.div<SealProps>`
  ${(props) => `
    background: url(${process.env.PUBLIC_URL}/images/seals.png);
    background-position: -${(props.size || 60) * (props.img - 1)}px 0;
    background-repeat: no-repeat;
    background-size: ${
      props.size
        ? `${(spriteWidth / 60) * props.size}px ${props.size}px`
        : "auto"
    };
    cursor: ${props.onClick ? "pointer" : "default"};
    display: inline-block;
    height: ${props.size || 60}px;
    opacity: ${props.visible ? 1 : 0};
    transition: .5s;
    width: ${props.size || 62}px;
  `}
`;

const Seal = (props: SealProps) => {
  const { img } = props;
  return <SealContainer {...props} img={img} />;
};

export default Seal;
