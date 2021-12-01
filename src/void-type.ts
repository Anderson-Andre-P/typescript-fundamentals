function noneReturn(...args: string[]): void {
    console.log(args.join(' '));
}

const people = {
    name: 'Steve',
    lastName: 'Jobs',

    showName(): void {
        console.log(this.name + ' ' + this.lastName);
    },
};

people.showName();

noneReturn('Apple', 'IPhone');

export { people };
