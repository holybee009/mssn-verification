import React from "react";
import Modal from "./../modal/modal";
import cancel from "./../../assets/cancel.svg";
import styles from "./verifyID.module.css"; // Importing local CSS styles

const VerifyId = ({ showModal, textValue, cancelDisplay }) => {
  return (
    <Modal>
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>ID Verification</h3>
          <img
            src={cancel}
            alt="cancel"
            className={styles.cancelIcon}
            onClick={cancelDisplay}
          />
        </div>
        <div className={styles.form}>
          <label className={styles.label}>Ticket ID:</label>
          <input type="text" className={styles.input} onChange={textValue} />

          <button type="submit" className={styles.button} onClick={showModal}>
            Verify Payment
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default VerifyId;
