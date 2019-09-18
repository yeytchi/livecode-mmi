import "bootstrap";

const button = document.querySelector('.btn-success');
const author = document.querySelector('.author-avatar');

button.addEventListener('click', (e) => {
  button.classList.add('disabled');
  button.innerText = 'Déjà abonné';

  author.insertAdjacentHTML('beforeend', `<i class="fas fa-heart red"></i>`);
});

const input = document.querySelector('#input');
const title = document.querySelector('h1');
input.addEventListener('keyup', (e) => {
  title.innerText = input.value;
});
