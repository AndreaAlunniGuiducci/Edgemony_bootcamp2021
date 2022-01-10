//illuminare la sezione hobby
const enlightBtn = document.querySelector('.light');
const hobby = document.querySelector('.hobby');

enlightBtn.addEventListener('click', () =>  {
    hobby.classList.replace('hobby', "enlight");
});

//dark mode
const enableDark = document.querySelector('.dark');
const darkHead = document.querySelector('.heading');

enableDark.addEventListener('click', () => {
    document.body.classList.toggle('darkMode');
    darkHead.classList.toggle('darkHeadMode');
})

//scritte dinamiche
const zoom = document.querySelector('ul');

zoom.addEventListener('mouseover', () => {
    zoom.style.fontSize = '25px';
})

zoom.addEventListener('mouseout', () =>{
    zoom.style.fontSize = '20px';
})

//immagine nascosta
const hideBtn = document.querySelector('.hideBtn');
const hideImg = document.querySelector('.hide')

hideBtn.addEventListener('click', () => {
    hideImg.classList.toggle('visible');
    hideBtn.classList.toggle('hide');
})
