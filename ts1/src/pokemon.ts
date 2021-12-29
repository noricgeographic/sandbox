export class Pokemon {
  private name: string;
  private hp: number;

  constructor(name: string, hp: number) {
    this.name = name;
    this.hp = hp;
  }

  public status(): void {
    console.log(this.name + "のHPは" + this.hp + "です。");
  }
}
