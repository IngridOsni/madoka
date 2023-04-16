const madoka = document.querySelector('.madoka');
const coelho = document.querySelector('.coelho');

const jump = () => {
    madoka.classList.add('jump');

    // setTimeout(funçao, tempo);
    setTimeout(() => {
        madoka.classList.remove('jump')
    }, 500);

}

const loop = setInterval(() => {

    console.log('loop')

    const coelhoPosition = coelho.offsetLeft;
    const madokaPosition = +window.getComputedStyle(madoka).bottom.replace('px', '');
    
    console.log(madokaPosition);

    if (coelhoPosition <= 120 && coelhoPosition > 0 && madokaPosition < 40) {

        coelho.style.animation = 'none';
        coelho.style.left = `${coelhoPosition}px`;
        coelho.src = './image/coelhoset.gif';
        coelho.style.width = '90px'
        coelho.style.marginLeft = '0'

        madoka.style.animation = 'none';
        // madoka.style.bottom = `${madokaPosition}px`;

        madoka.src = './image/madokaover.gif';
        madoka.style.width = '125px'
        madoka.style.marginLeft = '40px'

        clearInterval(loop);
        
        
    }

}, 10);

document.addEventListener('keydown', jump);