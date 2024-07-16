import { Input, Tabs, TabsProps } from "antd";
import { Fragment, useEffect, useState } from "react";
import { BsPatchPlusFill } from "react-icons/bs";
import { IoRefresh } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import styles from "../globalcss/index.module.scss";
import { useStore } from "../store/store";
import Board from "./Board";
import ModelNewGame from "./ModelNewGame";
import Chat from "./step/Chat";
import Step from "./step/Step";
import Setting from "./step/Setting";
import clickSoundx from "../sounds/click.wav";

const TicTac = () => {
  const [openModel, setOpenModel] = useState<boolean>(false);
  const sizeBox = useStore((state) => state.sizeBox);
  const [allValueBoxItem, setAllValueBoxItem] = useState<A[]>(
    Array(Number(sizeBox) ** 2).fill(null)
  );
  const PLAYER_X = "X";
  const PLAYER_O = "O";
  const [playerTurn, setPlayerTurn] = useState<string>(PLAYER_X);
  const updateSearchRoom = useStore((state) => state.setSizeBox);
  const clickSound = new Audio(clickSoundx);
  clickSound.volume = 0.5;

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Chat",
      children: <Chat />,
    },
    {
      key: "2",
      label: "Steps",
      children: <Step />,
    },
    {
      key: "3",
      label: "Setting",
      children: <Setting />,
    },
  ];

  const handleBoxItemClick = (index: number) => {
    const newAllValueBoxItem = [...allValueBoxItem];
    newAllValueBoxItem[index] = playerTurn;
    setAllValueBoxItem(newAllValueBoxItem);
    console.log(allValueBoxItem[index]);

    if (allValueBoxItem[index] !== null) {
      return false;
    }

    if (playerTurn === PLAYER_X) {
      setPlayerTurn(PLAYER_O);
    } else {
      setPlayerTurn(PLAYER_X);
    }
  };

  useEffect(() => {
    if (allValueBoxItem.some((box) => box !== null)) {
      clickSound.play();
    }
  }, [allValueBoxItem, clickSound]);

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
        <div className={styles.searchRoom}>
          <div className={styles.searchbtn}>
            <span>Search Room</span>
          </div>
          <Input
            className={styles.inputsearch}
            placeholder="Enter the room"
            variant="filled"
            onChange={(e) => updateSearchRoom(e.target.value)}
          />
        </div>
        <div className={styles.wrapperBoard}>
          <div className={styles.roominfo}>
            <span>Room Order : #1</span>
            <span>Room Id : 93021943294023940329432</span>
            <span>Room Password : Sena đẹp trai</span>
          </div>
          <div className={styles.allreadytext}>
            <span className={styles.readytext}>Ready</span>
            <span className={styles.leaveroom}>Leave Room</span>
          </div>
          <div className={styles.contentboard}>
            <Board
              onBoxItemClick={handleBoxItemClick}
              allValueBoxItem={allValueBoxItem}
              playerTurn={playerTurn}
            />
            <div className={styles.userinfo}>
              <div className={styles.ownuser}>1</div>
              <div className={styles.guestuser}>2</div>
            </div>
          </div>
          <div className={styles.tabss}>
            <Tabs defaultActiveKey="1" items={items} />
          </div>
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
