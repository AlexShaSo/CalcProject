import readlineSync from 'readline-sync';

const calculationObject = {
  calculator: {
    read: function() {
      this.a = readlineSync.question('Введите первое число: ');
      this.b = readlineSync.question('Введите второе число: ');
    },
    sum: function() {
      return Number(this.a) + Number(this.b);
    },
    mul: function() {
      return Number(this.a) * Number(this.b);
    }
  }
};

export default calculationObject;