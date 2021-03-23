const React = require('react');
const DefaultLayout = require('./layouts/default');

module.exports = function HomePage({ name }) {
  return (
    <DefaultLayout>
      <div>Hello {name}</div>
    </DefaultLayout>
  );
};
