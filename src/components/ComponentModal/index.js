import React, {useState} from "react";

function Modal({ children, content, url, onClose }) {

    return (
        <div style={styles.overlay} onClick={onClose}>
            <div style={styles.modal} className="text-center bg-white dark:bg-[#070a11]">
                {children}
                <h2><a href={url} target="_blank">{content}</a></h2>
                <button style={styles.closeButton} onClick={onClose}>
                    X
                </button>
            </div>
        </div>
    );
}

const styles = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 99,
    },
    modal: {
        // backgroundColor: "gray",
        padding: "20px",
        borderRadius: "8px",
        position: "relative",
        width: "80%",
        maxWidth: "500px",
    },
    closeButton: {
        position: "absolute",
        top: "10px",
        right: "10px",
        background: "transparent",
        border: "none",
        fontSize: "18px",
        cursor: "pointer",
        // color: "black",
    }
};

export default Modal;
