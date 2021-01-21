import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = this.render();
  }

  onClick = (event) => {
    let target = event.target;
    for (let item of document.querySelectorAll('.ribbon__item')) {
      item.classList.remove('ribbon__item_active');
    }
    target.classList.add('ribbon__item_active');

    let ce = new CustomEvent('ribbon-select', {
      detail: target.dataset.id, 
      bubbles: true 
    });
    this.wrap.dispatchEvent(ce);
  }

  render() {
    if (!this.wrap) {
      this.nav = document.createElement('NAV');
      this.nav.classList.add('ribbon__inner');
      this.wrap = document.createElement('DIV');
      this.wrap.classList.add('ribbon');
      this.wrap.append(this.nav);
      this.right = ` <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
      <img src="../../assets/images/icons/angle-icon.svg" alt="icon">
      </button>
    </div>`;
      this.left = `<button class="ribbon__arrow ribbon__arrow_left ">
      <img src="../../assets/images/icons/angle-icon.svg" alt="icon">
    </button>`;
    }
    
    let oneElem = Array.from(this.categories).map(item => {
      const template = `<a href="#" class="ribbon__item" data-id="${item.id}">${item.name}</a>`;
      return template;
    }).join('');
  
    this.nav.insertAdjacentHTML('afterbegin', oneElem);
    this.wrap.insertAdjacentHTML('afterbegin', this.right);
    this.wrap.insertAdjacentHTML('afterbegin', this.left);
    this.wrap.addEventListener('click', this.onClick);
    
    //Скролим меню по нажамию на стрелку
    this.wrap.addEventListener('click', () => {
      let ribbonInner = document.querySelector('.ribbon__inner');
      if (event.target.closest('.ribbon__arrow_right')) {
        ribbonInner.scrollBy(350, 0);
      }
      if (event.target.closest('.ribbon__arrow_left')) {
        ribbonInner.scrollBy(-350, 0);
      }
    });

    this.wrap.addEventListener('ribbon-select', function() {
      event.target.dataset.id = event.detail;
    });

    // Скрываем стрелки при достижении крайних значаний срола
    this.nav.addEventListener('scroll', function() {
      let ribbonInner = document.querySelector('.ribbon__inner');
      let scrollLeft = ribbonInner.scrollLeft;
      let scrollWidth = ribbonInner.scrollWidth;
      let clientWidth = ribbonInner.clientWidth;
      let scrollRight = scrollWidth - scrollLeft - clientWidth; // число пикселей, например, 100 или 0.
      if (scrollLeft > 0) {
        document.querySelector('.ribbon__arrow_left').classList.add('ribbon__arrow_visible');
      } else {
        document.querySelector('.ribbon__arrow_left').classList.remove('ribbon__arrow_visible');
      }
      if (scrollRight < 1) {
        document.querySelector('.ribbon__arrow_right').classList.remove('ribbon__arrow_visible');
      } else {
        document.querySelector('.ribbon__arrow_right').classList.add('ribbon__arrow_visible');
      }
    });


    return this.wrap;
  }
}
