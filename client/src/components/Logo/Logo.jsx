import React from "react";
import styled from "styled-components";

const UUPointText = styled.div`
  text-align: center;
  font-size: 2rem;
  cursor: pointer;

  span {
    transition: color 0.3s ease, font-weight 0.3s ease;
    font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
  }

  span:first-child {
    color: ${({ hovered }) => (hovered ? "#333333" : "#ff7f00")};
    font-weight: ${({ hovered }) => (hovered ? "normal" : "bold")};
  }

  span:last-child {
    color: ${({ hovered }) => (hovered ? "#ff7f00" : "#333333")};
    font-weight: ${({ hovered }) => (hovered ? "bold" : "normal")};
  }

  &:hover {
    span:first-child {
      color: #333333;
      font-weight: normal;
    }
    span:last-child {
      color: #ff7f00;
      font-weight: bold;
    }
  }

  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Logo = () => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <UUPointText
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      hovered={hovered}
    >
      <span bold={true}>UU</span>
      <span bold={false}>Point</span>
    </UUPointText>
  );
};

export default Logo;
