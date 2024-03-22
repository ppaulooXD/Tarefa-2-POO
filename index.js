class Conta {
    constructor(numero, titular, saldo) {
        this.numero = numero;
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Depósito de ${valor} realizado com sucesso na conta ${this.numero}.`);
        } else {
            console.log("O valor do depósito deve ser maior que zero.");
        }
    }

    retirar(valor) {
        if (valor > 0) {
            if (valor <= this.saldo) {
                this.saldo -= valor;
                console.log(`Retirada de ${valor} realizada com sucesso na conta ${this.numero}.`);
                return valor;
            } else {
                console.log("Saldo insuficiente.");
                return 0;
            }
        } else {
            console.log("O valor da retirada deve ser maior que zero.");
            return 0;
        }
    }
}

class AgenciaBancaria {
    constructor(codigo) {
        this.contas = [];
        this.codigo = codigo;
    }

    addConta(conta) {
        this.contas.push(conta);
    }

    getConta(numero) {
        return this.contas.find(conta => conta.numero === numero);
    }

    listContas() {
        let lista = "Contas da agência:\n";
        this.contas.forEach(conta => {
            lista += `Número: ${conta.numero}, Titular: ${conta.titular}, Saldo: ${conta.saldo}\n`;
        });
        return lista;
    }
}

const agencia = new AgenciaBancaria(123);
const conta1 = new Conta(1, "João", 1000);
const conta2 = new Conta(2, "Maria", 2000);

agencia.addConta(conta1);
agencia.addConta(conta2);

console.log(agencia.listContas());

conta1.depositar(500);
conta2.retirar(100);

console.log(agencia.listContas());
