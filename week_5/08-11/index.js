// const solarSystem = [
//     {
//         name: 'Sun', radius: 696340, surface: 'star'
//     },
//     { name: 'Mercury', radius: 2440, surface: 'terrestrial' },
//     { name: 'Venus', radius: 6052, surface: 'terrestrial' },
//     { name: 'Earth', radius: 6371, surface: 'terrestrial' },
//     { name: 'Mars', radius: 3389, surface: 'terrestrial' },
//     { name: 'Jupiter', radius: 69911, surface: 'gas giant' },
//     { name: 'Saturn', radius: 58232, surface: 'gas giant' },
//     { name: 'Uranus', radius: 25362, surface: 'ice giant' },
//     { name: 'Neptune', radius: 24622, surface: 'ice giant' },
// ];

// const terrestrial = planets => planets.surface === 'terrestrial';

// solarSystem.filter(terrestrial);
const q = (selector) => document.querySelector(selector);
const modal = q('.modal');
const acceptBtn = q('#accetta');
const denyBtn = q('#nega');

function hideModal() {
    modal.style.opacity = 0;
    setTimeout(() => {
        document.body.removeChild(modal);
    }, 350);
}

function redirectToGoogle() {
    window.location.href = 'https://www.google.it/'
}


acceptBtn.addEventListener('click', hideModal, { once: true })
denyBtn.addEventListener('click', redirectToGoogle, { once: true })

