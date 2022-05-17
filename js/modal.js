(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        openModalBtnEducation: document.querySelector("[data-modal-open-education]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        backdrop: document.querySelector("[data-backdrop]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.openModalBtnEducation.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.backdrop.classList.toggle("is-hidden");
    }
})();