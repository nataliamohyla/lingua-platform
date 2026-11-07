import { useEffect } from "react";
import style from "./AuthModal.module.css";


function AuthModal({ onClose, children }) {
    useEffect(() => {
        const handeleKeyDown = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };
        window.addEventListener("keydown", handeleKeyDown);
        return () => {
            window.removeEventListener("keydown", handeleKeyDown);
        };
    }, [onClose]);

    const handelBackdropClick = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };
    return (
        <div className={style.backdrop} onClick={handelBackdropClick}>
            <div className={style.modal}>
                <button type="button" className={style.closeButton} onClick={onClose} aria-label="Close modal"> × </button>
                <div>{children}</div>
            </div>
        </div>
    );
};
export default AuthModal;