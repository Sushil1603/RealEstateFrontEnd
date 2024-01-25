import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-d55c2jqrk4oup2gr.us.auth0.com"
    clientId="u3wMRq5gzDkImqvR0GXVIvgPQBwOTQb6"
    authorizationParams={{
      redirect_uri: "https://real-estate-front-end-eqw7.vercel.app/",
    }}
    // audience="https://pear-frail-walkingstick.cyclic.app/"
    audience="https://real-estate-back-end-poy2.vercel.app/"
    scope="openid profile email"
  >
    <App />
  </Auth0Provider>
);
