const modal = document.getElementById('modal');
const closeIcon = document.querySelector('.close-icon');

document.onmouseleave = function () {
  modal.style.display = 'block';
}

closeIcon.onclick = function () {
  modal.style.display = 'none';
}