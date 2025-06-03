document.addEventListener('DOMContentLoaded', () => {
    // Элементы DOM
    const cardsContainer = document.querySelector('.cards-container');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const closeBtn = document.querySelector('.close-btn');
    const openAllBtn = document.getElementById('open-all');
    const closeAllBtn = document.getElementById('close-all');
    
    // Путь к изображению для ЛИЦЕВОЙ стороны (замените на ваш!)
    const FRONT_IMAGE_URL = 'photo_2025-06-03_07-29-17.jpg'; // Пример: 'images/logo.png'
    
    // Генерация путей к изображениям для ОБРАТНОЙ стороны
    const images = Array.from({length: 100}, (_, i) => `photo_${i+1}_2025-06-02_00-26-16.jpg`);

    // Массив для хранения созданных карточек
    const cardElements = [];
    
    // Создание карточек
    images.forEach((img, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.index = index;
        cardElements.push(card);

        // Лицевая сторона (теперь с изображением!)
        const front = document.createElement('div');
        front.classList.add('card-face', 'card-front');
        
        const frontImage = document.createElement('img');
        frontImage.src = FRONT_IMAGE_URL;
        frontImage.alt = ''; // Замените на описание
        front.appendChild(frontImage);

        // Обратная сторона (ваше оригинальное изображение)
        const back = document.createElement('div');
        back.classList.add('card-face', 'card-back');
        
        const image = document.createElement('img');
        image.src = img;
        image.alt = `Изображение ${index + 1}`;
        back.appendChild(image);

        // ... остальной код (кнопки, обработчики) без изменений
        const buttonsDiv = document.createElement('div');
        buttonsDiv.classList.add('card-buttons');

        const zoomBtn = document.createElement('button');
        zoomBtn.classList.add('card-btn', 'card-btn-zoom');
        zoomBtn.textContent = 'Увеличить';
        zoomBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            modalImage.src = img;
            modal.style.display = 'flex';
        });

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

        card.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });

        cardsContainer.appendChild(card);
    });

    // ... остальные обработчики (openAllBtn, closeAllBtn, modal) без изменений
    openAllBtn.addEventListener('click', () => {
        cardElements.forEach(card => card.classList.add('flipped'));
    });

    closeAllBtn.addEventListener('click', () => {
        cardElements.forEach(card => card.classList.remove('flipped'));
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = 'none';
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') modal.style.display = 'none';
    });
});