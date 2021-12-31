// eslint-disable-next-line @typescript-eslint/no-unused-vars
enum Enum {
  A = 0,
  B = 'C',
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const maxLenTest = () => () => () => () => () => () => () => () => () => () => () =>
  'undefined';

(() => {
  interface Returns {
    a: number;
    b: number;
    [key: string]: number;
  }

  const test =
    (a: number, b: number) =>
      (c: number) =>
        (d: number,
         e: number,
         f: number) => {
          const r: Returns = {
            a,
            b,
            c,
            d,
            e,
            f,
          };

          return r;
        };

  return test;
})();
