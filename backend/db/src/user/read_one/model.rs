use error_handling::MyError;
use shared::{schema::users, user::User};

use diesel::{
    debug_query, sqlite::Sqlite, ExpressionMethods, QueryDsl, RunQueryDsl,
};

pub fn model() -> Result<User, MyError> {
    let conn = crate::connection::establish_connection();

    let query = users::table.filter(users::id.eq(1));

    let debug = debug_query::<Sqlite, _>(&query);
    dbg!(debug.to_string());

    match query.first::<User>(&conn) {
        Ok(data) => Ok(data),
        Err(error) => Err(MyError::Diesel(error)),
    }
}
