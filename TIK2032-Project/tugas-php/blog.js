document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling
    const links = document.querySelectorAll('nav ul li a');

    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(e) {
        e.preventDefault();
        const href = this.getAttribute('href');

        if (href.charAt(0) === '#') {
            const target = document.querySelector(href);
            const offsetTop = target.offsetTop;

            window.scroll({
                top: offsetTop,
                behavior: 'smooth'
            });
        } else {
            window.location.href = href;
        }
    }

    // Scroll animation
    const animatedElements = document.querySelectorAll('.animate-scroll');

    function checkScroll() {
        animatedElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementPosition < windowHeight * 0.75) {
                element.classList.add('animated');
            }
        });
    }

    // Run checkScroll on page load
    checkScroll();

    // Run checkScroll on scroll
    window.addEventListener('scroll', checkScroll);

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
                
                "article1": "Haikyuu!!: The Battle of Concepts - A Brief Overview",
                "content1": `"Haikyuu!!: The Battle of Concepts" marks the exhilarating leap of the beloved volleyball anime series onto the big screen. Directed by Susumu Mitsunaka and produced by Production I.G, this cinematic adaptation of the wildly popular manga by Haruichi Furudate delivers an electrifying experience for fans and newcomers alike.<br><br>` +
                            `The movie takes viewers on a gripping journey through the intense world of high school volleyball, focusing on the trials and triumphs of the Karasuno High School volleyball team during the National Spring High School Volleyball Championship. Led by the determined Hinata Shoyo, the team faces off against formidable opponents as they strive to prove themselves on the national stage.<br><br>` +
                            `With stunning animation, heart-pounding matches, and compelling character development, "Haikyuu!!: The Battle of Concepts" stays true to the spirit of the original series while offering fresh insights and perspectives. Audiences are treated to an adrenaline-fueled spectacle that celebrates the themes of teamwork, friendship, and perseverance that have endeared "Haikyuu!!" to fans worldwide.<br><br>` +
                            `Released to critical acclaim in September 2019 in Japan, the film further cements the legacy of "Haikyuu!!" as one of the most beloved sports anime franchises of all time. As fans eagerly await future installments and spin-offs, "Haikyuu!!: The Battle of Concepts" stands as a testament to the enduring power of passion, determination, and the bonds forged on the volleyball court.`,
               
                "breath": "The Significance of Breath: A Brief Exploration",
                "breath_content": `"Breath, the fundamental act of inhaling and exhaling, holds profound significance across cultures and disciplines. While often taken for granted, the act of breathing carries deep symbolic and physiological meaning.<br><br>` +
                                    `In many spiritual traditions, breath is associated with life force and vitality. Practices such as meditation, yoga, and mindfulness often emphasize conscious breathing as a means of centering oneself and connecting with the present moment. The rhythmic flow of breath is seen as a pathway to inner peace, clarity, and spiritual awakening.<br><br>` +
                                    `From a physiological perspective, breathing is essential for sustaining life. Each inhalation brings oxygen into the body, which is vital for cellular function and energy production. Conversely, exhalation removes carbon dioxide, a waste product of metabolism. The exchange of gases in the lungs supports the body overall health and well-being.<br><br>` +
                                    `Beyond its physical and spiritual dimensions, breath also serves as a metaphor for emotional states and experiences. The phrase "catching one's breath" can signify a moment of pause or reflection amidst turmoil or excitement. Similarly, "holding one's breath" may denote anticipation, suspense, or anxiety.<br><br>` +
                                    `In literature and poetry, breath is often used symbolically to evoke themes of life, mortality, and renewal. Writers and artists throughout history have drawn inspiration from the rhythm and flow of breath, weaving its imagery into their works to convey deeper layers of meaning.<br><br>` +
                                    `Ultimately, the significance of breath extends far beyond its physiological function. It serves as a reminder of our interconnectedness with the natural world and the cyclical nature of existence. Whether as a source of spiritual insight, a physiological necessity, or a metaphorical expression, breath remains a timeless symbol of life's essence and vitality."`,
               
                 "introversion": "Embracing Introversion: Navigating Life's Quiet Depths",
                "introversion_content": "Introversion, often misunderstood in a world that celebrates extroversion, is a personality trait characterized by a preference for solitude and introspection.<br><br>" +
                                        "While extroverts thrive in social settings, introverts find solace and recharge in solitude. Contrary to popular belief, introversion is not synonymous with shyness or social anxiety; rather, it reflects a unique way of processing and interacting with the world.<br><br>" +
                                        "For introverts, social interactions can be draining, requiring time alone to replenish their energy reserves. This need for solitude is not a sign of antisocial behavior but rather a natural inclination to reflect, recharge, and engage in meaningful introspection. Introverts often possess rich inner worlds, thriving in environments that allow for deep thinking, creativity, and introspection.<br><br>" +
                                        "While introversion may present challenges in a world that values extroverted traits such as assertiveness and outgoingness, introverts bring valuable strengths to the table. They excel in tasks that require focus, attention to detail, and independent work. Their ability to listen attentively and think deeply often leads to profound insights and innovative solutions.<br><br>" +
                                        "Despite societal pressures to conform to extroverted norms, introverts can find fulfillment and success by embracing their unique qualities. By honoring their need for solitude and self-reflection, introverts can cultivate a sense of inner peace and authenticity. Rather than viewing introversion as a limitation, they can harness its strengths to achieve their goals and contribute meaningfully to society.<br><br>" +
                                        "In a world that often values quantity over quality in social interactions, introverts offer a reminder of the importance of depth and authenticity in relationships. Their ability to listen, observe, and empathize enriches interpersonal connections and fosters genuine understanding.<br><br>" +
                                        "Ultimately, introversion is not a weakness to be overcome but a gift to be celebrated. By embracing their introverted nature and honoring their need for solitude, introverts can lead lives of purpose, authenticity, and fulfillment, navigating life's quiet depths with grace and resilience.",
            },
            "id": {
                "article1": "Haikyuu!!: Pertarungan Konsep - Sebuah Tinjauan Singkat",
                "content1": `Haikyuu!!: The Battle of Concepts" menandai loncatan yang mendebarkan dari serial anime voli yang dicintai ke layar besar. Disutradarai oleh Susumu Mitsunaka dan diproduksi oleh Production I.G, adaptasi sinematik dari manga yang sangat populer karya Haruichi Furudate ini memberikan pengalaman yang menggairahkan bagi penggemar dan pendatang baru.<br><br>` +
                            `Film ini membawa penonton dalam perjalanan yang mendebarkan melalui dunia voli sekolah menengah yang intens, fokus pada ujian dan keberhasilan tim voli Sekolah Menengah Karasuno selama Kejuaraan Voli Musim Semi Nasional. Dipimpin oleh Hinata Shoyo yang bertekad, tim menghadapi lawan-lawan tangguh saat mereka berjuang untuk membuktikan diri di panggung nasional.<br><br>` +
                            `Dengan animasi yang memukau, pertandingan yang mendebarkan, dan pengembangan karakter yang mengesankan, "Haikyuu!!: The Battle of Concepts" tetap setia pada semangat serial aslinya sambil menawarkan pandangan dan perspektif baru. Penonton disuguhkan dengan spektakel yang memompa adrenalin yang merayakan tema-tema kerja sama, persahabatan, dan ketekunan yang telah membuat "Haikyuu!!" dicintai oleh penggemar di seluruh dunia.<br><br>` +
                            `Dirilis dengan pujian kritis pada September 2019 di Jepang, film ini lebih memperkuat warisan "Haikyuu!!" sebagai salah satu waralaba anime olahraga paling dicintai sepanjang masa. Sementara penggemar dengan antusias menunggu sekuel dan spin-off di masa depan, "Haikyuu!!: The Battle of Concepts" menjadi bukti dari kekuatan abadi dari passion, ketekunan, dan ikatan yang terbentuk di lapangan voli.`,
                
                "breath": "Makna Napas: Eksplorasi Singkat",
                "breath_content": `Nafas, tindakan mendasar dalam menghirup dan menghembuskan napas, memiliki arti penting di berbagai budaya dan disiplin ilmu. Meskipun sering dianggap remeh, tindakan bernapas memiliki makna simbolis dan fisiologis yang dalam.<br><br>` +
                                  `Dalam banyak tradisi spiritual, nafas dikaitkan dengan kekuatan hidup dan vitalitas. Praktik seperti meditasi, yoga, dan mindfulness sering kali menekankan pernapasan sadar sebagai sarana untuk memusatkan diri dan terhubung dengan momen saat ini. Aliran napas yang berirama dipandang sebagai jalan menuju kedamaian batin, kejernihan, dan kebangkitan spiritual.<br><br>` +
                                  `Dari sudut pandang fisiologis, pernapasan sangat penting untuk mempertahankan kehidupan. Setiap inhalasi membawa oksigen ke dalam tubuh, yang penting untuk fungsi sel dan produksi energi. Sebaliknya, pernafasan menghilangkan karbon dioksida, produk limbah metabolisme. Pertukaran gas di paru-paru mendukung kesehatan dan kesejahteraan tubuh secara keseluruhan.<br><br>` +
                                  `Di luar dimensi fisik dan spiritual, nafas juga berfungsi sebagai metafora untuk keadaan dan pengalaman emosional. Ungkapan “menarik napas” dapat menandakan momen jeda atau refleksi di tengah gejolak atau kegembiraan. Demikian pula, “menahan napas” dapat menunjukkan antisipasi, ketegangan, atau kecemasan.<br><br>` +
                                  `Dalam sastra dan puisi, nafas sering digunakan secara simbolis untuk membangkitkan tema kehidupan, kematian, dan pembaruan. Penulis dan seniman sepanjang sejarah telah mengambil inspirasi dari ritme dan aliran nafas, merangkai gambaran tersebut ke dalam karya mereka untuk menyampaikan lapisan makna yang lebih dalam.<br><br>` +
                                  `Pada akhirnya, pentingnya pernapasan jauh melampaui fungsi fisiologisnya. Ini berfungsi sebagai pengingat akan keterhubungan kita dengan alam dan sifat siklus keberadaan. Baik sebagai sumber wawasan spiritual, kebutuhan fisiologis, atau ekspresi metaforis, napas tetap menjadi simbol esensi dan vitalitas kehidupan yang tak lekang oleh waktu.`,
              
                "introversion" : "Merangkul Introversi: Menavigasi Kedalaman Hidup yang Tenang",
                "introversion_content": "Introversi, sering disalahpahami di dunia yang menganut ekstroversi, adalah ciri kepribadian yang ditandai dengan preferensi untuk menyendiri dan introspeksi.<br><br>" +
                                        "Jika orang ekstrover tumbuh subur di lingkungan sosial, orang introvert menemukan hiburan dan memulihkan tenaga dalam kesendirian. Berlawanan dengan kepercayaan umum, introversi tidak identik dengan rasa malu atau kecemasan sosial; sebaliknya, ini mencerminkan cara unik dalam memproses dan berinteraksi dengan dunia.<br><br>" +
                                        "Bagi introvert, interaksi sosial bisa menguras tenaga, sehingga membutuhkan waktu sendirian untuk mengisi kembali cadangan energi mereka. Kebutuhan akan kesendirian ini bukanlah tanda perilaku antisosial melainkan kecenderungan alami untuk berefleksi, memulihkan tenaga, dan melakukan introspeksi yang bermakna. Introvert sering kali memiliki dunia batin yang kaya, berkembang dalam lingkungan yang memungkinkan pemikiran mendalam, kreativitas, dan introspeksi.<br><br>" +
                                        "Meskipun introversi mungkin menghadirkan tantangan di dunia yang menghargai sifat-sifat ekstrovert seperti ketegasan dan sikap ramah, introvert membawa kekuatan yang berharga. Mereka unggul dalam tugas-tugas yang membutuhkan fokus, perhatian terhadap detail, dan kerja mandiri. Kemampuan mereka untuk mendengarkan dengan penuh perhatian dan berpikir secara mendalam sering kali menghasilkan wawasan mendalam dan solusi inovatif.<br><br>" +
                                        "Meskipun ada tekanan masyarakat untuk menyesuaikan diri dengan norma-norma ekstrovert, introvert dapat menemukan kepuasan dan kesuksesan dengan menerima kualitas unik mereka. Dengan menghormati kebutuhan mereka akan kesendirian dan refleksi diri, para introvert dapat menumbuhkan rasa kedamaian batin dan keaslian. Daripada memandang introversi sebagai sebuah keterbatasan, mereka dapat memanfaatkan kelebihannya untuk mencapai tujuan mereka dan berkontribusi secara berarti kepada masyarakat.<br><br>" +
                                        "Di dunia yang sering kali lebih menghargai kuantitas daripada kualitas dalam interaksi sosial, introvert menawarkan pengingat akan pentingnya kedalaman dan keaslian dalam hubungan. Kemampuan mereka untuk mendengarkan, mengamati, dan berempati memperkaya hubungan interpersonal dan menumbuhkan pemahaman yang tulus.<br><br>" +
                                        "Pada akhirnya, introversi bukanlah kelemahan yang harus diatasi tetapi sebuah anugerah yang harus dirayakan. Dengan menerima sifat introvert mereka dan menghormati kebutuhan mereka akan kesendirian, introvert dapat menjalani kehidupan yang memiliki tujuan, keaslian, dan kepuasan, menavigasi kedalaman kehidupan yang tenang dengan rahmat dan ketahanan.",
            }
        };

        for (const key in languageText[selectedLanguage]) {
            const element = document.querySelector('.' + key);
            if (element) {
                element.innerHTML = languageText[selectedLanguage][key];
            }
        }
    }

        // Toggle mode event listener
    const toggleButton = document.getElementById('toggle-button');
    toggleButton.addEventListener('click', toggleMode);

    function toggleMode() {
        document.body.classList.toggle('light-mode');

        // Save mode preference to local storage
        const isLightMode = document.body.classList.contains('light-mode');
        localStorage.setItem('lightMode', isLightMode);
    }

    // Check local storage for mode preference
    const isLightMode = JSON.parse(localStorage.getItem('lightMode'));
    if (isLightMode) {
        document.body.classList.add('light-mode');
    } else {
        document.body.classList.remove('light-mode'); // Tambahkan ini untuk memastikan mode default ketika tidak ada preferensi tersimpan
    }

     // Toggle Light/Dark Mode
     toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('light-mode');
        
        // Mengubah gambar tombol toggle
        const toggleImg = toggleButton.querySelector('img');
        if (document.body.classList.contains('light-mode')) {
            toggleImg.src = 'img/off-button.png';
            toggleImg.alt = 'Toggle Light';
        } else {
            toggleImg.src = 'img/on-button.png';
            toggleImg.alt = 'Toggle Dark';
        }
    });

    
});
