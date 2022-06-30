import React from 'react';
import Nav from './Nav';

function Layout({children}) {
  return (
    <div className="layout">
      <h1>Headless Drupal : Crud Application</h1>
      <Nav />

      {children}
    </div>
  )
}

export default Layout
