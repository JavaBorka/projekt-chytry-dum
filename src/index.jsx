import React from 'react';
import { createRoot } from 'react-dom/client';
import { smartHomeData} from './smartHomeData'
import Header from './Header'
import Dashboard from './Dashboard'
import './style.css';

const dataAplikace = smartHomeData

const App = () => (
  <>
    <div className="container">
      <Header title="Chytrý dům" />
      <Dashboard data={dataAplikace} />
    </div>
  </>
);

createRoot(
  document.querySelector('#app'),
).render(<App />);