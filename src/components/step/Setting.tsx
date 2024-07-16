import { Radio, RadioChangeEvent, Space } from "antd";
import { useState } from "react";
import styles from "../../globalcss/index.module.scss";
import { useStore } from "../../store/store";

const Setting = () => {
  const [boardSize, setBoardSize] = useState(3);
  const updateSearchRoom = useStore((state) => state.setSizeBox);

  const boardOption = [
    { label: "3x3", value: "3" },
    { label: "6x6", value: "6" },
    { label: "9x9", value: "9" },
  ];

  const onChange = (e: RadioChangeEvent) => {
    setBoardSize(e.target.value);
  };

  const handleChanged = () => {
    updateSearchRoom(boardSize);
  };

  return (
    <div className={styles.stepsetting}>
      <div className={styles.stepsettingboard}>
        <span className={styles.stepsettingboardlabel}>Board Size</span>
        <div className={styles.stepsettingboardcontent}>
          <Radio.Group onChange={onChange} value={boardSize}>
            <Space direction="vertical">
              {boardOption.map((item) => (
                <Radio value={item.value}>{item.label}</Radio>
              ))}
            </Space>
          </Radio.Group>
          <span className={styles.changebutton} onClick={handleChanged}>
            Changed
          </span>
        </div>
      </div>
    </div>
  );
};

export default Setting;
