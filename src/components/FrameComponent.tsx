import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onGithubButtonBackgroundClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.welcomeMessage}>
        <b className={styles.pitchplot}>PitchPlot</b>
        <h1 className={styles.welcomeBack}>Welcome Back!</h1>
      </div>
      <div className={styles.emailInput}>
        <div className={styles.email}>Email</div>
        <div className={styles.emailField}>
          <div className={styles.emailFieldChild} />
          <div className={styles.usernamegmailcom}>username@gmail.com</div>
        </div>
      </div>
      <div className={styles.passwordInput}>
        <div className={styles.passwordFields}>
          <div className={styles.password}>Password</div>
          <div className={styles.passwordField}>
            <div className={styles.passwordFieldChild} />
            <div className={styles.password1}>Password</div>
            <div className={styles.passwordVisibility}>
              <img
                className={styles.clarityeyeHideLineIcon}
                loading="lazy"
                alt=""
                src="/clarityeyehideline.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.forgotPassword}>Forgot Password?</div>
      </div>
      <div className={styles.githubSignIn}>
        <div className={styles.githubSignInButton}>
          <div
            className={styles.githubButtonBackground}
            onClick={onGithubButtonBackgroundClick}
          />
          <b className={styles.signIn}>Sign in</b>
        </div>
      </div>
      <div className={styles.divider}>
        <div className={styles.orContinueWith}>or continue with</div>
      </div>
      <div className={styles.githubSignIn1}>
        <div className={styles.frameParent}>
          <img
            className={styles.frameItem}
            loading="lazy"
            alt=""
            src="/group-2253.svg"
          />
          <div className={styles.rectangleGroup}>
            <div className={styles.frameInner} />
            <img
              className={styles.akarIconsgithubFill}
              loading="lazy"
              alt=""
              src="/akariconsgithubfill.svg"
            />
          </div>
          <div className={styles.rectangleContainer}>
            <div className={styles.rectangleDiv} />
            <img
              className={styles.bifacebookIcon}
              loading="lazy"
              alt=""
              src="/bifacebook.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.registration}>
        <div className={styles.dontHaveAnAccountYetParent}>
          <div className={styles.dontHaveAn}>Don’t have an account yet?</div>
          <div className={styles.registerForFree}>Register for free</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
