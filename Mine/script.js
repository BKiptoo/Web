document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.querySelector('.toggle_btn');
    const toggleBtnIcon = document.querySelector('.toggle_btn i');
    const dropDownMenu = document.querySelector('.dropdown_menu');
    
    toggleBtn.addEventListener('click', function() {
        dropDownMenu.classList.toggle('open');
        toggleBtnIcon.classList.toggle('fa-bars');
        toggleBtnIcon.classList.toggle('fa-times');
    });
});

document.addEventListener('DOMContentLoaded', function() {
        const homeLink = document.getElementById('home-link');
        const heroSection = document.getElementById('hero');
        
        homeLink.addEventListener('click', function(event) {
            event.preventDefault();
            heroSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        const aboutLink = document.querySelector('a[href="#about"]');
        const aboutSection = document.getElementById('about');
        
        aboutLink.addEventListener('click', function(event) {
            event.preventDefault();
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        });
    });