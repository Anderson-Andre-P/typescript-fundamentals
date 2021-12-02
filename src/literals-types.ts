let x = 10; // eslint-disable-line

x = 0b1010;
const y = 10;

let a = 100 as const; // eslint-disable-line

const people = {
    name: 'Anderson' as const,
    lastName: 'Eleuterio',
};

function choiceTheColor(color: 'Red' | 'Yellow' | 'Blue'): string {
    return color;
}

console.log(choiceTheColor('Red'));

// Module mode
export default 1;
