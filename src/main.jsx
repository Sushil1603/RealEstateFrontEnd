import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

console.log(import.meta.env.VITE_AUTH_CLIENTID);
console.log(import.meta.env.VITE_AUTH_DOMAIN);
console.log(import.meta.env.VITE_AUTH_REDIRECT_URL);
console.log(import.meta.env.VITE_SERVER_URL);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain={import.meta.env.VITE_AUTH_DOMAIN}
    clientId={import.meta.env.VITE_AUTH_CLIENTID}
    authorizationParams={{
      redirect_uri: import.meta.env.VITE_AUTH_REDIRECT_URL,
    }}
    audience={import.meta.env.VITE_AUTH_SERVER_URL}
    scope="openid profile email"
  >
    <App />
  </Auth0Provider>
);


// <Auth0Provider
//     domain={import.meta.env.VITE_DOMAIN}
//     clientId={import.meta.env.VITE_AUTH_CLIENTID}
//     authorizationParams={{
//       redirect_uri: import.meta.env.VITE_AUTH_REDIRECT_URL,
//     }}
//     audience={import.meta.env.VITE_AUTH_SERVER_URL}
//     scope="openid profile email"
//   ></Auth0Provider>