function cleanSet(mySet, startString) {
  const filteredValues = Array.from(mySet)
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');

  return filteredValues;
}
export default cleanSet;
