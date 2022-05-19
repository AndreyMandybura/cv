(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        openModalBtnEducation: document.querySelector("[data-modal-open-education]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        backdrop: document.querySelector("[data-backdrop]"),
    };

    refs.openModalBtn.addEventListener("click", onOpenModal);
    refs.openModalBtnEducation.addEventListener("click", onOpenModal);
    refs.closeModalBtn.addEventListener("click", onCloseModal);
    refs.backdrop.addEventListener('click', onBackdropClick);

    function onOpenModal() {
        window.addEventListener('keydown', onEskKeyPress);
        refs.backdrop.classList.remove("is-hidden");
    }

    function onCloseModal() {
        window.removeEventListener('keydown', onEskKeyPress);
        refs.backdrop.classList.add("is-hidden");
    }

    function onBackdropClick(event) {
        if (event.currentTarget === event.target) {
            refs.backdrop.classList.add("is-hidden");
        }
    }

    function onEskKeyPress(event) {
        if (event.code === 'Escape') {
            refs.backdrop.classList.add("is-hidden");
        }
    }
})();