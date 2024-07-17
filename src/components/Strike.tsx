import React from "react";
import styles from "../globalcss/index.module.scss";
interface IStrike {
  strikeClass?: string;
}
const Strike: React.FC<IStrike> = (props) => {
  const { strikeClass } = props;
  return <div className={`${styles.strike} ${strikeClass}`}></div>;
};

export default Strike;
