document.addEventListener('DOMContentLoaded', () => {
    // Проверка существования DOM-элементов
    const elements = {
        section1: document.getElementById('section1'),
        section2: document.getElementById('section2'),
        modal: document.getElementById('modal'),
        modalImage: document.getElementById('modal-image'),
        closeBtn: document.querySelector('.close-btn'),
        openAllBtn: document.getElementById('open-all'),
        closeAllBtn: document.getElementById('close-all')
    };

    // Проверка на существование элементов
    for (const [key, element] of Object.entries(elements)) {
        if (!element) {
            console.error(`Элемент ${key} не найден!`);
            return;
        }
    }

    // Конфигурация разделов
    const config = {
        section1: {
            logo: 'photo_2025-06-03_07-29-17.jpg',
            images: Array.from({length: 100}, (_, i) => `photo_${i+1}_2025-06-02_00-26-16.jpg`),
            altPrefix: 'Природа'
        },
        section2: {
            logo: 'photo_1_2025-06-02_00-26-16.jpg',
            images: Array.from({length: 60}, (_, i) => `photo_${i+1}_2025-06-03_16-19-50.jpg`),
            altPrefix: 'Город'
        }
    };

    // Создание одной карточки
    function createCard(img, section) {
        const card = document.createElement('div');
        card.classList.add('card');
        
        // Лицевая сторона с логотипом раздела
        const front = document.createElement('div');
        front.classList.add('card-face', 'card-front');
        const frontImage = document.createElement('img');
        frontImage.src = config[section].logo;
        frontImage.alt = 'Логотип ' + section;
        frontImage.classList.add('logo');
        front.appendChild(frontImage);

        // Обратная сторона с изображением
        const back = document.createElement('div');
        back.classList.add('card-face', 'card-back');
        const backImage = document.createElement('img');
        backImage.src = img;
        backImage.alt = `${config[section].altPrefix} ${img.split('_').pop()}`;
        back.appendChild(backImage);

        // Кнопки управления
        const buttonsDiv = document.createElement('div');
        buttonsDiv.classList.add('card-buttons');

        const zoomBtn = document.createElement('button');
        zoomBtn.classList.add('card-btn', 'card-btn-zoom');
        zoomBtn.textContent = 'Увеличить';
        zoomBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            elements.modalImage.src = img;
            elements.modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
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

        return card;
    }

    // Заполнение раздела карточками
    function initSection(container, section) {
        container.innerHTML = '';
        config[section].images.forEach(img => {
            const card = createCard(img, section);
            container.appendChild(card);
        });
    }

    // Инициализация разделов
    initSection(elements.section1, 'section1');
    initSection(elements.section2, 'section2');

    // Переключение между разделами
    document.querySelectorAll('.section-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.section-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            elements.section1.style.display = 
                btn.dataset.section === 'section1' ? 'flex' : 'none';
            elements.section2.style.display = 
                btn.dataset.section === 'section2' ? 'flex' : 'none';
        });
    });

    // Управление всеми карточками
    function toggleAllCards(flip) {
        const activeSection = document.querySelector('.cards-container[style*="flex"]');
        if (activeSection) {
            const cards = activeSection.querySelectorAll('.card');
            cards.forEach(card => {
                flip ? card.classList.add('flipped') : card.classList.remove('flipped');
            });
        }
    }

    elements.openAllBtn.addEventListener('click', () => toggleAllCards(true));
    elements.closeAllBtn.addEventListener('click', () => toggleAllCards(false));

    // Управление модальным окном
    elements.closeBtn.addEventListener('click', closeModal);
    elements.modal.addEventListener('click', (e) => {
        if (e.target === elements.modal) closeModal();
    });

    function closeModal() {
        elements.modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
});