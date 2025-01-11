import { Link } from "react-router-dom";
import style from "./GoBackBtn.module.css";

const GoBackBtn = ({ link }) => {
  return (
    <Link to={link} className={style.back}>
      Go back
    </Link>
  );
};

export default GoBackBtn;
