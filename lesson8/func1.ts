const users = [
  {
    name: "John",
    age: 33,
  },
  {
    name: "Maxine",
    age: 24,
  },
  {
    name: "Ted",
    age: 12,
  },
];

const ageLimit = 18;
function checkAge(user) {
  return user.age >= ageLimit;
}

function pureCheckAge(age, ageLimit) {
  return age >= ageLimit;
}

pureCheckAge(25, 18);

checkAge(users[0]);

checkAge(users[1]);

checkAge(users[2]);
