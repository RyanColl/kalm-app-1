const database = require("./DB_Connection.js");
const passwordPepper = "SeCretPeppa4MySal+";

function getAllQuotes(callback) {
  let sqlQuery = `SELECT 
	MotivativeS AS "Quote"
	 FROM motivative_sentences`;
  database.query(sqlQuery, (err, results, fields) => {
    if (err) {
      callback(err, null);
    } else {
      console.log(results);
      callback(null, results);
    }
  });
}

function addQuote(postData, callback) {
  let sqlInsertSalt =
    "INSERT INTO motivative_sentences (MotivativeS) VALUES (:MotivativeS);";
  let params = {
    MotivativeS: postData.MotivativeS || "test first sentence",
  };
  console.log(sqlInsertSalt);
  database.query(sqlInsertSalt, params, (err, results, fields) => {
    if (err) {
      console.log(err);
      callback(err, null);
    } else {
      return results;
    }
  });
}

function deleteQuote(quoteId, callback) {
  let sqlDeleteQuote =
    "DELETE FROM motivative_sentences WHERE MotivativeS_id = :quoteId";
  let params = {
    quoteId: quoteId,
  };
  console.log(sqlDeleteQuote);
  database.query(sqlDeleteQuote, params, (err, results, fields) => {
    if (err) {
      callback(err, null);
    } else {
      console.log(results);
      callback(null, results);
    }
  });
}

module.exports = { getAllQuotes, addQuote, deleteQuote };
