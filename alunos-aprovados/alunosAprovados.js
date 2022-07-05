// Alunos Aprovados
const alunos = [
    {
        nome: "Matheus",
        nota: 8.3,
        turma: "1B",
    },
    {
        nome: "Lucas",
        nota: 7.3,
        turma: "1A",
    },
    {
        nome: "João",
        nota: 3,
        turma: "1B",
    },
    {
        nome: "Luan",
        nota: 6,
        turma: "1C",
    },
    {
        nome: "Jyu",
        nota: 9,
        turma: "1C",
    },
]

function alunosAprovados(arr, media) {
    let aprovados = [];

    for(let i = 0; i < arr.length; i++) {
        
        const {nota, nome} = arr[i]

        if(nota >= media) {
            aprovados.push(nome)
        }
    }

    return aprovados;
}

console.log(alunosAprovados(alunos, 5))

// This
function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: "Maria",
    idade: 30,
}

const pessoa2 = {
    nome: "Carla",
    idade: 26,
}

const animal = {
    nome: "Spike",
    idade: 4,
    raca: "Pinscher",
}

console.log(calculaIdade.call(animal, 7)); // call

console.log(calculaIdade.apply(pessoa2, [23])); // apply