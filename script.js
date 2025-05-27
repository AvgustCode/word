document.addEventListener('DOMContentLoaded', () => {
    const cardsContainer = document.querySelector('.cards-container');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const closeBtn = document.querySelector('.close-btn');
    
    const images = [
        'img/photo_1_2025-05-28_01-06-56.jpg',
        'img/photo_2_2025-05-28_01-06-56.jpg',
        'img/photo_3_2025-05-28_01-06-56.jpg',
        'img/photo_4_2025-05-28_01-06-56.jpg',
        'img/photo_5_2025-05-28_01-06-56.jpg',
        'img/photo_6_2025-05-28_01-06-56.jpg',
        'img/photo_7_2025-05-28_01-06-56.jpg',
        'img/photo_8_2025-05-28_01-06-56.jpg',
        'img/photo_9_2025-05-28_01-06-56.jpg',
        'img/photo_10_2025-05-28_01-06-56.jpg',
        'img/photo_11_2025-05-28_01-06-56.jpg',
        'img/photo_12_2025-05-28_01-06-56.jpg',
        'img/photo_13_2025-05-28_01-06-56.jpg',
        'img/photo_14_2025-05-28_01-06-56.jpg',
        'img/photo_15_2025-05-28_01-06-56.jpg',
        'img/photo_16_2025-05-28_01-06-56.jpg',
        'img/photo_17_2025-05-28_01-06-56.jpg',
        'img/photo_18_2025-05-28_01-06-56.jpg',
        'img/photo_19_2025-05-28_01-06-56.jpg',
        'img/photo_20_2025-05-28_01-06-56.jpg',
        'img/photo_21_2025-05-28_01-06-56.jpg',
        'img/photo_22_2025-05-28_01-06-56.jpg',
        'img/photo_23_2025-05-28_01-06-56.jpg',
        'img/photo_24_2025-05-28_01-06-56.jpg',
        'img/photo_25_2025-05-28_01-06-56.jpg',
        'img/photo_26_2025-05-28_01-06-56.jpg',
        'img/photo_27_2025-05-28_01-06-56.jpg',
        'img/photo_28_2025-05-28_01-06-56.jpg',
        'img/photo_29_2025-05-28_01-06-56.jpg',
        'img/photo_30_2025-05-28_01-06-56.jpg',
        'img/photo_31_2025-05-28_01-06-56.jpg',
        'img/photo_32_2025-05-28_01-06-56.jpg',
        'img/photo_33_2025-05-28_01-06-56.jpg',
        'img/photo_34_2025-05-28_01-06-56.jpg',
        'img/photo_35_2025-05-28_01-06-56.jpg',
        'img/photo_36_2025-05-28_01-06-56.jpg',
        'img/photo_37_2025-05-28_01-06-56.jpg',
        'img/photo_38_2025-05-28_01-06-56.jpg',
        'img/photo_39_2025-05-28_01-06-56.jpg',
        'img/photo_40_2025-05-28_01-06-56.jpg',
        'img/photo_41_2025-05-28_01-06-56.jpg',
        'img/photo_42_2025-05-28_01-06-56.jpg',
        'img/photo_43_2025-05-28_01-06-56.jpg',
        'img/photo_44_2025-05-28_01-06-56.jpg',
        'img/photo_45_2025-05-28_01-06-56.jpg',
        'img/photo_46_2025-05-28_01-06-56.jpg',
        'img/photo_47_2025-05-28_01-06-56.jpg',
        'img/photo_48_2025-05-28_01-06-56.jpg',
        'img/photo_49_2025-05-28_01-06-56.jpg',
        'img/photo_50_2025-05-28_01-06-56.jpg',
        'img/photo_51_2025-05-28_01-06-56.jpg',
        'img/photo_52_2025-05-28_01-06-56.jpg',
        'img/photo_53_2025-05-28_01-06-56.jpg',
        'img/photo_54_2025-05-28_01-06-56.jpg',
        'img/photo_55_2025-05-28_01-06-56.jpg',
        'img/photo_56_2025-05-28_01-06-56.jpg',
        'img/photo_57_2025-05-28_01-06-56.jpg',
        'img/photo_58_2025-05-28_01-06-56.jpg',
        'img/photo_59_2025-05-28_01-06-56.jpg',
        'img/photo_60_2025-05-28_01-06-56.jpg'
    ];

    // Создаем карточки
    images.forEach((img, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.index = index;

        const front = document.createElement('div');
        front.classList.add('card-face', 'card-front');
        front.textContent = '?';

        const back = document.createElement('div');
        back.classList.add('card-face', 'card-back');
        
        const image = document.createElement('img');
        image.src = img;
        back.appendChild(image);

        // Контейнер для кнопок
        const buttonsDiv = document.createElement('div');
        buttonsDiv.classList.add('card-buttons');

        // Кнопка "Увеличить"
        const zoomBtn = document.createElement('button');
        zoomBtn.classList.add('card-btn', 'card-btn-zoom');
        zoomBtn.textContent = 'Увеличить';
        zoomBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Предотвращаем переворот карточки
            modalImage.src = img;
            modal.style.display = 'flex';
        });

        // Кнопка "Закрыть"
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

        // Клик по карточке = переворот
        card.addEventListener('click', function() {
            if (!this.classList.contains('flipped')) {
                this.classList.add('flipped');
            }
        });

        cardsContainer.appendChild(card);
    });

    // Закрытие модалки
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});