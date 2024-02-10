type Person = {
    name: string;
    age: number;
    interests: string[];
};

function greet(person: Person): string {
    const interests = person.interests.join(", ");
    return `Hello, ${person.name}! I'm interested in ${interests}. How old are you?`;
}

function calculateAverage(values: number[]): number {
    const sum = values.reduce((accumulator, value) => accumulator + value, 0);
    return sum / values.length;
}

const people: Person[] = [
    { name: "John", age: 25, interests: ["music", "sports"] },
    { name: "Mary", age: 30, interests: ["movies", "books"] },
];

for (const person of people) {
    console.log(greet(person));
}

const grades = [8, 9, 7, 10];

console.log(`The average grade is: ${calculateAverage(grades)}`);
