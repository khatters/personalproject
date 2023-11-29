// JavaScript to add the "active" class to the current page link
document.addEventListener('DOMContentLoaded', function() {
    var currentPath = window.location.pathname;

    // Find the link with the corresponding href and add the "active" class
    var currentLink = document.querySelector('.navbar a[href="' + currentPath + '"]');
    if (currentLink) {
        currentLink.classList.add('active');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('click', function() {
            // Toggle the 'active' class on the clicked dropdown
            this.classList.toggle('active');

            // Close other dropdowns when one is clicked (optional)
            dropdowns.forEach(function(otherDropdown) {
                if (otherDropdown !== dropdown) {
                    otherDropdown.classList.remove('active');
                }
            });
        });
    });
});
