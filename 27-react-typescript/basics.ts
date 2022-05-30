function sum(a: number, b: number) {
  return a + b;
}

function appendArrayValue<T>(oldArray: T[], oldValue: T) {
  const newArray = [oldValue, ...oldArray];

  return newArray;
}

const demoArray  = [1,2,3];

const newArray = appendArrayValue( demoArray, -2 );

const newArray1 = appendArrayValue( ['a', 'b'], 'c' );

console.log(newArray);