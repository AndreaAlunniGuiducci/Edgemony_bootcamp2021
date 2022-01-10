const userVal = document.querySelector('#user');
const pwVal = document.querySelector('#pw');
const btnSend = document.querySelector('#btnSend');
const userPage = document.querySelector('.userPage');
const modal = document.querySelector('.modal');

function save(username, pw) {
    window.localStorage.setItem('username', username);
    window.localStorage.setItem('pw', pw)
}

function sendCredential(username) {

    let buongiorno = userPage.firstElementChild.innerText.replace("[NOME]", username);

    return buongiorno
}

let user = {
    username: '',
    pw: ''
}


btnSend.addEventListener('click', (evt) => {

    user.username = userVal.value;
    user.pw = pwVal.value;

    save(user.username);

    const userStorage = window.localStorage.getItem('username');

    console.log(userStorage);

    userPage.firstElementChild.innerText = sendCredential(userStorage);


    userPage.style.display = 'block';

    document.body.removeChild(modal);


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
