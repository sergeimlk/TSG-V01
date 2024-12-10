import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import './css/Reset.css';
import App from './components/App';
import Keycloak from 'keycloak-js';

// Create Keycloak instance
const keycloak = new Keycloak({
  url: "https://auth.winback-academy.org/auth/",
  realm: "winback",
  clientId: "winback-tsg"
});

/*keycloak.onTokenExpired = async () => {
  console.log('Token expired, attempting to refresh...');
  keycloak.login(); // Redirect to login page if refresh fails
};*/
// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//     <App 
//       keycloak={{tokenParsed:{}}}
//       isAuth={true}
//     />
//   </React.StrictMode>
// );


// Initialize Keycloak before rendering the app
console.log('Check auth');
keycloak.init({ onLoad: 'login-required' }).then(authenticated => {

  console.log("Authentification Keycloak:",authenticated);

  if (authenticated) {
    // Render the app once the user is authenticated
    const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(
      <React.StrictMode>
        <App 
          keycloak={keycloak}
          isAuth={authenticated}
        />
      </React.StrictMode>
    );

  } else {
    
    console.log("User is not authenticated");
    // keycloak.login(); // Force login if not authenticated
  }
}).catch(err => {
  console.error("Failed to initialize Keycloak", err);
});
