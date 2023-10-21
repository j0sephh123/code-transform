export default class ArrayUtils {
  static deleteObject(array, key) {
    const index = array.findIndex(({ name }) => name === key);

    if (index > -1) {
      // Swap with the last element and then remove it
      array[index] = array[array.length - 1];
      array.pop();
    }
  }
}
