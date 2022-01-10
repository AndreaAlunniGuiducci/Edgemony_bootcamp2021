const secondBtn = document.getElementsByClassName("secondBtn");

const thirdBtn = document.querySelector(".thirdBtn");

thirdBtn.addEventListener('click', ()=> alert('bottone cliccato'));

document.addEventListener('keypress', (event) => {
    const heading = document.querySelector(".heading");
    heading.style.backgroundColor = "red";
    // if(heading.style.backgroundColor === "red"){
    //     heading.style.backgroundColor = "white";
    // } else if(heading.style.backgroundColor === "white"){
    //     heading.style.backgroundColor = "red";}
});