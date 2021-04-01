import "./style.scss";
import Noticia from "../New";
import PropTypes from "prop-types";
const List = ({ arrayNews }) => {
  return (
    <section className="wrapperNews">
      {arrayNews.map((noticia, index) => {
        return <Noticia noticia={noticia} key={index} />;
      })}
    </section>
  );
};
List.propTypes = {
  arrayNews: PropTypes.array.isRequired,
};
export default List;
