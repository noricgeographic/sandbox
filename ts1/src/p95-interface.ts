import { allowedNodeEnvironmentFlags } from "process";

interface Human {
  name: string;
  age: number;

  talk(): void;
}

class HumanImpl implements Human {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  talk(): void {
    console.log(this.name + "は" + this.age + "歳です.");
  }
}

const taro: Human = new HumanImpl("太郎", 35);
taro.talk();

type Animal = {
  name: string;
  type: string;
  talk(): void;
};

class Cat implements Animal {
  name: string;
  type: string;

  constructor(name: string, type: string) {
    this.name = name;
    this.type = type;
  }

  talk(): void {
    console.log(this.name + "は" + this.type + "です.");
  }
}

const bob: Animal = new Cat("ボブ", "ネコ");
bob.talk();
