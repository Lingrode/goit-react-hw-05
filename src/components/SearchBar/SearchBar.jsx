import style from "./SearchBar.module.css";

const SearchBar = ({ setSearchValue, value }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    setSearchValue(form.elements.search.value);
  };

  return (
    <div className={style.wrapper}>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          className={style.input}
          type="text"
          name="search"
          defaultValue={value}
          placeholder="Search movies..."
        />
        <button className={style.btn} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
