// Работа с простыми типами
type TypeConcat = (str1: string, str2: string) => string;

let concat: TypeConcat = (str1, str2) => str1 + str2;
concat("Hello ", "World"); // -> Hello World;

// Работа с интерфейсами
interface InnerInterface {
  [n: string]: string | (string | number)[];
}

interface MyHometaskInterface {
  howIDoIt: string;
  simeArray: (string | number)[];
  withData: InnerInterface[];
}

const myHometask: MyHometaskInterface = {
  howIDoIt: "I Do It Wel",
  simeArray: ["string one", "string two", 42],
  withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
};

// Типизация функций, используя Generic
interface MyArray<T> {
  [N: number]: T;
  reduce(
    fn: (
      previousValue: T,
      currentValue: T,
      currentIndex: number,
      array: T[]
    ) => T
  ): T;
}
const tsArr: MyArray<number> = [1, 2, 3];
tsArr.reduce((a, b) => a + b);
