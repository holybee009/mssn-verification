import React from "react";
import styles from "./modal.module.css";

const modal = ({ children }) => {
  return (
    <div>
      <div className={styles.backdrop} />
      <dialog open className={styles.modalDialog}>
        {children}
      </dialog>
    </div>
  );
};

export default modal;
