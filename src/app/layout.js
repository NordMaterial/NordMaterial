import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Your Title',
  description: 'Your description here'
};

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default Layout;