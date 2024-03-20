import React from "react";
import { useState } from "react";
import cancel from "./assets/cancel.svg";
import VerifyId from "./components/verifyID/verifyID";
import PaymentStatus from "./components/paymentstatus/status";
import styles from "./App.module.css"; // Importing local CSS styles

const HomePage = () => {
  const [showFirstOptions, setFirstShowOptions] = useState(false);
  const [showSecondOptions, setSecondShowOptions] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [type, setType] = useState("");
  const [valueText, setValueText] = useState("");
  const [showSecOverlay, setShowSecOverlay] = useState(false);

  const backToId = () => {
    setShowSecOverlay(false);
    setShowOverlay(true);
  };

  const handleShowModal = async () => {
    setShowSecOverlay(true);
    setShowOverlay(false);
    const data = {
      ticketName: type,
      ticketNo: valueText,
    };

    axios
      .post(
        "https://main-website-backend-lm0y.onrender.com/buy-tickets/verify-ticket",
        data
      )
      .then((response) => {
        console.log(response.data);
        // Handle the response data here
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle any errors that occurred during the request
      });
  };

  const handleDecider = (value) => {
    setType(value);
    setShowOverlay(!showOverlay);
    setShowSecOverlay(false);
  };

  const handleShowFirstOptions = () => {
    setFirstShowOptions(!showFirstOptions);
  };

  const handleShowSecondOptions = () => {
    setSecondShowOptions(!showSecondOptions);
  };

  const handleTextValue = (e) => {
    const value = e.target.value;
    setValueText(value);
  };
  const handleFirstOverlay = () => {
    setShowOverlay(!showOverlay);
  };
  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.head}>Verify Ticket</h1>
        <p className={styles.subHead}>
          home / <span className={styles.verify}> verification</span>
        </p>
      </div>
      <div className={styles.body}>
        <p className={styles.ver}>verify</p>
        <div className={styles.select}>
          <div className={styles.tId}>
            <div
              onClick={handleShowFirstOptions}
              className={styles.cursorPointer}
            >
              ID Verification
            </div>

            {showFirstOptions && (
              <div className={styles.selection}>
                <img
                  src={cancel}
                  alt="cancel"
                  className={styles.cancel}
                  onClick={handleShowFirstOptions}
                />
                <ul>
                  <div
                    className={styles.iftaar}
                    onClick={() => handleDecider("iftaar")}
                  >
                    iftaar
                  </div>
                  <hr />
                  <div
                    className={styles.sahoor}
                    onClick={() => handleDecider("sahoor")}
                  >
                    sahoor
                  </div>
                </ul>
              </div>
            )}
          </div>
          <hr />
          <div className={styles.tId}>
            <div
              onClick={handleShowSecondOptions}
              className={styles.cursorPointer}
            >
              Scan QR Code
            </div>

            {showSecondOptions && (
              <div className={styles.selection}>
                <img
                  src={cancel}
                  alt="cancel"
                  className={styles.cancel}
                  onClick={handleShowSecondOptions}
                />
                <ul>
                  <li className={styles.iftaar}>iftaar</li>
                  <li className={styles.sahoor}>sahoor</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      {showOverlay && (
        <VerifyId
          showModal={handleShowModal}
          textValue={handleTextValue}
          cancelDisplay={handleFirstOverlay}
        />
      )}
      {showSecOverlay && <PaymentStatus action={backToId} />}
    </div>
  );
};

export default HomePage;
