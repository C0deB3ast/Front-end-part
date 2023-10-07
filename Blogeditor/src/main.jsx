import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from "react-redux";
import godam from "./Store/godam.js"

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <Provider store={godam}>
    <App />
  </Provider>
  </React.StrictMode>
)
