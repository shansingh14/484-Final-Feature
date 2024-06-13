import { FunctionComponent, useCallback } from "react";
import Feed from "./Feed";
import styles from "./FeedContent.module.css";

export type FeedContentType = {
  className?: string;
};

const FeedContent: FunctionComponent<FeedContentType> = ({
  className = "",
}) => {
  const onMusicIconClick = useCallback(() => {
    // Please sync "Listen to "Hit Me Hard and Soft" Page" to the project
  }, []);

  const onMusicIcon2Click = useCallback(() => {
    // Please sync "Listen to "Like That" Page" to the project
  }, []);

  return (
    <div className={[styles.feedContent, className].join(" ")}>
      <div className={styles.feed}>
        <div className={styles.itemsParent}>
          <div className={styles.items}>
            <div className={styles.userNameWrapper}>
              <b className={styles.userName}>Bob Smith</b>
            </div>
            <div className={styles.itemsInner}>
              <div className={styles.frameChild} />
            </div>
            <div className={styles.monthDayYear}>May 27th, 2024</div>
          </div>
          <div className={styles.messagesWrapper}>
            <img
              className={styles.messagesIcon}
              loading="lazy"
              alt=""
              src="/messages.svg"
            />
          </div>
          <div className={styles.userWrapper}>
            <img
              className={styles.userIcon}
              loading="lazy"
              alt=""
              src="/user.svg"
            />
          </div>
          <div className={styles.heartWrapper}>
            <img
              className={styles.heartIcon}
              loading="lazy"
              alt=""
              src="/heart.svg"
            />
          </div>
          <img
            className={styles.calendarTickIcon}
            loading="lazy"
            alt=""
            src="/calendartick.svg"
          />
        </div>
        <div className={styles.message}>
          <div className={styles.songalbumplaylistevent}>
            Taylor Swift Listening Party
          </div>
          <p className={styles.description}>
            <span className={styles.welcomeToAll}>
              Welcome to all Swifties to an at home Eras Tour! We will be
              playing all of Taylor’s hits and deep cuts. Bring your favorite
              snack and best dance moves!
            </span>
            <span className={styles.blankLine}>&nbsp;</span>
            <span className={styles.comeToOrange}>
              Come to Orange Grove Park at 5:00 PM on May 29th
            </span>
            <span className={styles.blankLine1}>&nbsp;</span>
            <span className={styles.seeYouAll}>See you all there :)</span>
          </p>
        </div>
      </div>
      <Feed
        userName="Adi Go"
        monthDayYear="May 27th, 2024"
        songAlbumPlaylistEvent="Sexy to Someone"
        description="I am really enjoying this new single by Clario! Love the direction she is taking her music. Can not wait for the album"
        pictures="/pictures@2x.png"
      />
      <Feed
        userName="Hugh Ganem"
        monthDayYear="May 26th, 2024"
        songAlbumPlaylistEvent="Hit Me Hard and Soft "
        description="Billie’s new album is fire!!!!!!! 🔥 I LOOOOVE THE PRODUCTION! Birds of a Feather is my personal favorite. Even if you are not a big fan of her you should give this album a listen!"
        pictures="/pictures-1@2x.png"
        onMusicIcon1Click={onMusicIconClick}
      />
      <div className={styles.feed1}>
        <div className={styles.itemsGroup}>
          <div className={styles.items1}>
            <div className={styles.userNameContainer}>
              <b className={styles.userName1}>John Paul</b>
            </div>
            <div className={styles.itemsChild}>
              <div className={styles.frameItem} />
            </div>
            <div className={styles.monthDayYear1}>May 26th, 2024</div>
          </div>
          <div className={styles.messagesContainer}>
            <img className={styles.messagesIcon1} alt="" src="/messages.svg" />
          </div>
          <div className={styles.userContainer}>
            <img className={styles.userIcon1} alt="" src="/user.svg" />
          </div>
          <div className={styles.heartContainer}>
            <img className={styles.heartIcon1} alt="" src="/heart.svg" />
          </div>
          <img
            className={styles.calendarTickIcon1}
            alt=""
            src="/calendartick.svg"
          />
        </div>
        <div className={styles.message1}>
          <div className={styles.songalbumplaylistevent1}>
            Punk Rock House Show
          </div>
          <div className={styles.description1}>
            Come to 1234 Heheh St. at 7 PM on May 29th for a great show!
          </div>
        </div>
      </div>
      <div className={styles.feed2}>
        <div className={styles.itemsContainer}>
          <div className={styles.items2}>
            <div className={styles.userNameFrame}>
              <b className={styles.userName2}>Amy Love</b>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.frameInner} />
            </div>
            <div className={styles.monthDayYear2}>May 25th, 2024</div>
          </div>
          <img className={styles.messagesIcon2} alt="" src="/messages.svg" />
          <div className={styles.userFrame}>
            <img className={styles.userIcon2} alt="" src="/user.svg" />
          </div>
          <div className={styles.heartFrame}>
            <img className={styles.heartIcon2} alt="" src="/heart.svg" />
          </div>
          <div className={styles.musicWrapper}>
            <img
              className={styles.musicIcon}
              alt=""
              src="/music.svg"
              onClick={onMusicIcon2Click}
            />
          </div>
        </div>
        <div className={styles.messageParent}>
          <div className={styles.message2}>
            <b className={styles.songalbumplaylistevent2}>Like That</b>
            <p className={styles.description2}>
              <span className={styles.kendrickIsReally}>
                KENDRICK IS REALLY LIKE THAT!!!!
              </span>
              <span className={styles.blankLine2}>&nbsp;</span>
              <span className={styles.kDotJ}>{`K-Dot > J Cole + Drake`}</span>
            </p>
          </div>
          <img
            className={styles.picturesIcon}
            alt=""
            src="/pictures-2@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default FeedContent;
