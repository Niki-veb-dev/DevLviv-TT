import React from 'react';
import { Outlet } from 'react-router-dom';
import { HomePage } from '../HomePage';

export const Layout: React.FC = () => (
  <>
    <header>
      <HomePage />
    </header>

    <main>
      <Outlet />
    </main>
  </>
);
