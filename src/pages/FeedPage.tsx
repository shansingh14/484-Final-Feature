import { FunctionComponent } from "react";
import Header from "../components/Header";
import FeedContent from "../components/FeedContent";
import styles from "./FeedPage.module.css";

const FeedPage: FunctionComponent = () => {
  return (
    <div className={styles.feedPage}>
      <Header />
      <main className={styles.howItWorksContent}>
        <FeedContent />
        <div className={styles.sideBar}>
          <div className={styles.content}>
            <div className={styles.profile}>
              <div className={styles.profileChild} />
              <div className={styles.userContent}>
                <div className={styles.studentName}>
                  <a className={styles.adigo}>Adigo</a>
                  <div className={styles.filter}>
                    <b className={styles.student}>Online</b>
                  </div>
                </div>
                <div className={styles.friends13}>Friends: 13</div>
              </div>
            </div>
            <div className={styles.profile1}>
              <div className={styles.profileItem} />
              <div className={styles.userContent1}>
                <div className={styles.studentName1}>
                  <b className={styles.hughy}>Hughy</b>
                  <div className={styles.filter1}>
                    <b className={styles.student1}>Offline</b>
                  </div>
                </div>
                <div className={styles.friends131}>Friends: 13</div>
              </div>
            </div>
            <div className={styles.profile2}>
              <div className={styles.profileInner} />
              <div className={styles.userContent2}>
                <div className={styles.studentName2}>
                  <b className={styles.shan}>Shan</b>
                  <div className={styles.filter2}>
                    <b className={styles.student2}>Online</b>
                  </div>
                </div>
                <div className={styles.friends132}>Friends: 13</div>
              </div>
            </div>
            <div className={styles.profile3}>
              <div className={styles.frameDiv} />
              <div className={styles.userContent3}>
                <div className={styles.studentName3}>
                  <b className={styles.lejendary}>Lejendary</b>
                  <div className={styles.filter3}>
                    <b className={styles.student3}>Online</b>
                  </div>
                </div>
                <div className={styles.friends133}>Friends: 13</div>
              </div>
            </div>
            <div className={styles.profile4}>
              <div className={styles.profileChild1} />
              <div className={styles.userContent4}>
                <div className={styles.studentName4}>
                  <b className={styles.regan}>Regan</b>
                  <div className={styles.filter4}>
                    <b className={styles.student4}>DND</b>
                  </div>
                </div>
                <div className={styles.friends134}>Friends: 13</div>
              </div>
            </div>
            <div className={styles.profile5}>
              <div className={styles.profileChild2} />
              <div className={styles.userContent5}>
                <div className={styles.studentName5}>
                  <b className={styles.kumquat}>Kumquat</b>
                  <div className={styles.filter5}>
                    <b className={styles.student5}>Online</b>
                  </div>
                </div>
                <div className={styles.friends135}>Friends: 13</div>
              </div>
            </div>
          </div>
          <div className={styles.sideBarInner}>
            <div className={styles.faqParent}>
              <a className={styles.faq}>FAQ</a>
              <div className={styles.giveUsFeedback}>Give us Feedback</div>
              <div className={styles.iconParent}>
                <img className={styles.icon} alt="" src="/icon-3.svg" />
                <div className={styles.signOut}>Sign out</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FeedPage;
