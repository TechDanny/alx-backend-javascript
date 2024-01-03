/* change keywords */
export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  /* disable */
  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }

  return [task, task2];
}
