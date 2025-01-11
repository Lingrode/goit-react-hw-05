import style from "./NoPoster.module.css";

const NoPoster = ({ children }) => {
  return <div className={style.wrapper}> No image 😕</div>;
};

export default NoPoster;
