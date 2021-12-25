// オブジェクトの分割代入
const myProfile = {
  name: "鈴木",
  age: 35,
}

const {name, age} = myProfile;

console.log(name);
console.log(age);

// 配列の分割代入
const horses = ["トウカイテイオー", "オグリキャップ", "シンザン"];

const [horse1 , horse2] = horses;

console.log(horse1);
console.log(horse2);
