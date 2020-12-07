let calculator = {
  read(one, two) {
    this.one = one;
    this.two = two;
  },
  sum() {
    return this.one + this.two; 
  },
  mul() {
    return this.one * this.two;
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
