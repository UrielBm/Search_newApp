import "./style.scss";
import PropTypes from "prop-types";
function Title({ title }) {
  return <h1 className="title">{title}</h1>;
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Title;
