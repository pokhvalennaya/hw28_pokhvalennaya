import PropTypes from "prop-types";
import Vector from "../images/Vector.svg";
import ButtonIcon from "./ButtonIcon";
import AlertStyled from "./AlertStyled";

const ALert = ({ children, color, onClose }) => {
  return (
    <AlertStyled color={color}>
      {children}
      <ButtonIcon onClick={onClose}>
        <img src={Vector} alt="button" />
      </ButtonIcon>
    </AlertStyled>
  );
};

AlertStyled.propTypes = {
  color: PropTypes.oneOf(["primary", "error", "warning"]).isRequired,
  onClick: PropTypes.func,
};
export default ALert;
