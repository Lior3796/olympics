import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

const Modal = ({ showModal, setShowModal }) => {
    const modalVarients = {
        hidden: {
            opacity: 0,

        },
        visible: {
            opacity: 1
        }

    }

    return (
        <AnimatePresence exitBeforeEnter>
            {
                showModal && (
                    <motion.div style={{ zIndex: 1, position: "fixed", top: 0, left: 0, 
                    background: "black", opacity:0.5, width: "100%", height: "100%" }} 
                    variants={modalVarients} initial="hidden" animate="visible">

                    </motion.div>
                )
            }



        </AnimatePresence>

    )

}
export default Modal;