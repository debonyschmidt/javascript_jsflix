let login = document.getElementById('homeBtnLogin');
let backHome = document.getElementById('loginBtnBack')
let confirmLogin = document.getElementById('confirmLogin')
let indexSection = document.getElementById('indexSection');
let loginSection = document.getElementById('loginSection');
let loader = document.getElementById('loader');

login.addEventListener('click', function() {
    indexSection.style.display = 'none';
    login.style.display = 'none';
    // loader.style.display = 'block';
    loginSection.style.display = 'flex';
    backHome.style.display = 'block';
})

backHome.addEventListener('click', function() {
    indexSection.style.display = 'flex';
    login.style.display = 'block';
    loginSection.style.display = 'none';
    backHome.style.display = 'none';
})

confirmLogin.addEventListener('click', function(){
    window.open('movies.html','_top');
})





