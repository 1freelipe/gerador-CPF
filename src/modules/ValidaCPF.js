export default class ValidaCPF {
    constructor(cpf){
       
        if(cpf === undefined) return;

        Object.defineProperty(this, 'cpfLimpo', {
            get: function() {
                return cpf.replace(/\D+/g, '');
            }
        });   
    }

    valida() {
        if(this.cpfLimpo.length !== 11) return;
        if(this.cpfLimpo === undefined) return;
        if(this.isSequencia()) return false;

        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const calculo1 = ValidaCPF.calculo(cpfParcial);
        const calculo2 = ValidaCPF.calculo(cpfParcial + calculo1);

        if(calculo1 + calculo2 === this.cpfLimpo.slice(-2)){
            return true;
        } else {
            return false;
        }
    }

    static calculo(cpfParcial) {
        const arrayCPF = Array.from(cpfParcial);

        let regressivo = arrayCPF.length + 1;
        const digito = arrayCPF.reduce((ac, val) => {
            ac += (regressivo * Number(val));
            regressivo--;
            return ac; 
        }, 0)

        let primeiroDigito = 11 - (digito % 11)

        return primeiroDigito > 9 ? '0' : String(primeiroDigito);
    }

    isSequencia() {
        return this.cpfLimpo[0].repeat(11) === this.cpfLimpo;
    }

}

const validaCPF = new ValidaCPF('64425686446')

