function toggleText() {
  let customBtn = document.querySelector('.toggle-text-button');
  customBtn.addEventListener('click',function() {
    if(!customBtn.nextElementSibling.hasAttribute('hidden')){
      customBtn.nextElementSibling.setAttribute('hidden','true')
    } else {
      customBtn.nextElementSibling.removeAttribute('hidden')
    }
})
}
