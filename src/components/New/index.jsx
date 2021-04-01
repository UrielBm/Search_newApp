import "./style.scss";
import pictureNew from "../../assets/img/general_new.jpg";
import PropTypes from "prop-types";
import { SetFormatDate } from "./../../helpers/helpers";
const Noticia = ({ noticia }) => {
  const { title, description, url, image, source, publishedAt } = noticia;
  return (
    <article className="noticia">
      <div className="wrapperImg">
        <img
          src={image !== null ? image : pictureNew}
          className="img"
          alt="imagen de la noticia"
        />
      </div>
      <div className="wrapperInformation">
        <h3>{title}</h3>
        <div className="mostInformation">
          <p>Autor: {source.name !== null ? source.name : "Sin Autor"}</p>
          <p>Fecha: {SetFormatDate(publishedAt)}</p>
        </div>
        <p>{description !== "" ? description : "No hay descripción"}</p>
        <a href={url} className="link">
          Link de la noticia
        </a>
        <p>
          Fuente: <span className="source">{source.name}</span>
        </p>
      </div>
    </article>
  );
};
Noticia.propTypes = {
  noticia: PropTypes.object.isRequired,
};
export default Noticia;
