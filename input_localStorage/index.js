const rememberMe = document.querySelector(".remember");
const forgetMe = document.querySelector(".forget");
const form = document.querySelector('form');
const getName = document.querySelector("#entername");
const submitBtn = document.querySelector("#submitname");
const forgetBtn = document.querySelector("#forgetname");

const h1 = document.querySelector('h1');
const greeting = document.querySelector(".personal-greeting");

form.addEventListener("submit", function (e) {
    e.preventDefault();
  });

submitBtn.addEventListener('click', function(){
    localStorage.setItem('name', getName.value);

    nameDisplayCheck();
});

forgetBtn.addEventListener('click', function(){
    localStorage.removeItem('name');

    nameDisplayCheck();
});

function nameDisplayCheck(){
    if (localStorage.getItem('name')){
        let name = localStorage.getItem('name');
        h1.textContent = `welcome ${name}!`;
        greeting.textContent = `Welcome to our website, ${name}! 
        We hope you have fun while you are here`;
        forgetMe.style.display = 'block';
        rememberMe.style.display='none';
        } else {
            h1.textContent = `Welcome to our website.`;
            greeting.textContent = `Welcome to our website, 
            We hope you have fun while you are here`;
        
            forgetMe.style.display = 'none';
            rememberMe.style.display = 'block';
        
        }
    }

    document.body.onload = nameDisplayCheck;
    console.log(localStorage.getItem('name'));