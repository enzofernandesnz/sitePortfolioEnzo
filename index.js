
let links = document.getElementsByClassName('menu');

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', () => {
        links[i].classList.toggle('active')
        console.log(i)
    })   
}