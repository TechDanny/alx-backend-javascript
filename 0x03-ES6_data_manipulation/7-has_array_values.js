function hasValuesFromArray(Set, Array) {
  return Array.every((value) => Set.has(value));
}
export default hasValuesFromArray;
