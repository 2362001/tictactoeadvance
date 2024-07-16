import BoxItem from "./BoxItem";
import styles from "../globalcss/index.module.scss";
import { useStore } from "../store/store";

const Board = () => {
  const sizeBox = useStore((state) => state.sizeBox);
  const sizeCss = useStore((state) => state.sizeCss);
  console.log(sizeBox);
  
  return (
    <div className={`${styles.board} board-${sizeCss}`}>
      {Array(Number(sizeBox) ** 2)
        .fill(1)
        .map((_, index) => (
          <BoxItem key={index} />
        ))}
    </div>
  );
};

export default Board;
