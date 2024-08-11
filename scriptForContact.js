// Theme Toggle Functionality
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    
    // Save the current theme in localStorage
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Apply the saved theme on page load
window.addEventListener('load', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
});

// Contact via Email
document.getElementById('contact-button').addEventListener('click', function() {
    window.location.href = 'https://mail.google.com/mail/?view=cm&fs=1&to=nanikarthik550@gmail.com';
});
