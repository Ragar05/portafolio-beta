import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RoutesComponent } from './Router/RoutesComponent';
import { HomeView } from './Views/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HomeView/>
  </React.StrictMode>,
)
