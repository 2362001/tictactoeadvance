import { BsPatchPlusFill } from "react-icons/bs";
import { IoRefresh } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import styles from "../globalcss/index.module.scss";
import Board from "./Board";
import ModelNewGame from "./ModelNewGame";
import { Fragment, useState } from "react";

const TicTac = () => {
  const [openModel, setOpenModel] = useState<boolean>(false);
  return (
    <Fragment>
      <div className={styles.tictactoe}>
        <div className={styles.tictacheader}>
          <div className={styles.headerbtn} onClick={() => setOpenModel(true)}>
            <BsPatchPlusFill />
            <span>New game</span>
          </div>
          <div className={styles.headerbtn}>
            <MdKeyboardDoubleArrowRight />
            <span>Quick Play</span>
          </div>
          <div className={styles.headerbtn}>
            <IoRefresh />
            <span>Refresh</span>
          </div>
        </div>
        <div className={styles.wrapperBoard}>
          <Board />
        </div>
      </div>
      <ModelNewGame
        isOpen={openModel}
        setIsModalOpen={() => setOpenModel(!openModel)}
      />
    </Fragment>
  );
};

export default TicTac;
