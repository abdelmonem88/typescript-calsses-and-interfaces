interface Person {
  name: string;
  isHungry: boolean;
}

const men3m: Person = {
  name: 'abdelmonem',
  isHungry: true,
};

class PersonOne implements Person {
  name: string = 'men3m';
  isHungry: boolean = true;
  constructor() {}

  printName() {
    console.log(this.name);
  }
}
