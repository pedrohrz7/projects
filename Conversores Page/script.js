const metrosInput = document.getElementById('metros-value');
const kmOutput = document.getElementById('km-value');
const milhasOutput = document.getElementById('milhas-value');

function converterMetros() {
    const metros = parseFloat(metrosInput.value); // Obter o valor

    // Realizar a conversão se o valor for um número
    if (metros > 0) {
        const km = metros / 1000;
        const milhas = metros / 1609.34;

        // Exibir os resultados
        kmOutput.textContent = km;
        milhasOutput.textContent = milhas;
    } else {
        // Limpar os campos caso o valor seja inválido
        kmOutput.textContent = '';
        milhasOutput.textContent = '';
    }
}
// Texto aparecer enquanto digita
metrosInput.addEventListener('input', converterMetros);



const celsiusInput = document.getElementById('celsius-value');
const fahOutput = document.getElementById('fah-value');

function converterCelsius () {
    const celsius = parseFloat(celsiusInput.value);

    if(celsius > 0) {
        const fah = (celsius * 1.8) + 32;
        fahOutput.textContent = fah;
    }
    else {
        fahOutput.textContent = '';
    }
}
celsiusInput.addEventListener('input', converterCelsius);



const hoursInput = document.getElementById('hours-value');
const minutsOutput = document.getElementById('minuts-value');

function converterHoras () {
    const hours = parseFloat(hoursInput.value);

    if(hours > 0) {
        const minuts = hours * 60;
        minutsOutput.textContent = minuts;
    }
    else {
        minutsOutput.textContent = '';
    }
}
hoursInput.addEventListener('input', converterHoras);