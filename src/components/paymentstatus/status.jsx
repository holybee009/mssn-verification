import React from "react";
import Modal from "./../modal/modal";
import tick from "./../../assets/tick.svg";
import styles from "./status.module.css"; // Importing local CSS styles

const PaymentStatus = ({ action }) => {
  return (
    <div>
      <Modal>
        <div className={styles.content}>
          <img src={tick} alt="tick" className={styles.tickIcon} />
          <p className={styles.statusText}>Ticket Valid</p>
          <div className={styles.backButton} onClick={action}>
            Back
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PaymentStatus;
