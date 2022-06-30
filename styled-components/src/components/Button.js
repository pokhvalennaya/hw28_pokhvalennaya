import PropTypes from "prop-types";
import StyledPrimaryButton from "./StyledPrimaryButton";
import StyledSecondaryButton from "./StyledSecondaryButton";

const Button = ({ children, color, size, disabled }) => {
  if (color === "primary") {
    return (
      <StyledPrimaryButton color={color} size={size} disabled={disabled}>
        {children}
      </StyledPrimaryButton>
    );
  }
  if (color === "secondary") {
    return (
      <StyledSecondaryButton color={color} size={size} disabled={disabled}>
        {children}
      </StyledSecondaryButton>
    );
  }
  return;
};

Button.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary"]).isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  size: "medium",
};

export default Button;
