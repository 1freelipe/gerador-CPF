import ValidaCPF from './ValidaCPF'

export default class Generator {
    rand(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) + min));
    }    

    format(cpf) {
        return `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9, 11)}`
    }

    cpfGenerator() {
        const cpfSemDigito = this.rand();
        const digito1 = ValidaCPF.calculo(cpfSemDigito);
        const digito2 = ValidaCPF.calculo(cpfSemDigito + digito1);
        const newCPF = cpfSemDigito + digito1 + digito2;
        return this.format(newCPF);
    }
}


