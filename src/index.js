import Generator from './modules/CPFgenerator';
import ValidaCPF from './modules/ValidaCPF'

import './assets/css/styles.css';

(function () {
    const generator = new Generator();
    const resultado = document.querySelector('.resultado');
    const btResult = document.querySelector('.btResult');

    btResult.addEventListener('click', () => {
        resultado.innerHTML = generator.cpfGenerator();
    });

    const inputCPF = document.querySelector('#recebeCPF');

    inputCPF.addEventListener('input', () => {
        inputCPF.value = inputCPF.value.replace(/\D/g, '');
    });

    const btValid = document.querySelector('.btValid');


    btValid.addEventListener('click', (e) => {
        e.preventDefault('submit');

        const resultado2 = document.querySelector('.resultado2')
        inputCPF.value = inputCPF.value.replace(/\D/g, '');
        const validaCPF = new ValidaCPF(inputCPF.value)

        if (inputCPF.value.trim() === '') return

        if (validaCPF.valida()) {
            resultado2.innerHTML = 'CPF válido';
            resultado2.classList.add('CPFvalido')
            resultado2.classList.remove('CPFinvalido')
        } else {
            resultado2.innerHTML = 'CPF inválido';
            resultado2.classList.add('CPFinvalido')
            resultado2.classList.remove('CPFvalido')
        }

    })


    inputCPF.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();

            btValid.click();
        }

    })
})();