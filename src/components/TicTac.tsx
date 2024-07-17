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
import overgame from "../sounds/game_over.wav";

const TicTac = () => {
  const [openModel, setOpenModel] = useState<boolean>(false);
  const sizeBox = useStore((state) => state.sizeBox);
  const [allValueBoxItem, setAllValueBoxItem] = useState<string[]>(
    Array(Number(sizeBox) ** 2).fill(null)
  );
  const [strikeClass, setStrikeClass] = useState();
  const PLAYER_X = "X";
  const PLAYER_O = "O";
  const [playerTurn, setPlayerTurn] = useState<string>(PLAYER_X);
  const updateSearchRoom = useStore((state) => state.setSizeBox);
  const clickSound = new Audio(clickSoundx);
  const overgame1 = new Audio(overgame);
  clickSound.volume = 0.5;
  overgame1.volume = 0.8;

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

  useEffect(() => {
    setAllValueBoxItem(Array(Number(sizeBox) ** 2).fill(null));
  }, [sizeBox]);

  const createSubArrays = (arr: number[], subArraySize: number) => {
    const subArrays = [];
    const subArraysCross = [];
    const upSubArraySize = subArraySize + 1;
    const downSubArraySize = subArraySize - 1;

    for (let i = 0; i < arr.length; i += subArraySize) {
      subArrays.push(arr.slice(i, i + subArraySize));
    }

    for (let i = 0; i < subArraySize; i++) {
      const array = [];
      for (let j = i; j < arr.length; j += subArraySize) {
        array.push(arr[j]);
      }
      subArrays.push(array);
    }

    for (let i = 0; i < arr.length; i += upSubArraySize) {
      subArraysCross.push(arr[i]);
    }

    for (let i = downSubArraySize; i < arr.length; i += downSubArraySize) {
      if (i !== arr.length - 1) {
        subArraysCross.push(arr[i]);
      }
    }

    if (subArraysCross.length > 0) {
      const halfLength = Math.floor(subArraysCross.length / 2);
      subArrays.push(subArraysCross.slice(0, halfLength));
      subArrays.push(subArraysCross.slice(halfLength));
    }
    return subArrays;
  };

  const checkWinner = (board: string[]): string | null => {
    const crtArray = [];
    for (let index = 0; index < Number(sizeBox) ** 2; index++) {
      crtArray.push(index);
    }
    const winningCombinations = createSubArrays(crtArray, Number(sizeBox));
    console.log(winningCombinations);
    
    for (const [a, b, c] of winningCombinations) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const handleBoxItemClick = (index: number) => {
    if (allValueBoxItem[index] !== null) {
      return false;
    }

    const newAllValueBoxItem = [...allValueBoxItem];
    newAllValueBoxItem[index] = playerTurn;
    setAllValueBoxItem(newAllValueBoxItem);

    const winner = checkWinner(newAllValueBoxItem);
    if (winner) {
      overgame1.play();
      console.log("thành công");
      // setAllValueBoxItem(Array(Number(sizeBox) ** 2).fill(null));
      return;
    }

    setPlayerTurn(playerTurn === PLAYER_X ? PLAYER_O : PLAYER_X);
  };

  useEffect(() => {
    if (allValueBoxItem.some((box) => box !== null)) {
      clickSound.play();
    }
  }, [allValueBoxItem, clickSound]);

  useEffect(() => {
    if (checkWinner(allValueBoxItem)) {
      overgame1.play();
    }
  }, [allValueBoxItem, overgame1]);

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
              strikeClass={strikeClass}
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
