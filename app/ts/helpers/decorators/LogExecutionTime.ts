export function LogExecutionTime(isSeconds: boolean = false) {

  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {

    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
      let unity = 'ms';
      let divider = 1;
      if (isSeconds) {
        unity = 's';
        divider = 1000;
      }

      console.log('----------------');
      console.log(`Parameters for ${propertyKey} method: ${JSON.stringify(args)}`);
      const t1 = performance.now();
      const returnValue = originalMethod.apply(this, args);
      const t2 = performance.now();
      console.log(`Returned value from ${propertyKey} method: ${JSON.stringify(returnValue)}`);
      console.log(`The ${propertyKey} method tooked ${(t2 - t1)/divider}${unity}`);
      return returnValue;
    }

    return descriptor;
  }
}