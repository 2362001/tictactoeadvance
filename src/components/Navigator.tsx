import { BsList } from "react-icons/bs";
import styles from "../globalcss/index.module.scss";

const Navigator = () => {
  return (
    <div className={styles.navigator}>
      <div>
        <BsList />
      </div>
      <div>Login / Sign up</div>
    </div>
  );
};

export default Navigator;
