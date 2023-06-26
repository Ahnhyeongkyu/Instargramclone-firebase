
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import FirebaseContext from "./context/firebase";
import { firebase, FieldValue } from "./lib/firebase";
import "./styles/app.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <FirebaseContext.Provider value={{ firebase, FieldValue }}>
            <App />
        </FirebaseContext.Provider>
    </React.StrictMode>
);

// client side rendered app: react (cra)
// database which is Firebase
// react-loading-skeleton
// tailwind
// folder structure
// src
//  -> component,
//  -> constants,
//  -> context,
//  -> helpers,
//  -> hooks,
//  -> lib (firebase is going to live in here ),
//  -> services (firebase functions in here)
//  -> styles (tailwind's folder (app/tailwind))
