const getCoor = (event) => {
    const x = event.x;
    const y = event.y;
    console.log('X:', x, 'Y:', y);
};
const wrapper = document.querySelector('.wrapper');

wrapper.addEventListener('click', getCoor);

//wrapper.removeEventListener('click', getCoor);


const ello = () => console.log('ello');
const show = setTimeout (ello, 3000)

clearTimeout (show);

