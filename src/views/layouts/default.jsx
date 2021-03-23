const React = require('react');

module.exports = function DefaultLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Atlas Dashboard</title>
      </head>
      <body>{children}</body>
    </html>
  );
};
