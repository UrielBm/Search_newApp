import Subtitle from "../Subtitle";
import "./style.scss";
import UseSelect from "../../hooks/useSelect";
import PropTypes from "prop-types";
const Form = ({ SetSolicitudCategoria }) => {
  const categories = [
    { value: "breaking-news", text: "Corte Informativo" },
    { value: "world", text: "Mundiales" },
    { value: "nation", text: "Nacionales" },
    { value: "business", text: "Negocios" },
    { value: "science", text: "Ciencia" },
    { value: "sports", text: "Deportes" },
    { value: "entertainment", text: "Entretenimiento" },
    { value: "health", text: "Salud" },
    { value: "technology", text: "Tecnología" },
  ];
  const [categoria, SelectNews] = UseSelect("breaking-news", categories);
  const handleSubmit = (e) => {
    e.preventDefault();
    SetSolicitudCategoria(categoria);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <Subtitle subtitle="Encuentra Noticias por categoria" />
      <div className="wrappersection">
        <div className="wrapperSelect">
          <SelectNews />
        </div>
        <div className="wrapperButton">
          <button type="submit" className="button">
            Buscar
          </button>
        </div>
      </div>
    </form>
  );
};
Form.propTypes = {
  SetSolicitudCategoria: PropTypes.func.isRequired,
};
export default Form;
