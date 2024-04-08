import { Goals } from '@/components/goals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { r } from './reflect';

import './globals.css';

function App() {
  return <Goals />;
}

const rootElement = document.getElementById('root');
if (rootElement === null) {
  throw new Error('root element is null');
}
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

if (import.meta.hot) {
  import.meta.hot.dispose(async () => {
    // this makes sure that there is only one instance of the reflect client during hmr reloads
    await r.close();
    root.unmount();
  });
}
