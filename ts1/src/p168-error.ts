/**
 * @throws Error 2以上の場合
 */
function checkNum(num: number): boolean | Error {
  if (num < 2) {
    return true;
  }
  return new Error("エラー発生");
}

let num = checkNum(3);
console.log(num);

let input = document.createElement("input");
