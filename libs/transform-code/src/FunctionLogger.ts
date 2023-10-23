export default class FunctionLogger<T extends (...args: any[]) => any> {
  private fn: T;

  constructor(fn: T) {
    this.fn = fn;
  }

  invoke(args: any[]): ReturnType<T> {
    // Note that 'args' is now an array
    const [node] = args;
    console.log(`${node.type} called`);
    return this.fn(...args);
  }
}
