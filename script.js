// script.js
let count = 0;
const popcat = document.getElementById('popcat');
const counter = document.getElementById('counter');

popcat.addEventListener('click', () => {
    count++;
    counter.textContent = count;

    // Change image to 'pop' state
    popcat.src = 'cat2.png';

    // Change back to original state after 200ms
    setTimeout(() => {
        popcat.src = 'cat1.png';
    }, 200);
});
