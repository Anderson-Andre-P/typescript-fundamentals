enum Colors {
    RED, // 0
    GREEN, // 1
    BLUE, // 2
    // PINK = '#F03685',
    YELLOW = 101,
}

console.log(Colors);
console.log(Colors.GREEN);
console.log(Colors[1]);

function choiceColor(color: Colors): void {
    console.log(Colors[color]);
}

choiceColor(1);
