import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';  

let mob = document.getElementById('root');
ReactDOM.createRoot(mob).render(
  <React.StrictMode>
     <ToastContainer />
    <App/>
  </React.StrictMode>
)
