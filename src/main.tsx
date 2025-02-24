import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './i18n'
import './assets/css/bootstrap.min.css';
import './assets/css/flexslider.css';
import './assets/css/jquery.fancybox.css';
import './assets/css/main.css';
import './assets/css/responsive.css';
import './assets/css/font-icon.css';
import './assets/css/animate.min.css';
import './assets/css/style4.css';
import './assets/css/font-awesome.min.css';
import './assets/css/animate2.min.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
