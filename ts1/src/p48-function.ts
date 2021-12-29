// 名前付き関数
function createName(sei: string, mei: string) {
  return sei + mei;
}
console.log(createName("山田", "太郎"));

// 関数式
let createName2 = function (sei: string, mei: string) {
  return sei + mei;
};
console.log(createName2("山田2", "太郎2"));

// アロー関数
let createName3 = (sei: string, mei: string) => {
  return sei + mei;
};
console.log(createName3("山田3", "太郎3"));

// アロー関数の省略記法
let createName4 = (sei: string, mei: string) => sei + mei;
console.log(createName4("山田4", "太郎4"));

// デフォルトパラメータ
let createName5 = (sei: string, mei: string, middle: string = "") => {
  return sei + middle + mei;
};
console.log(createName5("山田5", "太郎5"));
console.log(createName5("山田5", "太郎5", "ダニエル"));
