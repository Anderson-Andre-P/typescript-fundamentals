/* eslint-disable */

// Basic types (aqui ocorre inferência de tipos)
let nome: string = 'Anderson';
let segundoNome: string = 'André'
let idade: number = 22
let adulto: boolean = true
let simbolo: symbol = Symbol('qualquer symbol')
// let big: bigint = 10n

// Arrays
let arrayOfNumbers: Array<number> = [1, 2, 3];
let arrayOfNumbers_2: number[] = [1, 2, 3];
let arrayOfStrings: Array<string> = ['a', 'b', 'c'];
let arrayOfStrings_2: string[] = ['a', 'b', 'c'];

// Objects
let people: { name: string, age: number, adult?: boolean} = {
    name: 'Anderson',
    age: 22,
    adult: true  // adult is an optional value
}

console.log(people.name)

// Functions
function sum(x: number, y: number): number {
    return x + y
}

const result = sum(2, 6)

const sum2: (x: number, y:number) => number = (x, y) => x + y
