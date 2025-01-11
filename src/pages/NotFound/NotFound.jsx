import GoBackBtn from "../../components/GoBackBtn/GoBackBtn";
import style from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={style.wrapper}>
      <h3>Page Not Found 😕</h3>
      <GoBackBtn link={"/"} />
    </div>
  );
};

export default NotFound;
