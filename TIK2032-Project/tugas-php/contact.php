<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    <title>My Homepage</title>
    <link rel="stylesheet" href="tugas-css/contact.css">
    <script src="contact.js" defer></script>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="index.html">Ho<span>me</span></a></li>
                <li><a href="gallery.html">Gal<span>lery</span></a></li>
                <li><a href="blog.html">Bl<span>og</span></a></li>
                <li><a href="contact.html">Con<span>tact</span></a></li>
                <li id="toggle-button"><img src="img/off-button.png" alt="Toggle Dark/Light Mode"></li>
            </ul>
        </nav>
    </header>

    <div id="language-dropdown"></div>

    <div class="container">
        <div id="about" class="animate-scroll">
            <h2 class="bagian1"><span>My</span> Contacts</h2>
            <p class="bagian6">If you are interested in me, <span>please contact me.</span></p>
        </div>
        <div class="content-wrapper">
            <div class="contact-info">
                <div class="contact-box" id="email">
                    <img class="icon" src="img/icons8-email-30.png" alt="email icon">
                    <div class="text">
                        <h3 class="bagian2">Email</h3>
                        <p><a href="mailto:arthurunsong01@gmail.com">arthurunsong01@gmail.com</a></p>
                    </div>
                </div>
                
                <div class="contact-box" id="phone">
                    <img class="icon" src="img/icons8-phone-50.png" alt="phone icon">
                    <div class="text">
                        <h3 class="bagian3">Phone</h3>
                        <p>+6282272000408</p>
                    </div>
                </div>
                
                <div class="contact-box" id="instagram">
                    <img class="icon" src="img/icons8-instagram-32.png" alt="instagram icon">
                    <div class="text">
                        <h3 class="bagian4">Follow</h3>
                        <h4 class="bagian5">Instagram</h4>
                        <p><a href="https://www.instagram.com/arthhhzzz_/#">arthhhzzz_</a></p>
                    </div>
                </div>
            </div>
        
            <div class="contact-form">
                <form action="process_contact.php" method="post">
                    <input type="text" name="name" placeholder="Your Name">
                    <input type="email" name="email" placeholder="Your Email">
                    <textarea name="message" placeholder="Your Message"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    </div>
    
    <div style="text-align: center;">
        <p><span>© Arthur Unsong.</span> All rights reserved.</p>
    </div>
</body>
</html>
