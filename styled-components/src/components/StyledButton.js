import styled from "styled-components";

const StyledButton = styled.button`
  font-family: "Nunito Sans";
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  border-radius: 4px;
  border: 1px solid #605dec;
  cursor: pointer;
  width: ${({ size }) =>
    size === "small"
      ? "68px"
      : size === "medium"
      ? "76px"
      : size === "large"
      ? "81px"
      : ""};
  height: ${({ size }) =>
    size === "small"
      ? "40px"
      : size === "medium"
      ? "48px"
      : size === "large"
      ? "48px"
      : ""};
  margin: 10px;
`;

export default StyledButton;
