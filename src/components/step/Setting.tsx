import { Radio, Space } from "antd";
import styles from "../../globalcss/index.module.scss";

const Setting = () => {
    
  const boardOption = [
    { label: "3x3", value: "3" },
    { label: "4x4", value: "4" },
    { label: "5x5", value: "5" },
    { label: "6x6", value: "6" },
    { label: "7x7", value: "7" },
  ];

  return (
    <div className={styles.stepsetting}>
      <div className={styles.stepsettingboard}>
        <span className={styles.stepsettingboardlabel}>Board Size</span>
        <div className={styles.stepsettingboardcontent}>
          <Radio.Group>
            <Space direction="vertical">
              {boardOption.map((item) => (
                <Radio value={item.value}>{item.label}</Radio>
              ))}
            </Space>
          </Radio.Group>
          <span className={styles.changebutton}>Changed</span>
        </div>
      </div>
    </div>
  );
};

export default Setting;
