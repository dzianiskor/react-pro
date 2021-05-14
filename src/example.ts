// Работа с простыми типами
type TypeConcat = (str1: string, str2: string) => string;

const concat: TypeConcat = (str1, str2) => str1 + str2;
concat('Hello ', 'World'); // -> Hello World;

// Работа с интерфейсами
interface MyHometaskInterface {
  howIDoIt: string;
  simeArray: (string | number)[];
  withData?: MyHometaskInterface[];
}

const myHometask: MyHometaskInterface = {
  howIDoIt: 'I Do It Wel',
  simeArray: ['string one', 'string two', 42],
  withData: [{ howIDoIt: 'I Do It Wel', simeArray: ['string one', 23] }],
};
myHometask.howIDoIt = 'TEst';

// Типизация функций, используя Generic
interface MyArray<T> {
  [N: number]: T;
  reduce<U>(fn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;
}
const tsArr: MyArray<number> = [1, 2, 3];
tsArr.reduce((a, b) => a + b, 0);
