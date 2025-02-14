const persons = [
  {
    name: "John",
    age: 17,
    city: "New York",
  },
  {
    name: "Jane",
    age: 15,
    city: "Los Angeles",
  },
  {
    name: "Mike",
    age: 18,
    city: "Chicago",
  },
  {
    name: "Sarah",
    age: 45,
    city: "Dallas",
  },
];

console.log("Imperative Approach🌟");
// What to do ?
// How to do ?

const voteEligibilityImperative = [];

for (let i = 0; i < persons.length; i++) {
  const person = persons[i];

  if (person.age >= 18) {
    voteEligibilityImperative.push(person);
  }
}

console.log(voteEligibilityImperative);

console.log("Declarative Approach🔥");

// What to do ?
// Have to find voteEligibility in persons array

const voteEligibilityDecalarative = persons.filter((value) => value.age >= 18);

console.log(voteEligibilityDecalarative);
