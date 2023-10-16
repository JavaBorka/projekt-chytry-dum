import React from 'react';
import { createRoot } from 'react-dom/client';
import { smartHomeData} from './smartHomeData'
import { Header } from './Header/index.jsx'
import './style.css';

const App = () => (
  <>
    <div className="container">
      <Header title="Chytrý dům" />
    </div>
  </>
);

createRoot(
  document.querySelector('#app'),
).render(<App />);