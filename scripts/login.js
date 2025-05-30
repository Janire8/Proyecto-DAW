document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const user = document.getElementById('registerUser').value;
    const pass = document.getElementById('registerPass').value;
    let users = JSON.parse(localStorage.getItem('users') || '{}');
    if (users[user]) {
        showMessage('El usuario ya existe.', false);
    } else {
        users[user] = pass;
        localStorage.setItem('users', JSON.stringify(users));
        showMessage('Cuenta creada exitosamente. Ahora puedes iniciar sesión.', true);
    }
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const user = document.getElementById('loginUser').value;
    const pass = document.getElementById('loginPass').value;
    let users = JSON.parse(localStorage.getItem('users') || '{}');
    if (users[user] && users[user] === pass) {
    localStorage.setItem('loggedUser', user); // Guarda el usuario logeado
    alert(`¡Bienvenido, ${user}!`);
    window.location.href = "./index.html";
    } else {
        showMessage('Usuario o contraseña incorrectos.', false);
    }
});



function showMessage(msg, success) {
    const panel = document.getElementById('messagePanel');
    panel.style.display = 'block';
    panel.style.color = success ? 'green' : 'red';
    panel.textContent = msg;
}