export function LogClassInstance() {

  return function(constructor: any) {
    const original = constructor;

    const newConstructor: any = function(...args: any[]) {
      console.log('Creating an instance with New: ' + original.name);
      return new original(...args);
    }

    newConstructor.prototype = original.prototype;

    return newConstructor;
  }
}