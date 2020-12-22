import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.elem = this.render();
  }

  onClick = () => {
    if (event.target.closest('button')) {
      this.wrap.dispatchEvent(new CustomEvent('product-add', {
        detail: this.product.id, 
        bubbles: true
      }));
    }
  };

  render() {
    if (!this.wrap) {
      this.wrap = document.createElement('div');
      this.wrap.classList.add('card');
      this.wrap.addEventListener('click', this.onClick);
    }
    const template = `
    <div class="card__top">
        <img src="../../assets/images/products/${this.product.image}" class="card__image" alt="product">
        <span class="card__price">€${this.product.price.toFixed(2)}</span>
    </div>
    <div class="card__body">
        <div class="card__title">${this.product.name}</div>
        <button type="button" class="card__button">
            <img src="../../assets/images/icons/plus-icon.svg" alt="icon">
        </button>
    </div>`;
    this.wrap.insertAdjacentHTML('afterbegin', template);
  
    this.wrap.addEventListener('product-add', event => {
      event.detail
    });
   
    return this.wrap;
  }
 
  
}









// this.wrap.onclick = function() {
//   let target = event.target;
//   if (target.closest('button')) {
//     // event.detail
//     this.dispatchEvent(new CustomEvent("product-add", {
//       detail: this.product.id, 
//       bubbles: true
//     }));
//   }
// }


// this.wrap.addEventListener('product-add', function() {
  
//   console.log(event.detail);
// });