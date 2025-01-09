const MovieItem = ({ title, imageUrl }) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500${imageUrl}`} alt={title} />
    </div>
  );
};

export default MovieItem;
