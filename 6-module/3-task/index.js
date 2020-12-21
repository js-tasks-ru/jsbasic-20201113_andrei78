import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = this.render();
    
  }
  onClick = (event) => {
    if (event.target.closest('.carousel__button')) {
      console.log('click')
      let ce = new CustomEvent('product-add', {
        detail: event.target.closest('.carousel__slide').dataset.id, 
        bubbles: true 
      });
      this.wrap.dispatchEvent(ce);
    }
  }

  render() {
    let position = 0;
    
    if (!this.wrap) {
      this.wrap = document.createElement('DIV');
      this.wrap.classList.add('carousel');

      this.inner = document.createElement('DIV');
      this.inner.classList.add('carousel__inner');
      this.wrap.append(this.inner);
      this.rightArrow = `<div class="carousel__arrow carousel__arrow_right">
      <img src="../../assets/images/icons/angle-icon.svg" alt="icon">
      </div>`;
      this.leftArrow = ` <div style="display:none" class="carousel__arrow carousel__arrow_left">
      <img src="../../assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>`;
      
    }

    let oneSlide = Array.from(this.slides).map(item => {
      const template = `<div class="carousel__slide" data-id="${item.id}">
      <img src="../../assets/images/carousel/${item.image}" class="carousel__img" alt="slide">
      <div class="carousel__caption">
        <span class="carousel__price">€${item.price.toFixed(2)}</span>
        <div class="carousel__title">${item.name}</div>
        <button type="button" class="carousel__button">
          <img src="../../assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    </div>`;
      
      return template;
    }).join('');

    this.wrap.insertAdjacentHTML('afterbegin', this.rightArrow);
    this.wrap.insertAdjacentHTML('afterbegin', this.leftArrow);
    this.inner.insertAdjacentHTML('afterbegin', oneSlide);

   
    this.wrap.addEventListener('click', function() {
      let inner = document.querySelector('.carousel__inner');
      if (event.target.closest('.carousel__arrow_right')) {
        position -= inner.offsetWidth;
        inner.style.transform = `translateX(${position + 'px'} )`;
        if (position === -(document.querySelector('.carousel__inner').children.length * inner.offsetWidth - inner.offsetWidth)) {
          event.target.closest('.carousel__arrow_right').style.display = 'none';
        } 
        if (position < 0) {
          document.querySelector('.carousel__arrow_left').style.display = 'flex';
        }
      } else if (event.target.closest('.carousel__arrow_left')) {
        position += inner.offsetWidth;
        inner.style.transform = `translateX(${position + 'px'} )`;
        if (position != -(inner.length * inner.offsetWidth - inner.offsetWidth)) {
          document.querySelector('.carousel__arrow_right').style.display = 'flex';
        }
        if (position == 0) {
          event.target.closest('.carousel__arrow_left').style.display = 'none';
        }
      }
      
    });

    this.wrap.addEventListener('click', this.onClick);
    this.wrap.addEventListener('product-add', function() {
      event.detail;
    });

  
    return this.wrap;

  }

  

}

