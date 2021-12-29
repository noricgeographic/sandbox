class Persion {
  private sei: string;
  private mei: string;

  constructor(sei: string, mei: string) {
    this.sei = sei;
    this.mei = mei;
  }

  public getName(): string {
    return this.sei + this.mei;
  }
}

const person = new Persion("山田", "花子");
console.log(person);
console.log(person.getName());
