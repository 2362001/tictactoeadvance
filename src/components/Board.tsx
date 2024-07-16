import BoxItem from "./BoxItem";
import styles from "../globalcss/index.module.scss";

const Board = () => {
  return (
    <div className={styles.board}>
      {Array(36)
        .fill(1).map((_, index) => (
          <BoxItem key={index} />
        ))}
    </div>
  );
};

export default Board;
