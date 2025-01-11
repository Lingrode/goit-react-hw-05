import Navigation from "../Navigation/Navigation";
import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
