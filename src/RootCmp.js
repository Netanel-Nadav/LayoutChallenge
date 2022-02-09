import React from 'react';

import { Routes, Route } from 'react-router'
import { Navigation } from './components/Navigation';
import routes from './routes'

export function RootCmp() {
  return (
    <section className="App main-container">
      <Routes>
        {routes.map(route => <Route key={route.path} exact={true} element={route.component} path={route.path} />)}
      </Routes>
    </section>
  );
}
