document.addEventListener('DOMContentLoaded', () => {
    // Get all nav links and sections
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('main section');

    // Function to hide all sections
    function hideAllSections() {
        sections.forEach(section => {
            section.style.display = 'none'; // Hide all sections
        });
    }

    // Function to show the selected section
    function showSection(targetId) {
        hideAllSections(); // Hide all sections first
        const targetSection = document.getElementById(targetId);
        targetSection.style.display = 'block'; // Show the targeted section
    }

    // Add click event listeners to each nav link
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default link behavior
            const targetId = event.target.getAttribute('data-target'); // Get the target section ID
            showSection(targetId); // Show the target section
        });
    });

    // Show the home section by default
    showSection('home');
});

document.getElementById("home").addEventListener("click", function () {
    // Get the iframe element
    var iframe = document.getElementById("innerIframe");

    // Reload the iframe by resetting its src attribute
    iframe.src = "index.html";
});
