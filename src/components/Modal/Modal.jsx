import { useContext, useRef } from "react";
import { ModalContext } from "../../pages/Root";

const Modal = () => {
    const {modal, toggleModal} = useContext(ModalContext);

    const overlayRef = useRef();

    const close = (event) => {
        if(event.target === overlayRef.current) {
            toggleModal();
        }
    };

    return (
        <section onClick={(e) => close(e)} ref={overlayRef} className={`overlay ${modal ? "active" : ""}`}>
            <div className="modal">
                <header className="madal-header">
                    <h2>Корзина</h2>

                    <div className="modal-body">

                    </div>

                    <footer className="modal-footer">

                    </footer>
                </header>
            </div>
        </section>
    )
}

export default Modal;