import styled from "styled-components";

const AlertStyled = styled.div`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;

  margin: auto;
  width: 1440px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: ${({ color }) =>
    color === "primary"
      ? "#605DEC"
      : color === "error"
      ? "#EB5757"
      : color === "warning"
      ? "#FFD12F"
      : ""};
  color: ${({ color }) =>
    color === "primary"
      ? "#F6F6FE"
      : color === "error"
      ? "#FAFAFA"
      : color === "warning"
      ? "#1513A0"
      : ""};
`;

export default AlertStyled;
