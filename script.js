document.addEventListener('DOMContentLoaded', () => {
    // Элементы DOM
    const cardsContainer = document.querySelector('.cards-container');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const closeBtn = document.querySelector('.close-btn');
    const openAllBtn = document.getElementById('open-all');
    const closeAllBtn = document.getElementById('close-all');
    
    // Генерация путей к изображениям
    const images = Array.from({length: 100}, (_, i) => `photo_${i+1}_2025-06-02_00-26-16.jpg`);
    
    
    // Массив для хранения созданных карточек
    const cardElements = [];
    
    // Создание карточек
    images.forEach((img, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.index = index;
        cardElements.push(card);

        // Лицевая сторона
        const front = document.createElement('div');
        front.classList.add('card-face', 'card-front');
        front.textContent = '?';

        // Обратная сторона
        const back = document.createElement('div');
        back.classList.add('card-face', 'card-back');
        
        const image = document.createElement('img');
        image.src = img;
        image.alt = `Изображение ${index + 1}`;
        back.appendChild(image);

        // Кнопки управления
        const buttonsDiv = document.createElement('div');
        buttonsDiv.classList.add('card-buttons');

        // Кнопка увеличения
        const zoomBtn = document.createElement('button');
        zoomBtn.classList.add('card-btn', 'card-btn-zoom');
        zoomBtn.textContent = 'Увеличить';
        zoomBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            modalImage.src = img;
            modalImage.alt = `Увеличенное изображение ${index + 1}`;
            modal.style.display = 'flex';
        });

        // Кнопка закрытия карточки
        const closeCardBtn = document.createElement('button');
        closeCardBtn.classList.add('card-btn', 'card-btn-close');
        closeCardBtn.textContent = 'Закрыть';
        closeCardBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            card.classList.remove('flipped');
        });

        buttonsDiv.appendChild(zoomBtn);
        buttonsDiv.appendChild(closeCardBtn);
        back.appendChild(buttonsDiv);

        card.appendChild(front);
        card.appendChild(back);

        // Обработчик клика по карточке
        card.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });

        cardsContainer.appendChild(card);
    });

    // Кнопка "Открыть все"
    openAllBtn.addEventListener('click', () => {
        cardElements.forEach(card => {
            card.classList.add('flipped');
        });
    });

    // Кнопка "Закрыть все"
    closeAllBtn.addEventListener('click', () => {
        cardElements.forEach(card => {
            card.classList.remove('flipped');
        });
    });

    // Закрытие модального окна
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Закрытие по клику вне изображения
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Закрытие по ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modal.style.display = 'none';
        }
    });
});
