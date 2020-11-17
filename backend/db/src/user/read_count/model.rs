use diesel::debug_query;
use diesel::{sqlite::Sqlite, QueryDsl, RunQueryDsl};

use error_handling::MyError;

use shared::{
    doit_task::ReadCount,
    schema::users::{self},
};

pub fn model() -> Result<ReadCount, MyError> {
    let conn = crate::connection::establish_connection();
    let query = users::table.count();

    let debug = debug_query::<Sqlite, _>(&query);
    dbg!(debug.to_string());

    match query.first::<i64>(&conn) {
        Ok(count) => Ok(ReadCount { count }),
        Err(error) => Err(MyError::Diesel(error)),
    }
}
