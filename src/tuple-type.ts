const data_1: [number, string] = [1, 'Text'];
const data_2: [number, string, string] = [1, 'Text', 'Text'];
const data_3: [number, string, string, string?] = [1, 'Text', 'Text', 'Text'];
const data_4: [number, string, ...string[]] = [1, 'Text', 'Text'];

data_1[0] = 2;
data_1[1] = 'Text...';

console.log(data_1);
console.log(data_2);
console.log(data_3);
console.log(data_4);

const array_1: readonly string[] = ['Text', 'Text'];
const array_2: ReadonlyArray<string> = ['Text', 'Text'];
