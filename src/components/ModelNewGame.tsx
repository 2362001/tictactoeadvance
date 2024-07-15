import { Input, Modal, Radio, RadioChangeEvent, Space } from "antd";
import React from "react";
import styles from "../globalcss/index.module.scss";

interface IModelNewGame {
  isOpen?: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
}

const ModelNewGame: React.FC<IModelNewGame> = (props) => {
  const { isOpen, setIsModalOpen } = props;

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
  };

  return (
    <div>
      <Modal
        title="Room Play Settings"
        open={isOpen}
        onClose={handleCancel}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className={styles.contentmodel}>
          <div>
            <span className={styles.roomtypes}>Room type(s)</span>
            <div className={styles.radioGroup}>
              <Radio.Group onChange={onChange}>
                <Space direction="vertical">
                  <Radio value={1}>Public</Radio>
                  <Radio value={2}>Private</Radio>
                </Space>
              </Radio.Group>
            </div>
          </div>
          <div>
            <span>Time Out (s)</span>
            <Input placeholder="Timeout..." />
          </div>
          <div>
            <span>Password</span>
            <Input placeholder="Password..." />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModelNewGame;
