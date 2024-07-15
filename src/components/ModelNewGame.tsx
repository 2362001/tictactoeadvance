import { Modal } from "antd";
import React from "react";

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

  return (
    <div>
      <Modal
        title="Basic Modal"
        open={isOpen}
        onClose={handleCancel}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};

export default ModelNewGame;
