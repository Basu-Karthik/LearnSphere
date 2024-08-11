// Toggle between login and registration forms
function toggleAuthMode() {
    const authTitle = document.getElementById('auth-title');
    const registerExtraFields = document.getElementById('register-extra-fields');
    const toggleAuthModeText = document.getElementById('toggle-auth-mode');

    if (authTitle.textContent === 'Login') {
        authTitle.textContent = 'Register';
        registerExtraFields.style.display = 'block';
        toggleAuthModeText.innerHTML = 'Already have an account? <a href="#" onclick="toggleAuthMode()">Login</a>';
    } else {
        authTitle.textContent = 'Login';
        registerExtraFields.style.display = 'none';
        toggleAuthModeText.innerHTML = 'Don\'t have an account? <a href="#" onclick="toggleAuthMode()">Register</a>';
    }
}

// Simulate authentication form submission
function submitAuthForm() {
    // For demonstration, we'll just switch to the profile section after submission
    document.getElementById('auth-section').style.display = 'none';
    document.getElementById('profile-section').style.display = 'block';
}

// Update profile details (just a mock for demo)
function updateProfile() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    document.getElementById('profile-name').textContent = name;
    alert('Profile updated!');
}

// Toggle theme between light and dark
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});
