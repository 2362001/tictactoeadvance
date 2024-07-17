import BoxItem from "./BoxItem";
import styles from "../globalcss/index.module.scss";
import { useStore } from "../store/store";
import React from "react";
import Strike from "./Strike";

interface IBoard {
  onBoxItemClick?: A;
  allValueBoxItem: A[];
  playerTurn?: string;
  strikeClass?: string;
}
const Board: React.FC<IBoard> = (props) => {
  const { onBoxItemClick, allValueBoxItem, playerTurn, strikeClass } = props;
  const sizeBox = useStore((state) => state.sizeBox);

  return (
    <div className={`${styles.board} board-${sizeBox}`}>
      {allValueBoxItem.map((_, index) => (
        <BoxItem
          handleClick={onBoxItemClick}
          index={index}
          key={index}
          playerTurn={playerTurn}
          value={allValueBoxItem[index]}
        />
      ))}
      <Strike strikeClass={strikeClass} />
    </div>
  );
};

export default Board;
