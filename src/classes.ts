export class Empresa {
    public readonly name: string;
    private readonly colaboradores: Colaborador[] = [];
    protected readonly cnpj: string;

    constructor(name: string, cnpj: string) {
        this.name = name;
        this.cnpj = cnpj;
    }

    adicionaColaborador(colaborador: Colaborador): void {
        this.colaboradores.push(colaborador);
    }

    mostrarColaboradores(): void {
        for (const colaborador of this.colaboradores) {
            console.log(colaborador);
        }
    }
}

export class Colaborador {
    constructor(
        public readonly name: string,
        public readonly lastName: string,
    ) {}
}

const empresa_1 = new Empresa('Apple', '11.111.111/0001-11');
const colaborador_1 = new Colaborador('Anderson', 'Andre');
const colaborador_2 = new Colaborador('Ricardo', 'Mota');
const colaborador_3 = new Colaborador('Andressa', 'Silva');

empresa_1.adicionaColaborador(colaborador_1);
empresa_1.adicionaColaborador(colaborador_2);
empresa_1.adicionaColaborador(colaborador_3);
console.log(empresa_1);
empresa_1.mostrarColaboradores();
