const numberOfAdvice = document.querySelector('h1');
const advice = document.querySelector('.advice');
const btn = document.querySelector('button');

const API_URL = 'https://api.adviceslip.com/advice';

async function fetchAPIData() {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();
    return data;
}

async function displayAdvice() {
    const data = await fetchAPIData();

    console.log(data);

    numberOfAdvice.textContent = `Advice # ${data.slip.id}`;
    advice.textContent = `${data.slip.advice}`;
}

btn.addEventListener('click', () => {
    displayAdvice();
})

document.addEventListener('DOMContentLoaded', displayAdvice);