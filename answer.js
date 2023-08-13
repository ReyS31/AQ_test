function answerFirst(firstName, data) {
  const filteredData = data.find((e) => e.firstName == firstName);
  console.log(filteredData);
}

function answerSecond(min, max) {
  const randomized = Math.random() * (max - min + 1) + min;
  console.log(Math.floor(randomized));
}

function answerThird(unformatted) {
  const formatted = unformatted
    .replace("(", "")
    .replace(")", "")
    .replace("-", "")
    .replace(" ", "");

  if (isNaN(formatted)) {
    return console.log({
      value: formatted,
      status: "not allowed",
    });
  }

  return console.log({
    value: formatted,
    status: "allowed",
  });
}

function answerFourth(numOne, numTwo) {
  const total = numOne + numTwo;
  console.log(total);
}

function answerFifth(inputted, array) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    array[index] = element + inputted;
  }

  console.log(array);
}

function answerSixth(celcius) {
  const reaumur = celcius * 0.8;
  console.log(reaumur);
}

function answerSeventh(array) {
  let percentage = 0;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    percentage += element[1];
  }

  console.log(percentage);
}

const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["Javascript", "Gaming", "Foxes"],
  },
];

console.log("first answer:");
answerFirst("Akira", contacts);

console.log("second answer:");
answerSecond(12, 16);

const unformattedArray = [
  "(021)-676767",
  "021676767",
  "021 676767",
  "O2I67b767",
];

console.log("third answer:");
for (let index = 0; index < unformattedArray.length; index++) {
  const element = unformattedArray[index];
  answerThird(element);
}

console.log("fourth answer:");
answerFourth(256, 256);

const oldArray = [1, 2, 3, 4, 5];

console.log("fifth answer:");
answerFifth(10, oldArray);

console.log("sixth answer:");
answerSixth(12);

var projects = [
  ["TPM", 19],
  ["Benefit World", 22],
  ["ROG", 2],
  ["EarnQuay", 2],
  ["Minicap", 2],
  ["BeaConnect", 2],
  ["Cyboz", 2],
  ["SG-Cap", 2],
];

console.log("seventh answer:");
answerSeventh(projects);
