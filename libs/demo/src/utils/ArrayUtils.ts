export default class ArrayUtils {
  static deleteObject(array, key) {
    const index = array.findIndex(({ name }) => name === key);

    if (index > -1) {
      // array[index] = array[array.length - 1];
      // array.pop();

      array.splice(index, 1);
    }
  }
}
