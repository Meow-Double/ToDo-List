import ReactDOM from 'react-dom/client';

import './index.css';
import { App } from 'app';
import { ContextProveder } from 'app/context/createContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ContextProveder>
    <App />
  </ContextProveder>,
);
