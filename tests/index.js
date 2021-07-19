export const describe = function (msg, callback) {
  setTimeout(() => {}, 1000);
  console.log(`* ${msg}`);
  callback();
};
export const it = function (msg, callback) {
  console.log(`\t- ${msg}`);
  callback();
};
export const expect = function (actual) {
  return {
    toBe: function (expected) {
      const res = expected === actual;
      if (res) {
        console.log("\t\tpassed");
      } else {
        console.log(
          `\t\tfailed \t\t expected = ${expected} actual = ${actual}`
        );
      }
      return res;
    },
    notToBe: (expected) => {
      const res = expected === actual;
      console.log(`\t\t expected = ${expected} actual = ${actual}`);
      if (!res) {
        console.log("\t\tpassed");
      } else {
        console.log("\t\tfailed");
      }
    },
    toEqual: (expected) => {
      const res = JSON.stringify(actual) === JSON.stringify(expected);
      if (res) {
        console.log("\t\tpassed");
      } else {
        console.log(`\t\tfailed expected = ${expected} actual = ${actual}`);
      }
      return res;
    },
  };
};
