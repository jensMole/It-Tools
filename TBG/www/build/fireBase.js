window.onload = function(){

    var config = {
        apiKey: "AIzaSyC8xJbBg4RYGo1i1lWRCvCTl2VTW1Axom4",
        authDomain: "tbg-auth.firebaseapp.com",
        databaseURL: "https://tbg-auth.firebaseio.com",
        projectId: "tbg-auth",
        storageBucket: "tbg-auth.appspot.com",
        messagingSenderId: "467360198491"
      };
      firebase.initializeApp(config);

       // FirebaseUI config.
       var uiConfig = {
        signInSuccessUrl: '<url-to-redirect-to-on-success>',
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        // Terms of service url.
        tosUrl: '<your-tos-url>'
      };

      // Initialize the FirebaseUI Widget using Firebase.
      var ui = new firebaseui.auth.AuthUI(firebase.auth());
      // The start method will wait until the DOM is loaded.
      ui.start('#firebaseui-auth-container', uiConfig);

}