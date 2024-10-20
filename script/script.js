// Function to show content based on menu item click
function showContent(sectionId) {
    // Hide all content sections
    var contents = document.querySelectorAll('.content-box');
    contents.forEach(function(content) {
        content.classList.add('hidden');
    });

    // Show the clicked section
    var section = document.getElementById(sectionId);
    section.classList.remove('hidden');

    // Add fade-in effect
    section.style.opacity = '0';
    section.style.transform = 'scale(0.9)';
    setTimeout(function() {
        section.style.opacity = '1';
        section.style.transform = 'scale(1)';
    }, 100);
}
