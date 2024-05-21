document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const animatedElements = document.querySelectorAll('.animate-scroll');
    const toggleButton = document.getElementById('toggle-button');
    const body = document.body;

     // Toggle Light/Dark Mode
    toggleButton.addEventListener('click', function() {
        // Toggle mode
        body.classList.toggle('light-mode');
        
        // Mengubah gambar tombol toggle sesuai dengan mode yang aktif
        const toggleImg = toggleButton.querySelector('img');
        if (body.classList.contains('light-mode')) {
            toggleImg.src = 'img/on-button.png';
            toggleImg.alt = 'Toggle Light';
        } else {
            toggleImg.src = 'img/off-button.png';
            toggleImg.alt = 'Toggle Dark';
        }
    });

    // Gallery hover effect
    galleryItems.forEach(item => {
        const img = item.querySelector('img');
        
        item.addEventListener('mouseenter', function() {
            img.style.transform = 'scale(1.1)';
        });

        item.addEventListener('mouseleave', function() {
            img.style.transform = 'scale(1)';
        });
    });

    // Animated scroll
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.75 // Sesuaikan threshold sesuai kebutuhan
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Buat dropdown bahasa
    createLanguageDropdown();

    function createLanguageDropdown() {
        const languages = {
            "en": "English",
            "id": "Indonesian"
        };

        const select = document.createElement('select');
        select.id = "language-select";

        for (const code in languages) {
            const option = document.createElement('option');
            option.value = code;
            option.textContent = languages[code];
            select.appendChild(option);
        }

        const dropdownContainer = document.getElementById('language-dropdown');
        dropdownContainer.appendChild(select);

        // Responsifkan pilihan bahasa
        window.addEventListener('resize', function() {
            if (window.innerWidth < 768) {
                select.style.float = 'right';
                select.style.margin = '10px auto';
            } else {
                select.style.float = 'right';
                select.style.marginRight = '10px';
            }
        });

        // Panggil event resize saat halaman dimuat
        window.dispatchEvent(new Event('resize'));

        // Mengubah teks berdasarkan bahasa yang dipilih
        select.addEventListener('change', function() {
            const selectedLanguage = this.value;
            updateLanguageText(selectedLanguage);
        });
    }

    function updateLanguageText(selectedLanguage) {
        const languageText = {
            "en": {
                "bagian1": "Welcome to <span>my Gallery</span>",
                "bagian2": "The nig<span>ht sky</span>",
                "bagian3": "Water<span>fall</span>",
                "bagian4": "Hogw<span>arts</span>",
            },
            "id": {
                "bagian1": "Selamat datang di <span>Galleri saya</span>",
                "bagian2": "Langit <span>Malam</span>",
                "bagian3": "Air <span>Terjun</span>",
                "bagian4": "Hogw<span>arts</span>",
            }
        };

        for (const key in languageText[selectedLanguage]) {
            const element = document.querySelector('.' + key);
            if (element) {
                element.innerHTML = languageText[selectedLanguage][key];
            }
        }
    }
});
