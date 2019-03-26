const slider = document.querySelector('.items');
let isDown = false;
let startX;
// determina coordenadas
let scrollLeft;
slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
 startX = e.pageX - slider.offsetLeft;
 console.log(startX)
  scrollLeft = slider.scrollLeft;
  console.log(isDown)
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
  console.log(isDown)
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  console.log(isDown)
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  console.log(x)
  const walk = (x - startX) * 3;
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});