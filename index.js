// Code your solution here
//make a function names "findMatching"
function findMatching(collection, name) {
  return collection.filter(
    (match) => match.toLowerCase() === name.toLowerCase()
  );
}

function fuzzyMatch(collection, name) {
  const lengthName = name.length;
  return collection.filter((match) => match.slice(0, lengthName) === name);
}

function matchName(collection, str) {
  return collection.filter((match) => match.name === str);
}
