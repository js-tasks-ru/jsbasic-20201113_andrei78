export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = Math.min(value, (steps - 1));
    this.elem = this.render();
   
  }

  onClick = () => {

    let thumb = document.querySelector('.slider__thumb');
    let progress = document.querySelector('.slider__progress');
    let left = event.clientX - this.slider.getBoundingClientRect().left;
    let leftRelative = left / this.slider.offsetWidth;
    let steps = [...this.slider.querySelector('.slider__steps').children].length - 1;
    let approximateValue = leftRelative * steps;
    let value = Math.round(approximateValue);
    let valuePercents = value / steps * 100;

    this.value = value;

    document.querySelector('.slider__value').innerHTML = this.value;

    for (let item of document.querySelectorAll('.slider__steps span')) {
      item.classList.remove('slider__step-active');
    }
  
    event.target.classList.add('slider__step-active');

    thumb.style.left = valuePercents + '%';
    progress.style.width = valuePercents + '%';


    this.slider.dispatchEvent(new CustomEvent('slider-change', { // имя события должно быть именно 'slider-change'
      detail: this.value, // значение 0, 1, 2, 3, 4
      bubbles: true // событие всплывает - это понадобится в дальнейшем
    }));
  }

  render() {
   
    if (!this.slider) {
      // создаем корневой элемент слайдера
      this.slider = document.createElement('DIV');
      this.slider.classList.add('slider');
      this.slider.addEventListener('click', this.onClick);

    }
    // вычесляем начальное положение бегунка взависимости от его номера
    let defaultvaluesOfSlider = (this.value / (this.steps - 1) * 100);
   
    // Количество span = колчичеству шагов
    let spans = [];
    for (let i = 0; i < this.steps; i++) {
      let span = `<span></span>`;
      spans.push(span);
    }

    const slider = `
      <!--Ползунок слайдера с активным значением-->
      <div class="slider__thumb" style="left:${defaultvaluesOfSlider}%;">
        <span class="slider__value">${this.value}</span>
      </div>

      <!--Заполненная часть слайдера-->
      <div class="slider__progress" style="width: ${defaultvaluesOfSlider}%;"></div>

      <!--Шаги слайдера-->
      <div class="slider__steps">
        ${spans.join('')}
        
      </div> `;

    this.slider.insertAdjacentHTML('afterbegin', slider);

    // Добавляем класс актив к начальному ползунку
    this.slider.querySelector('.slider__steps').children[this.value].classList.add('slider__step-active');

    this.slider.addEventListener('click', function(event) {
      
    });


    this.slider.addEventListener('slider-change', event => {
      event.detail
    })
    

    return this.slider;
  }
  
}
