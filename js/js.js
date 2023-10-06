const slices = document.querySelectorAll('.slice');
const info = document.getElementById('info');

slices.forEach(slice => {
    slice.addEventListener('click', () => {
        const valor = slice.getAttribute('data-valor');
        info.textContent = `Valor da fatia: ${valor}%`;
    });
});