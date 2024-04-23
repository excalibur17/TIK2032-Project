// JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.animate-scroll');
    const toggleButton = document.getElementById('toggle-button');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function animateOnScroll() {
        animateElements.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('animated');
            }
        });
    }

    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);

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

        window.addEventListener('resize', function() {
            if (window.innerWidth < 768) {
                select.style.float = 'right';
                select.style.margin = '10px auto';
            } else {
                select.style.float = 'right';
                select.style.marginRight = '10px';
            }
        });

        window.dispatchEvent(new Event('resize'));

        select.addEventListener('change', function() {
            const selectedLanguage = this.value;
            updateLanguageText(selectedLanguage);
        });
    }

    function updateLanguageText(selectedLanguage) {
        const languageText = {
            "en": {
               "bagian1": "<span>My</span> Contacts",
               "bagian2": "Email",
               "bagian3": "Phone",
               "bagian4": "Follow",
               "bagian5": "Instagram",
               "bagian6": "If you are interested in me, <span>please contact me.</span>",
            },
            "id": {
                 "bagian1": "<span>Kontak</span> Saya",
                 "bagian2": "Email",
                 "bagian3": "Telepon",
                 "bagian4": "Ikuti",
                 "bagian5": "Instagram",
                 "bagian6": "Jika Anda tertarik dengan saya, <span>silahkan hubungi saya.</span>",
            }
        };

        for (const key in languageText[selectedLanguage]) {
            const element = document.querySelector('.' + key);
            if (element) {
                element.innerHTML = languageText[selectedLanguage][key];
            }
        }
    }

    // Tambahkan event listener untuk tombol toggle
    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('light-mode');
    });
});
