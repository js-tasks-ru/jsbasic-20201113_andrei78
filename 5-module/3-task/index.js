function initCarousel() {
  let prev = document.querySelector('.carousel__arrow_left');
  let next = document.querySelector('.carousel__arrow_right');
  let slideContainer = document.querySelector('.carousel__inner');
  let slideItem = document.querySelectorAll('.carousel__slide');
  let position = 0;

  let testContainder = document.querySelector('.carousel__slide');

  prev.style.display = 'none';

 

  next.addEventListener('click', function() {
    position -= testContainder.offsetWidth;
    slideContainer.style.transform = `translateX(${position + 'px'} )`;
    if (position === -(slideItem.length * testContainder.offsetWidth - testContainder.offsetWidth)) {
      this.style.display = 'none';
    } 
    if (position < 0) {
      prev.style.display = 'flex';
    }
  });

  prev.addEventListener('click', function() {
    position += testContainder.offsetWidth;
    slideContainer.style.transform = `translateX(${position + 'px'} )`;
    if (position != -(slideItem.length * testContainder.offsetWidth - testContainder.offsetWidth)) {
      next.style.display = 'flex';
    }
    if (position == 0) {
      this.style.display = 'none';
    }
  });
  

}
initCarousel();