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
var GET_USER_RATINGS_BY_DATE_QUERY = "Select USER_RATING, count(USER_PROJECT) as value, USER_RATED_TIMESTAMP as date from " + APP_DB + ".MM_USER_RATING where USER_PROJECT = ? and USER_TEAM = ? and USER_RATED_TIMESTAMP between ? and ? group by USER_RATING, USER_RATED_TIMESTAMP";
var GET_ALL_USER_RATINGS_QUERY = "Select USER_RATING, count(USER_PROJECT) as value, USER_RATED_TIMESTAMP as date from " + APP_DB + ".MM_USER_RATING where USER_RATED_TIMESTAMP between ? and ? group by USER_RATING, USER_RATED_TIMESTAMP";
var GET_USER_RATING_COMMENTS_QUERY = "Select USER_ID,USER_RATING,USER_PROJECT,USER_TEAM,USER_COMMENT, USER_RATED_TIMESTAMP, USER_RATED_TIME, ((SELECT current timestamp FROM sysibm.sysdummy1)-USER_RATED_TIME) as timeDifference from " + APP_DB + ".MM_USER_RATING where USER_RATED_TIMESTAMP between ? and ? order by RATING_ID desc";
var GET_USER_RATING_DAY_QUERY = "Select USER_RATING, count(RATING_ID) as count from " + APP_DB + ".MM_USER_RATING where USER_RATED_TIMESTAMP = (SELECT current date FROM sysibm.sysdummy1) group by USER_RATING";




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
        success({ status: "Success" });
      },
      function (err) {
        success({ status: "Fail" });
      });
  },
  getUserRatingsByDate: function (user_rating, success, error) {
    var presentDate = new Date;
    var WFDate = new Date(presentDate.setDate(presentDate.getDate() - presentDate.getDay()));
    var WLDate = new Date(presentDate.setDate(presentDate.getDate() - presentDate.getDay() + 6));
    var WFDateFormat = WFDate.getFullYear() + '-' + (WFDate.getMonth() + 1) + '-' + WFDate.getDate();
    var WLDateFormat = WLDate.getFullYear() + '-' + (WLDate.getMonth() + 1) + '-' + WLDate.getDate();
    user_rating.push(WFDateFormat, WLDateFormat)

    _connectAndExecuteQuery(GET_USER_RATINGS_BY_DATE_QUERY, user_rating).then(
      function (data) {
        if (data !== undefined && data.length > 0) {
          var ratings = [[], [], [], [], [], []];
          data.forEach(row => {
            ratings[row.USER_RATING].push(row);
          });
          ratings.shift();
          success(ratings);
        } else {
          success([]);
        }
      },
      function (err) {
        error("Could not insert row: " + err);
      });
  },
  getAllUserRatings: function (success, error) {

    var presentDate = new Date;
    var WFDate = new Date(presentDate.setDate(presentDate.getDate() - presentDate.getDay()));
    var WLDate = new Date(presentDate.setDate(presentDate.getDate() - presentDate.getDay() + 6));
    var WFDateFormat = WFDate.getFullYear() + '-' + (WFDate.getMonth() + 1) + '-' + WFDate.getDate();
    var WLDateFormat = WLDate.getFullYear() + '-' + (WLDate.getMonth() + 1) + '-' + WLDate.getDate();
    var params = [WFDateFormat, WLDateFormat];

    _connectAndExecuteQuery(GET_ALL_USER_RATINGS_QUERY, params).then(
      function (data) {
        console.log(data);
        if (data !== undefined && data.length > 0) {
          var ratings = [[], [], [], [], [], []];
          data.forEach(row => {
            ratings[row.USER_RATING].push(row);
          });
          ratings.shift();
          success(ratings);
        } else {
          success([]);
        }
      },
      function (err) {
        error("Could not insert row: " + err);
      });
  },
  getUserRatingComments: function (success, error) {

    var presentDate = new Date;
    var WFDate = new Date(presentDate.setDate(presentDate.getDate() - presentDate.getDay()));
    var WLDate = new Date(presentDate.setDate(presentDate.getDate() - presentDate.getDay() + 6));
    var WFDateFormat = WFDate.getFullYear() + '-' + (WFDate.getMonth() + 1) + '-' + WFDate.getDate();
    var WLDateFormat = WLDate.getFullYear() + '-' + (WLDate.getMonth() + 1) + '-' + WLDate.getDate();
    var params = [WFDateFormat, WLDateFormat];

    _connectAndExecuteQuery(GET_USER_RATING_COMMENTS_QUERY, params).then(
      function (data) {
        if (data !== undefined && data.length > 0) {
          success(data);
        } else {
          success([]);
        }
      },
      function (err) {
        error("Could not insert row: " + err);
      });
  },
  getUserRatingDay: function (success, error) {

    _connectAndExecuteQuery(GET_USER_RATING_DAY_QUERY).then(
      function (data) {
        var USER_RATING_DAILY = [
          { title: 'I\'m great', value: 0, mood: 5 },
          { title: 'I\'m good', value: 0, mood: 4 },
          { title: 'I\'m okay', value: 0, mood: 3 },
          { title: 'I\'m not bad', value: 0, mood: 2 },
          { title: 'I\'m not good', value: 0, mood: 1 },
        ];
        if (data !== undefined && data.length > 0) {
          USER_RATING_DAILY.map(rating => {
            var found = data.filter(row => row.USER_RATING == rating.mood);
            if (found[0] != undefined && found[0].COUNT != undefined) {
              rating.value = found[0].COUNT;
            }
          });
          success(USER_RATING_DAILY);
        } else {
          success(USER_RATING_DAILY);
        }
      },
      function (err) {
        error("Could not insert row: " + err);
      });
  }

}
