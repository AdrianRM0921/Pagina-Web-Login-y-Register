document.addEventListener('DOMContentLoaded', () => {
    const profileIcon = document.querySelector('#profileIcon');
    const profileDropdown = document.querySelector('#profileDropdown');

    if (!profileIcon || !profileDropdown) {
        console.error('Elementos no encontrados');
        return;
    }

    profileIcon.addEventListener('click', (event) => {
        profileDropdown.classList.toggle('active');
        event.stopPropagation(); 
    });

    document.addEventListener('click', (event) => {
        if (!profileDropdown.contains(event.target) && event.target !== profileIcon) {
            profileDropdown.classList.remove('active');
        }
    });
});