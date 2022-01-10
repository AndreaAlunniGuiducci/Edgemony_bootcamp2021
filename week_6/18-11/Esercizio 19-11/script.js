const q = (selector) => document.querySelector(selector);

const pg = q('#pg');
const up = q('#up');
const right = q('#right');
const down = q('#down');
const left = q('#left');


up.addEventListener('mousedown', () => {
    pg.className = 'pg-su';
    pg.classList = 'goUp';
    const go = setInterval(() => {
        if (pg.offsetTop > 1) {
            pg.style.top = `${pg.offsetTop -= 10}px`;
        }
    }, 150);
    up.addEventListener('mouseup', () => {
        clearInterval(go);
        pg.classList.remove('goUp');
        pg.className = 'pg-su';
    });

});

right.addEventListener('mousedown', () => {
    pg.className = 'pg-dx';
    pg.classList = 'goRight';
    const go = setInterval(() => {
        if (pg.offsetLeft < 740) {
            pg.style.left = `${pg.offsetLeft += 10}px`;
        }
    }, 150);
    right.addEventListener('mouseup', () => {
        clearInterval(go);
        pg.classList.remove('goRight');
        pg.className = 'pg-dx';
    });
});

down.addEventListener('mousedown', () => {
    pg.className = 'pg-giu';
    pg.classList = 'goDown';
    const go = setInterval(() => {
        if (pg.offsetTop < 480) {
            pg.style.top = `${pg.offsetTop += 10}px`;
        }
    }, 150);
    down.addEventListener('mouseup', () => {
        clearInterval(go);
        pg.classList.remove('goDown');
        pg.className = 'pg-giu';
    });
});

left.addEventListener('mousedown', () => {
    pg.className = 'pg-sx';
    pg.classList = 'goLeft';
    const go = setInterval(() => {
        if (pg.offsetLeft > 0) {
            pg.style.left = `${pg.offsetLeft -= 10}px`;
        }
    }, 150);
    left.addEventListener('mouseup', () => {
        clearInterval(go);
        pg.classList.remove('goLeft');
        pg.className = 'pg-sx';
    });
})



