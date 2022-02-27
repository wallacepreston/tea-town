const db = require('./client');

const createTea = (tea) => {
  try {
    stmt = db.prepare(`
    INSERT INTO teas (name, countryOfOrigin) VALUES (?, ?)`);
    stmt.run(tea.name, tea.countryOfOrigin);
  } catch(error) {
    console.error('Error creating tea', error);
  } finally {
    // release resources 
    stmt.finalize();
  }
};

module.exports = {
  createTea
};
