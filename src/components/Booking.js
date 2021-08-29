import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Booking.css";

const backdropVariant = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalVariant = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: { y: "200px", opacity: 1, transition: { delay: 0.5 } },
};

const Booking = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdropVariant}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div className="modal" variants={modalVariant}>
            <form className="simple-form">
              <div className="form-control">
                <label htmlFor="name">You Name</label>
                <input type="text" id="name" />
              </div>
              <div className="form-control">
                <label htmlFor="email">You E-Mail</label>
                <input type="email" id="email" />
              </div>
              <Link to="/">
                <button
                  className="btn"
                  style={{ color: "#fff" }}
                  onClick={() => setShowModal(false)}
                >
                  Start Again
                </button>
              </Link>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Booking;
