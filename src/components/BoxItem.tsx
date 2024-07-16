import React from "react";
import styles from "../globalcss/index.module.scss";

interface IBoxItem {
  index?: number;
  value?: number;
  playerTurn?: string;
  handleClick?: A;
}
const BoxItem: React.FC<IBoxItem> = (props) => {
  const { value, playerTurn, handleClick, index } = props;
  const hoverClass = `${playerTurn}-hover`;
  return (
    <div
      onClick={() => handleClick(index)}
      className={`${styles.boxitem} ${hoverClass}`}
    >
      {value}
    </div>
  );
};

export default BoxItem;
