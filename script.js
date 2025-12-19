const input = document.getElementById('num');
const result = document.getElementById('result');

input.addEventListener('blur', function () {
    const values = input.value.split(',');

    let sum = 0;
    let count = 0;

    for (let value of values) {
        const number = parseFloat(value.trim());

        if (!isNaN(number)) {
            sum += number;
            count++;
        }
    }

    if (count > 0) {
        const average = sum / count;
        result.textContent = `Середнє арифметичне: ${average}`;
    } else {
        result.textContent = 'Введіть коректні числа';
    }
});
