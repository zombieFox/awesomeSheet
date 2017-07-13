var registerServiceWorker = (function() {

  function bind() {
    document.addEventListener("DOMContentLoaded", function() {
      // console.log("DOM Loaded");
      navigator.serviceWorker.register("service-worker.js")
        .then(function success() {
          // success
          console.log("Service Worker Registered");
        }, function failure() {
          // failure
          console.log("Service Worker Failed");
        });
    });
  };

  // exposed methods
  return {
    bind: bind
  };

})();
