// Nok de vigtigste imports i hele projektet! Vi skal bruge React!!
import React from 'react';
import ReactDOM from 'react-dom/client';
// Importerer BrowserRouter fra react-router, så vi kan lave siden til en Single Page Application
import { BrowserRouter } from "react-router-dom";
// Importerer CSS i det "øverste" component, så det ikke skal gøres igen
import './styles.css';
// Importerer App, som indeholder Routes til BrowserRouter
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* BrowserRouter skal omringe Routes, og Routes findes i App */}
      <App /> 
    </BrowserRouter>
  </React.StrictMode>
);