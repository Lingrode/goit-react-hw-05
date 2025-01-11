import { useState } from "react";
import { formatDate } from "../../helpers/formatDate";
import style from "./MovieReviewItem.module.css";

const MovieReviewItem = ({ author, imageUrl, content, created }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReview = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.top}>
        {imageUrl === null ? (
          <div className={style.noImage}></div>
        ) : (
          <img
            src={`https://image.tmdb.org/t/p/w200/${imageUrl}`}
            alt={author}
          />
        )}
        <div className={style.header}>
          <h3>{author}</h3>
          <p>{formatDate(created)}</p>
        </div>
      </div>
      <p className={`${style.content} ${isExpanded ? style.expanded : ""}`}>
        {content}
      </p>
      <span onClick={toggleReview} className={style.expand}>
        {isExpanded ? "Show less" : "Read full"}
      </span>
    </div>
  );
};

export default MovieReviewItem;
