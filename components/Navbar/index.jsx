import React, { useState } from "react";
import styles from "../../styles/Navbar.module.css";
import Button from "../Button";
import { motion } from "framer-motion";
import Link from "next/link";
import Modal from "react-modal";
import { TiCancel } from "react-icons/ti";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const index = () => {
  const [toggle, setToggle] = useState(false);
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    subtitle.style.color = "#F37446";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <div className={styles.appNavbar}>
        <Link href="/" className={styles.logo}>
          <img src="https://i.ibb.co/sQmnKJs/logo.png" alt="" />
          <div>Lemon Craft</div>
        </Link>
        <div className={styles.appNavbarMenu}>
          <div onClick={openModal}>
            <Button text="Request a Demo"></Button>
          </div>
          <div onClick={() => setToggle(true)} className={styles.menu}>
            ME
            <br />
            NU
          </div>
          {toggle && (
            <motion.div
              initial={{ y: "-10", opacity: 0, scale: 0.5 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              className={styles.screenMenu}
            >
              <div
                onClick={() => setToggle(false)}
                className={styles.menuClose}
              >
                <TiCancel />
              </div>
              <motion.div className={styles.navlinks}>
                <Link className={styles.navlink} href="about">
                  Design
                </Link>
                <Link className={styles.navlink} href="about">
                  Branding
                </Link>
                <Link className={styles.navlink} href="about">
                  Development
                </Link>
                <Link className={styles.navlink} href="about">
                  About Us
                </Link>
                <Link className={styles.navlink} href="about">
                  Why Choose Us
                </Link>
                <Link className={styles.navlink} href="about">
                  How we work
                </Link>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className={styles.form}>
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />

            <label class={styles.container}>
              One
              <input type="checkbox" />
              <span class={styles.checkmark}></span>
            </label>
            <label class={styles.container}>
              Two
              <input type="checkbox" />
              <span class={styles.checkmark}></span>
            </label>
            <label class={styles.container}>
              Three
              <input type="checkbox" />
              <span class={styles.checkmark}></span>
            </label>
            <label class={styles.container}>
              Four
              <input type="checkbox" />
              <span class={styles.checkmark}></span>
            </label>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default index;
