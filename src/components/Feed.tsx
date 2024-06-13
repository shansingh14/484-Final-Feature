import { FunctionComponent } from "react";
import styles from "./Feed.module.css";

export type FeedType = {
  className?: string;
  userName?: string;
  monthDayYear?: string;
  songAlbumPlaylistEvent?: string;
  description?: string;
  pictures?: string;

  /** Action props */
  onMusicIcon1Click?: () => void;
};

const Feed: FunctionComponent<FeedType> = ({
  className = "",
  userName,
  monthDayYear,
  songAlbumPlaylistEvent,
  description,
  pictures,
  onMusicIcon1Click,
}) => {
  return (
    <div className={[styles.feed, className].join(" ")}>
      <div className={styles.itemsParent}>
        <div className={styles.items}>
          <div className={styles.userNameWrapper}>
            <b className={styles.userName}>{userName}</b>
          </div>
          <div className={styles.itemsInner}>
            <div className={styles.frameChild} />
          </div>
          <div className={styles.monthDayYear}>{monthDayYear}</div>
        </div>
        <img className={styles.messagesIcon} alt="" src="/messages.svg" />
        <div className={styles.userWrapper}>
          <img className={styles.userIcon} alt="" src="/user.svg" />
        </div>
        <div className={styles.heartWrapper}>
          <img className={styles.heartIcon} alt="" src="/heart.svg" />
        </div>
        <div className={styles.musicWrapper}>
          <img
            className={styles.musicIcon}
            loading="lazy"
            alt=""
            src="/music.svg"
            onClick={onMusicIcon1Click}
          />
        </div>
      </div>
      <div className={styles.messageParent}>
        <div className={styles.message}>
          <div className={styles.songalbumplaylistevent}>
            {songAlbumPlaylistEvent}
          </div>
          <p className={styles.description}>{description}</p>
        </div>
        <img
          className={styles.picturesIcon}
          loading="lazy"
          alt=""
          src={pictures}
        />
      </div>
    </div>
  );
};

export default Feed;
