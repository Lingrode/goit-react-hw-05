import NoPoster from "../NoPoster/NoPoster";
import style from "./MovieCastItem.module.css";

const MovieCastItem = ({ name, imageUrl, character }) => {
  return (
    <div className={style.item}>
      {imageUrl ? (
        <img src={`https://image.tmdb.org/t/p/w200/${imageUrl}`} alt={name} />
      ) : (
        <NoPoster />
      )}

      <div className={style.content}>
        <h3>{name}</h3>
        <p>{character}</p>
      </div>
    </div>
  );
};

export default MovieCastItem;
