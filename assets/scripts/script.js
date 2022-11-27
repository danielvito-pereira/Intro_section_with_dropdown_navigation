const button = document.querySelector('button');
const nav    = document.querySelector('ativo');


button.addEventListener('click',()=>{
  nav.classList.toggle('ativo')
})