// JavaScript to add the "active" class to the current page link
document.addEventListener('DOMContentLoaded', function() {
    var currentPath = window.location.pathname;

    // Find the link with the corresponding href and add the "active" class
    var currentLink = document.querySelector('.navbar a[href="' + currentPath + '"]');
    if (currentLink) {
        currentLink.classList.add('active');
    }
});


document.addEventListener('DOMContentLoaded', function () {
    var dropdownButtons = document.querySelectorAll('.dropdown button');

    dropdownButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var dropdown = this.nextElementSibling; 

            
            dropdown.classList.toggle('hidden');

            
            dropdownButtons.forEach(function (otherButton) {
                if (otherButton !== button) {
                    otherButton.nextElementSibling.classList.add('hidden');
                }
            });
        });
    });
});
