import "./style.scss";
import PropTypes from "prop-types";
function Subtitle({ subtitle }) {
  return <h2 className="subtitle">{subtitle}</h2>;
}
Subtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
};
export default Subtitle;
