export default class FunctionLogger<T extends (...args: any[]) => any> {
  private fn: T;

  constructor(fn: T) {
    this.fn = fn;
  }

  invoke(...args: Parameters<T>): ReturnType<T> {
    console.log(`${this.fn.name} called`);
    return this.fn(...args);
  }
}
