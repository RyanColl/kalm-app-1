const database = require("./DB_Connection.js");
const getHelp = (id) => {
  let sqlQuery = `
    SELECT * FROM emergency_contacts
    where profile_id = :profile_id;
    `;
  let params = {
    profile_id: `${id}`,
  };
  return new Promise((resolve, reject) => {
    database.query(sqlQuery, params, (err, results, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

module.exports = {getHelp}