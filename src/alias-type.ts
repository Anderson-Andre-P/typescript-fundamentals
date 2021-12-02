type HaveName = { name: string };

type HaveLastName = { lastName: string };

type HaveAge = { age: number };

type People = HaveName & HaveLastName & HaveAge;

const people: People = {
    name: 'Anderson',
    lastName: 'Eleutério',
    age: 22,
};

console.log(people);

type AB = 'A' | 'B';
type AC = 'A' | 'C';

type Intersection = AB & AC;

// Module mode
export { people };
