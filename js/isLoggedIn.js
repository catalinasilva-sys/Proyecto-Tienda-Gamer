const user = JSON.parse(window.localStorage.getItem('current_session'));

if (!user) {
   window.history.replaceState(
      {
         unauthorized: true,
      },
      '',
      '/index.html'
   );

   window.location.href = '/index.html';
}
