export function LogExecutionTime() {

  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {

    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
      
      const returnValue = originalMethod.apply(this, args);
      return returnValue;
    }

    return descriptor;
  }
}