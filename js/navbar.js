// // navbar.js
// document.addEventListener("DOMContentLoaded", function() {
//     fetch('../pages/navbar.html').then(response => response.text()).then(data => {
//         document.getElementById('navbar-container').innerHTML = data;
//     });
// });

document.addEventListener('DOMContentLoaded', function () {
   // Detectar la ubicación actual del archivo
   let filePath = window.location.pathname;

   // Verificar si estás en index.html o en un archivo dentro de pages/
   let pathToNavbar = filePath.includes('/pages/')
      ? './navbar.html'
      : './pages/navbar.html';

   // Cargar el contenido del navbar
   fetch(pathToNavbar)
      .then((response) => response.text())
      .then((data) => {
         document.getElementById('navbar-container').innerHTML = data;
      });
});
