import StyledButton from "./StyledButton";
import styled from "styled-components";

const StyledPrimaryButton = styled(StyledButton)`
  color: ${({ disabled }) => (disabled ? "#7C8DB0" : "#fafafa")};
  background: ${({ disabled }) =>
    disabled ? "rgba(203, 212, 230, 0.3)" : "#605dec"};
  cursor: ${({ disabled }) => (disabled ? "default" : "")};
  border: ${({ disabled }) => (disabled ? "1px solid #7C8DB0" : "")};

  &:hover {
    background: ${({ disabled }) => (disabled ? "" : "#1513a0")};
    border: ${({ disabled }) => (disabled ? "" : "1px solid #1513a0")};
  }
`;

export default StyledPrimaryButton;
