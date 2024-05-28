var programmingLanguages = [
  "Scala",
  "Java",
  "Go",
  "Swift",
  "Cobol",
  "JavaScript",
  "Python",
  "Ruby",
  "Elm",
  "Rust",
  "C#",
];
console.log(programmingLanguages);
for (var types of programmingLanguages) {
  console.log(`I want to learn ${types}!`);
}

programmingLanguages.forEach(function (type, index) {
  console.log(`${index + 1}. ${type.toUpperCase()}`);
});

var updatedLanguages = programmingLanguages.filter(function (item) {
  return item.includes("y");
});
console.log(updatedLanguages);
