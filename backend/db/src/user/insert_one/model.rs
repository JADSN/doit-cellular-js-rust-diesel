use error_handling::MyError;
use shared::{msg::Msg, schema::users, user::UserLogin};

use diesel::{debug_query, sqlite::Sqlite, RunQueryDsl};

pub fn model(records: UserLogin) -> Result<Msg, MyError> {
    let conn = crate::connection::establish_connection();

    let query = diesel::insert_into(users::table).values(records);

    let debug = debug_query::<Sqlite, _>(&query);
    dbg!(debug.to_string());

    match query.execute(&conn) {
        Ok(_) => Ok(Msg::CREATED),
        Err(error) => Err(MyError::Diesel(error)),
    }
}
