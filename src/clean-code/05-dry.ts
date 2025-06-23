class Product {
  constructor(public name: string) { }

  isProductIsReady(): boolean {
    const properties = this
    for (const key in properties) {
      switch (typeof this[key]) {
        case 'string':
          if ((<string><unknown>this[key]).length <= 0) throw Error(`${key} is empty`);
          break;
        case 'number':
          if ((<number><unknown>this[key]) <= 0) throw Error(`${key} is zero`);
          break;
        default:
          throw Error(`${typeof this[key]} is not valid`);
      }
    }

    return true
  }

  tostring() {
    if (!this.isProductIsReady()) return;

    return `${this.name}`
  }
}


(() => {

  const bluePanst = new Product('Blue Large Pants')
  console.log(bluePanst)
})();
