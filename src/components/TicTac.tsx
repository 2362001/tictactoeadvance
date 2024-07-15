import { BsPatchPlusFill } from "react-icons/bs";
import { IoRefresh } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import styles from "../globalcss/index.module.scss";
import Board from "./Board";

const TicTac = () => {
  return (
    <div className={styles.tictactoe}>
      <div className={styles.tictacheader}>
        <div>
          <BsPatchPlusFill />
          <span>New game</span>
        </div>
        <div>
          <MdKeyboardDoubleArrowRight />
          <span>Quick Play</span>
        </div>
        <div>
          <IoRefresh />
          <span>Refresh</span>
        </div>
      </div>
      <Board />
    </div>
  );
};

export default TicTac;
