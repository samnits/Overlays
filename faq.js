document.addEventListener('DOMContentLoaded', () => {
    const openPopupBtn = document.querySelector('.fa-envelope');
    const popupContainer = document.getElementById('popupContainer');
    const closePopupBtn = document.getElementById('closePopupBtn');

    openPopupBtn.addEventListener('click', () => {
        popupContainer.style.display = 'flex';
    });

    closePopupBtn.addEventListener('click', () => {
        popupContainer.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === popupContainer) {
            popupContainer.style.display = 'none';
        }
    });
});