let user = {
    name: 'James',
    age: 22,
};
let userParagraph = document.getElementById('user');

function signIn(){
    window.localStorage.setItem('user', JSON.stringify(user));
}

function getUser() {
    const user = JSON.parse(window.localStorage.getItem('user'));
    userParagraph.innerHTML = `${user.name} ${user.age}`;
    
}
function signOut(){
    localStorage.clear();
    userParagraph.innerHTML = '';
}

getUser();