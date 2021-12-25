// オブジェクトの分割代入のデフォルト値
const myProfile = {
  name: "鈴木",
  age: 35,
}

const {sex = "女"} = myProfile;
console.log(sex);

// 配列の分割代入のデフォルト値
const horses = ["トウカイテイオー", "オグリキャップ", "シンザン"];

const [horse1, horse2, horse3, horse4 = "ビワハヤヒデ"] = horses;
console.log(horse4);
