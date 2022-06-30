import StyledButton from "./StyledButton";
import styled from "styled-components";

const StyledSecondaryButton = styled(StyledButton)`
  color: ${({ disabled }) => (disabled ? "#7C8DB0" : "#605dec")};
  cursor: ${({ disabled }) => (disabled ? "default" : "")};
  border: ${({ disabled }) => (disabled ? "1px solid #7C8DB0" : "")};
  background: transparent;
  &:hover {
    background: ${({ disabled }) => (disabled ? "" : "#E9E8FC")};
    border: ${({ disabled }) => (disabled ? "" : "1px solid #605DEC")};
  }
`;

export default StyledSecondaryButton;
