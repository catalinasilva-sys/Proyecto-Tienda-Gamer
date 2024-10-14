const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', (e) => {
   e.preventDefault();

   const data = Object.fromEntries(new window.FormData(signupForm));
   const loginBtn = document.getElementById('logIn-btn')
   const loginToggleBtn = document.getElementById('toggle-login-btn')

   const users = JSON.parse(window.localStorage.getItem('users') ?? '[]');

   const userExists = users.find(({ email }) => email === data.email);

   if (userExists) {
      Swal.fire({
         icon: 'error',
         title: 'Error de datos',
         text: 'El correo ya se encuentra en uso, usa otro diferente',
      });
      return;
   }

   users.push({ ...data });

   localStorage.setItem('users', JSON.stringify(users));

   Swal.fire({
      icon: 'success',
      title: 'Registro Exitoso',
      text: 'Tu registro se ha realizado con éxito',
   }).then(() => {
      loginBtn.click()
      signupForm.reset()
      loginToggleBtn.blur()
   });
});
