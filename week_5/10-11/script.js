const userVal = document.querySelector('#user');
const pwVal = document.querySelector('#pw');
const btnSend = document.querySelector('#btnSend');
const userPage = document.querySelector('.userPage');
const modal = document.querySelector('.modal');

function save(user, pw) {
    window.localStorage.setItem('username', user);
}
user = {
    username: '',
    pw: ''
}

btnSend.addEventListener('click', (evt) => {

    user.username = userVal.value;
    user.pw = pwVal.value;
    const userStorage = window.localStorage.getItem('username');

    if (user.username === '') {

    }

    userPage.style.display = 'block';
    // document.body.removeChild(modal);

    sendCredential(userStorage);
    save(user.username);

})
// btnSend.addEventListener('click', (evt) => {
//     try {
//         user.username = userVal.value;
//         user.pw = pwVal.value;

//         if (user.username === '') {
//             throw 'username è vuoto';
//         }

//         userPage.style.display = 'block';
//         document.body.removeChild(modal);

//         sendCredential(user.username);

//         console.log(user);
//     } catch (e) {
//         console.log(e);
//     }
//     finally {

//     }
// })

setTimeout(() => {
    modal.style.transform = "translateY(0px)";
}, 2000);

function sendCredential(username) {

    userPage.firstElementChild.textContent = `Buongiorno ${username}`;
    // userPage.firstChild.textContent.replace(`'NOME'`, username);
}