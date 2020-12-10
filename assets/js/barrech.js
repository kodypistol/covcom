const av = document.querySelector('.bar');
const anchors = document.querySelectorAll('.title-anchor');

// les puces qui suive le scroll

window.addEventListener('scroll', function () {
    let avActived = false;

    const mapY = map.getBoundingClientRect().y;
    console.log(mapY)
    anchors.forEach(function (title, index) {
        const titleY = title.getBoundingClientRect().y;


        if (titleY > 0 && avActived === false) {
            av[index].classList.add('is-active');
            avActived = true;
        } else {
            av[index].classList.remove('is-active');
            av[index].classList.remove('is-activeb');
        }


    });
