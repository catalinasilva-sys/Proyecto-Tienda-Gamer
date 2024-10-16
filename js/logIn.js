const closeBtn = document.getElementById('close-btn');
const loginToggleBtn = document.getElementById('toggle-login-btn');
const userIcon = document.querySelector('.session-options');
const userName = document.querySelector('#user > span');
const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
   e.preventDefault();

   const data = Object.fromEntries(new window.FormData(loginForm));

   login(data);
});

function login(data, notify = true) {
   const users = JSON.parse(window.localStorage.getItem('users') ?? '[]');

   const user = users.find(
      (user) => user.email === data.email && user.password === data.password
   );

   if (!user) {
      Swal.fire({
         icon: 'error',
         title: 'Error de Datos',
         text: 'El usuario y/o contraseña son incorrectos',
      });
      return;
   }

   if (notify)
      Swal.fire({
         icon: 'success',
         title: 'Inicio de Sesión Exitoso',
         text: `Bienvenido ${user.user}`,
      });

   window.localStorage.setItem('current_session', JSON.stringify(user));

   userName.innerHTML = user.user;
   userIcon.style.display = 'inline-block';
   loginToggleBtn.style.display = 'none';

   // addProfileLink();

   closeBtn.click();
   loginForm.reset();
}

function logout() {
   // const profileLink = document.getElementById('profile-link')
   window.localStorage.removeItem('current_session');

   userName.innerHTML = '';
   userIcon.style.display = 'none';
   loginToggleBtn.style.display = 'inline-block';
   // profileLink.remove()
}

// function addProfileLink() {
//    const linkList = document.querySelector('.container_lc1');

//    const profileLink = document.createElement('li');
//    profileLink.classList.add('nav-item');
//    profileLink.id = 'profile-link'
//    profileLink.innerHTML = `<a class="nav-link" href="/pages/profile.html">Perfil</a>`;

//    linkList.appendChild(profileLink);
// }
