export const LogMethod = (): MethodDecorator => {
  return (target, propertyKey, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      console.log(`Llamando al método: ${String(propertyKey)}`);
      return originalMethod.apply(this, args);
    };
    return descriptor;
  };
};
