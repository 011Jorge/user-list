import styled from "styled-components";

export const Button = styled.button`
  width: 342px;
  height: 74px;
  background: ${(props) =>
    props.isBack ? "transparent" : "rgba(0, 0, 0, 0.8)"};
  border-radius: 14px;
  border: ${(props) => (props.isBack ? "1px solid #fff" : "none")};
  cursor: pointer;
  margin-top: 100px;
  text-decoration: none;

  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 28px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }

  img {
    transform: ${ props => props.isBack && "rotateY(180deg)"};
  }
`;
