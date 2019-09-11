/**
 * Profile settings
 */

'use strict';

var config = require('config');
var APP_DB = config.get('dashdb.schema');
var DSN = config.get('dashdb.dsn');

//Queries
var GET_USER_RATINGS_QUERY = "Select * from " + APP_DB + ".MM_USER_RATING";
var ADD_USER_RATING_QUERY = "Insert into " + APP_DB + ".MM_USER_RATING (USER_ID,USER_RATING,USER_PROJECT,USER_TEAM,USER_COMMENT) values (?,?,?,?,?)";
var GET_USER_RATINGS_BY_DATE_QUERY = "Select USER_RATING, count(USER_PROJECT) as value, USER_RATED_TIMESTAMP as date from " + APP_DB + ".MM_USER_RATING where USER_PROJECT = ? and USER_TEAM = ? group by USER_RATING, USER_RATED_TIMESTAMP";
//DASH DB Settings and initialization
var Pool = require("ibm_db").Pool,
  pool = new Pool(),
  cn = DSN;
var ret = pool.init(5, DSN);
if (ret != true) {
  console.log("DB connection pool initialization to" + APP_DB + " failed " + ret);
} else {
  console.log("DB connection pool initialization to " + APP_DB + " done successfully!");
}

var _connectAndExecuteQuery = function (user_query, params) {
  return new Promise(function (fulfill, reject) {
    pool.open(cn, function (err, conn) {
      if (err) {
        console.log(err);
        return reject("Error getting connection from pool");
      } else {
        try {
          conn.query(user_query, params, function (err, data) {
            if (err) {
              console.log("Error _connectAndExecuteQuery: ", err, "Will invalidate connexions from pool ", pool);
              pool.close(function (a, b) {
                console.log(a, b, "all connections in the pool are now closed");
              });
              return reject("Error from DB: " + err + ". Connection pool has been purged");

            } else {
              return fulfill(data);
            }
          }.bind(this));
        } catch (ex) {
          console.log("Error connectAndExecuteQuery from catch");
          return reject(ex);
        } finally {
          conn.close(function (err) {
            if (err) {
              console.log("Closing connection error:" + err);
            } else {
              //   console.log("Connection has been closed");
            }
          });
        }

      }
    }.bind(this));

  });
}

//PROFILE MODULE
module.exports = {

  getUserRatings: function (success, error) {   
    var params = [];
    _connectAndExecuteQuery(GET_USER_RATINGS_QUERY).then(
      function (data) {                    
        success(data);
      },
      function (err) {
        error("Could not insert row: " + err);
      });
  },
  saveUserRating: function (user_rating, success, error) {  
    _connectAndExecuteQuery(ADD_USER_RATING_QUERY, user_rating).then(
      function (data) {                    
        success("Success");
      },
      function (err) {
        success("Fail");
      });
  },
  getUserRatingsByDate: function (user_rating, success, error) {  
    _connectAndExecuteQuery(GET_USER_RATINGS_BY_DATE_QUERY, user_rating).then(
      function (data) { 
        if(data !== undefined && data.length > 0) 
        var ratings = [[],[],[],[],[],[]];
        data.forEach(row => {
          ratings[row.USER_RATING].push(row);
        });     
        ratings.shift();             
        success(ratings);
      },
      function (err) {
        error("Could not insert row: " + err);
      });
  }

}
