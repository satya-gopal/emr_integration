import { FunctionComponent } from "react";
import AddEmr from "./AddEmr";
import styles from "./AddFrame.module.css";

export type AddFrameType = {
  className?: string;
};

const AddFrame: FunctionComponent<AddFrameType> = ({ className = "" }) => {
  return (
    <section className={[styles.addframe, className].join(" ")}>
      <header className={styles.menuNav}>
        <img
          className={styles.labsquireLogo011}
          alt=""
          src="/labsquire-logo01-1@2x.png"
        />
        <div className={styles.profileNotificationWrapper}>
          <div className={styles.profileNotification}>
            <img
              className={styles.notificationIcon}
              alt=""
              src="/notification.svg"
            />
            <div className={styles.profile}>
              <img
                className={styles.avatarProfileIcon}
                alt=""
                src="/avatar-profile@2x.png"
              />
            </div>
          </div>
        </div>
      </header>
      <AddEmr />
    </section>
  );
};

export default AddFrame;
