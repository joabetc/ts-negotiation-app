export function LogExecutionTime() {

  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {

    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
      console.log('----------------');
      console.log(`Parameters for ${propertyKey} method: ${JSON.stringify(args)}`);
      const t1 = performance.now();
      const returnValue = originalMethod.apply(this, args);
      const t2 = performance.now();
      console.log(`Returned value from ${propertyKey} method: ${JSON.stringify(returnValue)}`);
      console.log(`The ${propertyKey} method tooked ${t2 - t1}ms`);
      return returnValue;
    }

    return descriptor;
  }
}