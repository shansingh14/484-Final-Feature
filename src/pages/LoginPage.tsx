import { FunctionComponent } from "react";
import FrameComponent from "../components/FrameComponent";
import styles from "./LoginPage.module.css";

const LoginPage: FunctionComponent = () => {
  return (
    <div className={styles.loginPage}>
      <img className={styles.containerIcon} alt="" src="/container@2x.png" />
      <FrameComponent />
    </div>
  );
};

export default LoginPage;
