document.addEventListener('DOMContentLoaded', function() {
    const popup = document.querySelector('.popup');
    const closeBtn = document.querySelector('.close');

    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    // Пример открытия попапа
    document.querySelector('main').addEventListener('click', function() {
        popup.style.display = 'block';
    });
});