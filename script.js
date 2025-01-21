document.body.addEventListener('mousemove', function(event) {
    const backgroundElement = document.querySelector('.background-element');
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    backgroundElement.style.transform = `translate(-50%, -50%) translate(${mouseX / 10}px, ${mouseY / 10}px)`;
});

function determineGeneration() {
    let birthYear = parseInt(document.getElementById('birthYear').value);
    let output = document.getElementById('output');

    if (birthYear < 1925) {
        output.innerText = 'თქვენ სავარაუდოდ გარდაცვლილი ბრძანდებით.';
    } else if (birthYear > 2025) {
        output.innerText = 'თქვენ ჯერ არ დაბადებულხართ.';
    } else if (birthYear === 2025) {
        output.innerText = 'შენ ხარ: Gen Beta';
    } else if (birthYear >= 2010 && birthYear <= 2024) {
        output.innerText = 'შენ ხარ: Gen Alpha';
    } else if (birthYear >= 1995 && birthYear <= 2009) {
        output.innerText = 'შენ ხარ: Gen Z';
    } else if (birthYear >= 1980 && birthYear <= 1994) {
        output.innerText = 'შენ ხარ: Gen Y';
    } else if (birthYear >= 1965 && birthYear <= 1979) {
        output.innerText = 'შენ ხარ: Gen X';
    } else if (birthYear >= 1946 && birthYear <= 1964) {
        output.innerText = 'შენ ხარ: Boomer';
    } else if (birthYear >= 1925 && birthYear <= 1945) {
        output.innerText = 'შენ ხარ: Builder';
    } else {
        output.innerText = 'შეიყვანე მხოლოდ დაბადების წელი';
    }
}
