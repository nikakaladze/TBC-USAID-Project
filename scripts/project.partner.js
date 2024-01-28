const items = document.querySelectorAll('.carousel-item');
const prev = document.querySelector('.carousel-prev');
const next = document.querySelector('.carousel-next');
const radios = document.querySelector('.slider-radios');
let activeListIndex = 0;
let currentIndex = 3;
let prevIndex = 0;
let interval;

function showItem() {
    items.forEach((item, i) => {
        let value = prevIndex <= i && i < currentIndex
        item.style.display = value ? 'block' : 'none';
    });
}

function prevItem() {
    clearInterval(interval)
    changeSliders()
    if (currentIndex - 3 < 3 || prevIndex - 3 < 0) {
        currentIndex = items.length
        prevIndex = items.length - 3
        activeListIndex = items.length / 3 - 1
        setActiveList(activeListIndex)
        showItem()
        return
    }
    currentIndex -= 3;
    prevIndex -= 3
    setActiveList(--activeListIndex)
    showItem();
}

function nextItem() {
    clearInterval(interval)
    changeSliders()
    if (currentIndex + 3 > items.length + 2 || prevIndex + 3 >= items.length) {
        currentIndex = 3
        prevIndex = 0
        activeListIndex = 0
        setActiveList(activeListIndex)
        showItem()
        return
    }
    currentIndex += 3;
    prevIndex += 3
    setActiveList(++activeListIndex)
    showItem();
}

function setActiveList(index) {
    const lists = document.querySelectorAll('.slider-radios li')
    for (let list of lists) {
        list.classList.remove('active')
    }
    lists[index].classList.add('active')
}

function createRadios() {
    for (let i = 0; i < items.length / 3; i++) {
        const li = document.createElement('li')
        li.addEventListener('click', () => {
            setActiveList(i)
            currentIndex = i * 3 + 3
            prevIndex = i * 3
            showItem()
        })
        radios.appendChild(li)
    }
    setActiveList(activeListIndex)
}

function changeSliders() {
    interval = setInterval(() => {
        nextItem()
    }, 3000)
}

createRadios()
showItem();
changeSliders()
prev.addEventListener('click', prevItem);
next.addEventListener('click', nextItem);