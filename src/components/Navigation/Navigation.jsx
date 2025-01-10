import { NavLink } from "react-router-dom";
import clsx from "clsx";
import style from "./Navigation.module.css";

const getNavLinkClass = (isActive) =>
  clsx(style.link, { [style.active]: isActive });

const Navigation = () => {
  return (
    <nav className={style.nav}>
      <NavLink to="/" className={({ isActive }) => getNavLinkClass(isActive)}>
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) => getNavLinkClass(isActive)}
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
