const answers = document.querySelectorAll('.answer');
const icons = document.querySelectorAll('.question');


icons.forEach((item, i) => {
    item.addEventListener('click', () => {
        answers.forEach((answer, index) => {
            if (index === i && !answer.className.includes('active')) {
                answer.classList.add('active')
                item.classList.add('expanded')
                console.log(item)

            } else {
                icons[index].classList.remove('expanded')
                answer.classList.remove('active');

            }
        })
    })
})
