const database = require("./DB_Connection.js");
const passwordPepper = "SeCretPeppa4MySal+";
/* const findProfile = (id) => {
  let sqlQuery = `SELECT * 
	 FROM profiles
     WHERE profile_Id = :profile_Id`;
  let params = {
    profile_Id: id,
  };
  new Promise((resolve, reject) => {
    database.query(sqlQuery, params, (err, results, fields) => {
      if (err) {
        console.log(err);
        reject(err, null);
      } else {
        console.log(results);
        resolve(results[0]);
      }
    });
  });
}; */

function findProfileByID(id, callback) {
  let sqlQuery = `SELECT * 
  FROM profiles
    WHERE profile_Id = :profile_Id`;
  let params = {
    profile_Id: id,
  };
  database.query(sqlQuery, params, (err, results, fields) => {
    if (err) {
      callback(err, null);
    } else {
      //console.log(results);
      callback(null, results[0]);
    }
  });
}

/* const Authenticate = (email, password) => {
  let sqlQuery = `SELECT * 
	 FROM profiles
     WHERE email = :email AND password = :password`;
  let params = {
    email: email,
    password: password,
  };
  return new Promise((resolve, reject) => {
    database.query(sqlQuery, params, (err, results, fields) => {
      if (err) {
        console.log(err);
        reject(err, null);
      } else if (results.length === 0) {
        reject("Not found", null);
      } else {
        console.log(results[0]);
        resolve(results[0]);
      }
    });
  });
}; */

function Authenticate(email, password, callback) {
  let sqlQuery = `SELECT * 
  FROM profiles
    WHERE email = :email AND password = :password`;
  let params = {
    email: email,
    password: password,
  };
  database.query(sqlQuery, params, (err, results, fields) => {
    if (err) {
      callback(err, null);
    } else {
      //console.log(results);
      callback(null, results[0]);
    }
  });
}
const checkIfEmailExists = (email) => {
  let sqlQuery = `SELECT * 
  FROM profiles
    WHERE email = :email`;
  let params = {
    email
  };
  return new Promise((res, rej) => {
    database.query(sqlQuery, params, (err, results, fields) => {
      if (err) {
        console.log('failed')
        rej(false) 
      } else {
        res(results[0])
      }
    });
  })
  
}

Authenticate("test-email@bcit.ca", "test-password", (err, ress) => {
  console.log(ress);
});

const addProfile = (name, email, password) => {
  let sqlQuery = `INSERT INTO profiles
    (profile_id, name, email, password) VALUES
    (:profile_id, :name, :email, :password)`;
  let params = {
    name: name,
    email: email,
    password: password,
  };
  return new Promise((resolve, reject) => {
    database.query(sqlQuery, params, (err, results, fields) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(results);
        resolve(results);
      }
    });
  });
};

//addProfile("test-name", "test-email@bcit.ca", "test-password");

const getContactInfo = (email) => {
  let sqlQuery = `SELECT * 
  FROM profile_data
    WHERE email = :email`;
  let params = {
    email: email
  };
  return new Promise((resolve, reject) => {
    database.query(sqlQuery, params, (err, results, fields) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(results);
        resolve(results);
      }
    });
  });
};

const editContactInfo = (userData) => {
  const {number, email, address, 
    unit, city, postal, id} = userData;
  let sqlQuery = `UPDATE profile_data
  SET phone_number = :phone_number, address = :address, city = :city, postal_code = :postal_code, suite_number = :suite_number
  where email = :email
  `;
  let params = {
    phone_number: number,
    email: email,
    address: address,
    city: city,
    postal_code: postal,
    suite_number: unit
  };
  return new Promise((resolve, reject) => {
    database.query(sqlQuery, params, (err, results, fields) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(results);
        resolve(results);
      }
    });
  });
};
const addEmergencyContactInfo = (contactData) => {
  let sqlQuery = `
  INSERT INTO emergency_contacts
  (contact_name, contact_phone, contact_email, profile_id) VALUES
  (:contact_name, :contact_phone, :contact_email, :profile_id);
  `;
  let params = {
    contact_name: contactData.contact_name,
    contact_phone: contactData.contact_phone,
    contact_email: contactData.contact_email,
    profile_id: contactData.profile_id,
  }
  return new Promise((resolve, reject) => {
    database.query(sqlQuery, params, (err, results, fields) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(results);
        resolve(results);
      }
    });
  });
}
const editEmergencyContactInfo = (contactData) => {
  let sqlQuery = `
  UPDATE emergency_contacts
  SET contact_name = :contact_name, contact_number = :contact_number, contact_email = :contact_email
  where profile_id = ${contactData.profile_Id};
  `;
  let params = {
    contact_name: contactData.contact_name,
    contact_phone: contactData.contact_phone,
    contact_email: contactData.contact_email
  }
  return new Promise((resolve, reject) => {
    database.query(sqlQuery, params, (err, results, fields) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(results);
        resolve(results);
      }
    });
  });
}
const getEmergencyContactData = (id) => {
  let sqlQuery = `
  SELECT * FROM emergency_contacts
  where profile_id = :profile_id;
  `;
  let params = {
    profile_id: id,
  }
  return new Promise((resolve, reject) => {
    database.query(sqlQuery, params, (err, results, fields) => {
      if (err) {
        
        reject(err);
      } else {
        
        resolve(results);
      }
    });
  });
}

const deleteEmergencyContactInfo = (contact_id) => {
  
}

const deleteProfile = (name, email) => {};

const checkPassword = (email, password) => {};
const getKeyFromDB = (email) => {
  let sqlQuery = `
  SELECT aws_key FROM profile_data
  where email = :email;
  `;
  let params = {
    email
  }
  return new Promise((resolve, reject) => {
    database.query(sqlQuery, params, (err, results, fields) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(results);
        resolve(results);
      }
    });
  })
}
const addKeyToDB = (email, key) => {
  let sqlQuery = `
  UPDATE profile_data
  SET aws_key = :aws_key
  where email = '${email}';
  `;
  let params = {
    aws_key: key
  }
  return new Promise((resolve, reject) => {
    database.query(sqlQuery, params, (err, results, fields) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(results);
        resolve(results);
      }
    });
  })
}

module.exports = { getEmergencyContactData, addEmergencyContactInfo, editContactInfo, 
  findProfileByID, addProfile, Authenticate, checkIfEmailExists, getContactInfo,
  editEmergencyContactInfo, deleteEmergencyContactInfo, addKeyToDB, getKeyFromDB,};
