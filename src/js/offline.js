var offline = (function() {

  function render() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js')
        .then(function(registration) {
          // Registration was successful
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
        })
        .catch(function(error) {
          // registration failed :(
          console.log('ServiceWorker registration failed: ', error);
        });
    };
  };

  // exposed methods
  return {
    render: render
  };

})();
