const menuBtn = document.getElementById('menu-toggle');
const closeBtn = document.getElementById('menu-close');
const menu = document.querySelector('.links');
const fondo = document.querySelector('.fondoNegro');
const body = document.querySelector('body');

menuBtn.addEventListener('click', function() {
  menu.classList.add('active');
  fondo.style.display = "block";
  body.style.overflowY = "hidden";
});

closeBtn.addEventListener('click', function() {
  menu.classList.remove('active');
  fondo.style.display = "none";
  body.style.overflowY = "auto";
});

document.addEventListener('DOMContentLoaded', function() {
    const navbarLinks = document.querySelector('.links');
    const loggedUser = localStorage.getItem('loggedUser');
    const loginBtn = document.getElementById('login-btn');
    if (loggedUser && loginBtn) {
        // Crea el dropbox de usuario
        const li = document.createElement('li');
        li.className = 'user-dropdown';
        li.innerHTML = `
            <div class="user-menu">
                <span id="user-name" style="cursor:pointer;"><i class="ri-user-line"></i> ${loggedUser} ▼</span>
                <ul class="dropdown-content" style="display:none; position:absolute; background:#fff; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.1); margin-top:8px; right:0; min-width:120px; z-index:100;">
                    <li style="padding:10px; cursor:pointer;" id="logout-btn">Cerrar sesión</li>
                </ul>
            </div>
        `;
        loginBtn.parentNode.replaceWith(li);

        // Mostrar/ocultar el menú al hacer click
        const userName = li.querySelector('#user-name');
        const dropdown = li.querySelector('.dropdown-content');
        userName.onclick = () => {
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        };

        // Cerrar sesión
        li.querySelector('#logout-btn').onclick = () => {
            localStorage.removeItem('loggedUser');
            window.location.reload();
        };

        // Cierra el menú si haces click fuera
        document.addEventListener('click', function(e) {
            if (!li.contains(e.target)) dropdown.style.display = 'none';
        });
    }
});