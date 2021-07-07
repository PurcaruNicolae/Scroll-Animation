const box = document.querySelectorAll('.box');

window.addEventListener('scroll', animation);

let bottomLine = window.innerHeight / 5 * 4;
console.log(bottomLine);
animation();
function animation() {

    box.forEach(element => {
        let topLine = element.getBoundingClientRect().top;

        if (topLine < bottomLine) {
            element.classList.add('show');
        } else {
            element.classList.remove('show');
        }

    }

    )

}