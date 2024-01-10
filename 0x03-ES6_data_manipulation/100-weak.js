export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  let num = weakMap.get(endpoint) || 0;
  num += 1;

  if (num >= 5) {
    throw new Error('Endpoint load is high');
  } else {
    weakMap.set(endpoint, num);
  }
}
