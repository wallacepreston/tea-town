const db = require('./client');
const { teas } = require('./seedData');
const { createTea } = require('./tea');



const initialise = () => {
  try {
    db.serialize(function () { 
      db.run("DROP TABLE IF EXISTS teas");
      db.run(`CREATE TABLE teas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        countryOfOrigin TEXT
      )`);

      for(let tea of teas) {
        createTea(tea);
      }
      
      // check the row was inserted ok
      db.all("SELECT * FROM teas",
        function (err, rows) {  
          console.log('selected teas: ', rows);  
        }
      );
      
    });
    console.log('Database initialised');

  } catch(error) {
    console.error('Error initialising database', error);
  } finally { 
    // very important to always close database connections
    // else could lead to memory leaks
    db.close();
  }
}

initialise();
