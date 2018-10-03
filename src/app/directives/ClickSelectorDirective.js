
export default {
  bind(element, binding) {
    element.addEventListener('click',() => {
      const selector = document.querySelector(binding.value);
      if(selector !== null){
        selector.click();
      }
    });
  },
  unbind(element) {
    element.removeEventListener('click', () => {});
  }
};
