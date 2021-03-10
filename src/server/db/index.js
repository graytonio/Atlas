const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
const fs = require('fs');
const path = require('path');

let db = null;

module.exports.initDB = async function initDB() {
  return open({
    filename: 'inventory.db',
    driver: sqlite3.Database,
  }).then(async (database) => {
    db = database;
    const sql = fs
      .readFileSync(path.join(__dirname, 'initialize.sql'))
      .toString();
    return db.exec(sql);
  });
};

module.exports.createService = async function createService({
  icon,
  name,
  url,
}) {
  const sql = await db.prepare(
    `INSERT INTO services (icon, name, url) VALUES(?, ?, ?)`,
    icon,
    name,
    url
  );
  return sql.run();
};

module.exports.getService = async function getService({ name } = { name: '' }) {
  if (!name) return db.all(`SELECT * FROM services`);
  const sql = await db.prepare(`SELECT * FROM services WHERE name=?`, name);
  return sql.get();
};

module.exports.deleteService = async function deleteService({ id }) {
  const sql = await db.prepare(`DELETE FROM services WHERE id=?`, id);
  return sql.run();
};
