import { Link } from "react-router-dom";
import NoPoster from "../NoPoster/NoPoster";
import { formatDate } from "../../helpers/formatDate";
import style from "./MovieItem.module.css";

const MovieItem = ({ id, title, imageUrl, about, release, location }) => {
  return (
    <div className={style.wrapper}>
      <Link
        to={`/movies/${id.toString()}`}
        state={location}
        className={style.link}
      >
        <div className={`${style.image} ${imageUrl ?? style.noImage}`}>
          {imageUrl === null ? (
            <NoPoster />
          ) : (
            <img
              src={imageUrl && `https://image.tmdb.org/t/p/w500${imageUrl}`}
              alt={title}
            />
          )}
        </div>
      </Link>
      <div className={style.content}>
        <Link
          to={`/movies/${id.toString()}`}
          state={location}
          className={style.link}
        >
          <h2 className={style.title}>{title}</h2>
        </Link>
        <p className={style.release}>{release && formatDate(release)}</p>
        <p className={style.about}>{about}</p>
      </div>
    </div>
  );
};

export default MovieItem;
