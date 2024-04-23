document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const animatedElements = document.querySelectorAll('.animate-scroll');
    const toggleButton = document.getElementById('toggle-button');

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

    // Toggle Light/Dark Mode
    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('light-mode');
        
        // Mengubah gambar tombol toggle
        const toggleImg = toggleButton.querySelector('img');
        if (document.body.classList.contains('light-mode')) {
            toggleImg.src = 'img/on-button.png';
            toggleImg.alt = 'Toggle Light';
        } else {
            toggleImg.src = 'img/off-button.png';
            toggleImg.alt = 'Toggle Dark';
        }
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
                "bagian1": "Welcome to <span>my Homepage</span>",
                "bagian4": "I'm Arthur <span>Majore Unsong</span>",
                "bagian5": "informatics engineering student <span>Sam Ratulangi University</span>"
            },
            "id": {
                "bagian1": "Selamat datang di <span>Beranda saya</span>",
                "bagian4": "Saya Arthur  <span> Majore Unsong</span>",
                "bagian5": "mahasiswa teknik informatika <span>Universitas Sam Ratulangi</span>"
            }
        };

        for (const key in languageText[selectedLanguage]) {
            const element = document.querySelector('.' + key);
            if (element) {
                element.innerHTML = languageText[selectedLanguage][key];
            }
        }
    }

    // Memastikan status mode gelap saat memuat ulang halaman
    const currentMode = localStorage.getItem('mode');
    if (currentMode === 'light') {
        document.body.classList.add('light-mode');
        const toggleImg = toggleButton.querySelector('img');
        toggleImg.src = 'img/on-button.png';
        toggleImg.alt = 'Toggle Light';
    }
});
