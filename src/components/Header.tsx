import { FunctionComponent } from "react";
import styles from "./Header.module.css";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  return (
    <header className={[styles.header, className].join(" ")}>
      <div className={styles.pitchplotWrapper}>
        <a className={styles.pitchplot}>PitchPlot</a>
      </div>
      <div className={styles.searchBarWrapper}>
        <div className={styles.searchBar}>
          <div className={styles.iconParent}>
            <img className={styles.icon} alt="" src="/icon.svg" />
            <div className={styles.searchKeywordsWrapper}>
              <a className={styles.searchKeywords}>Search Keywords...</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.headerInner}>
        <div className={styles.sidebarButtonParent}>
          <div className={styles.sidebarButton}>
            <img
              className={styles.homefilledIcon}
              alt=""
              src="/homefilled.svg"
            />
            <a className={styles.feed}>Feed</a>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.sidebarButtonWrapper}>
              <div className={styles.sidebarButton1}>
                <img
                  className={styles.humbleiconsbulb}
                  loading="lazy"
                  alt=""
                  src="/humbleiconsbulb.svg"
                />
                <a className={styles.yourPlots}>Your Plots</a>
              </div>
            </div>
            <div className={styles.sidebarButton2}>
              <img className={styles.icon1} alt="" src="/icon-1.svg" />
              <a className={styles.create}>Create</a>
            </div>
            <div className={styles.sidebarButton3}>
              <img className={styles.icon2} alt="" src="/icon-2.svg" />
              <a className={styles.accountSettings}>Account Settings</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
