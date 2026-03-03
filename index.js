const usernameInp = document.getElementById('username');
const passwordInp = document.getElementById('password');
const btnRegister = document.getElementById('btnRegister');


btnRegister.addEventListener('click', (e)=> {
    e.preventDefault()
    let name = usernameInp.value.trim()
    let password = passwordInp.value.trim()
    
    const storedUser = JSON.parse(localStorage.getItem('user'));

    
    if(storedUser && storedUser.name === name){
        alert("Username already exists!");
        return; 
    }
    const userData = {
        name: name,
        password: password
    }

    localStorage.setItem('user', JSON.stringify(userData));
    alert("Registration successful!")
    window.location.href = 'dashboard.html'
})
