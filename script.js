document.addEventListener('DOMContentLoaded', function() {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    const lowerBoxes = document.querySelectorAll('.lower-box');

    radioButtons.forEach((radio, index) => {
        radio.addEventListener('change', function() {
            lowerBoxes.forEach((box, boxIndex) => {
                if (index === boxIndex) {
                    box.style.display = 'flex';
                } else {
                    box.style.display = 'none';
                }
            });
        });
    });
});