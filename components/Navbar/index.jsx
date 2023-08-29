import React, { useState } from "react";
import styles from "../../styles/Navbar.module.css";
import Button from "../Button";
import { motion } from "framer-motion";
import Link from "next/link";
import Modal from "react-modal";
import { TiCancel } from "react-icons/ti";
import { HiChatAlt2 } from "react-icons/hi";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
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
    // subtitle.style.color = "#F37446";
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
            <motion.div whileHover={{
    scale: 1.1,
    transition: { duration: .5 },
  }}
  whileTap={{ scale: 0.9 }}>
            <Button text="Request a Demo"></Button>
            </motion.div>
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
        className={styles.modal}
      >
        <div className={styles.form}>
          <div className={styles.formLeft}>
            <div className={styles.formLeftTop}>
              <div className={styles.icons}>
                <div className={styles.iconBorder}>
                  <HiChatAlt2 />
                </div>
                <div className={styles.iconDetails}>
                  <h1>Chat to us</h1>
                  <p>Our friendly team is here to help.</p>
                  <a href="">hi@lemoncraft.in</a>
                </div>
              </div>
              <div className={styles.icons}>
                <div className={styles.iconBorder}>
                  <FaMapLocationDot />
                </div>
                <div className={styles.iconDetails}>
                  <h1>Visit Us</h1>
                  <p>Come say hello at our office HQ.</p>
                  <a href="">Delhi, India</a>
                </div>
              </div>
              <div className={styles.icons}>
                <div className={styles.iconBorder}>
                  <IoCall />
                </div>
                <div className={styles.iconDetails}>
                  <h1>Chat to us</h1>
                  <p>Our friendly team is here to help.</p>
                  <a href="">hi@lemoncraft.in</a>
                </div>
              </div>
            </div>
            <div className={styles.formLeftBottom}>
              <div className={styles.iconSocials}>
                <Link href="/" className={styles.iconBorder}>
                  <AiFillFacebook />
                </Link>
                <Link href="/" className={styles.iconBorder}>
                  <AiOutlineTwitter />
                </Link>
                <Link href="/" className={styles.iconBorder}>
                  <AiFillLinkedin />
                </Link>
                <Link href="/" className={styles.iconBorder}>
                  <AiFillInstagram />
                </Link>
                <Link href="/" className={styles.iconBorder}>
                  <AiFillYoutube />
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.formRight}>
            <div className={styles.fillup}>
              <h1>Got ideas? We’ve got the skills. Let’s team up.</h1>
              <p>Tell us more about yourself and what you’re got in mind.</p>
              <input placeholder="Name" />
              <input placeholder="Email" />
              <input placeholder="Mobile" />
              <input placeholder="Message" />
              <div className={styles.formServices}>
                <p>How can we help?</p>
              <div className={styles.selection}> 
                <label class={styles.container}>
                  Website Design
                  <input type="checkbox" />
                  <span class={styles.checkmark}></span>
                </label>
                <label class={styles.container}>
                Website Design
                  <input type="checkbox" />
                  <span class={styles.checkmark}></span>
                </label>
                <label class={styles.container}>
                Website Design
                  <input type="checkbox" />
                  <span class={styles.checkmark}></span>
                </label>
                <label class={styles.container}>
                Website Design
                  <input type="checkbox" />
                  <span class={styles.checkmark}></span>
                </label>
                <label class={styles.container}>
                Website Design
                  <input type="checkbox" />
                  <span class={styles.checkmark}></span>
                </label>
                <label class={styles.container}>
                Website Design
                  <input type="checkbox" />
                  <span class={styles.checkmark}></span>
                </label>
              </div>
              </div>
            </div>
            <div className={styles.customBtn}>Let’s get Started</div>
          </div>

          {/* <form>
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
          </form> */}
        </div>
      </Modal>
    </>
  );
};

export default index;
