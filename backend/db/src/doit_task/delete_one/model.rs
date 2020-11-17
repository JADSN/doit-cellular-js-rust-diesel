use shared::schema::tasks;

use diesel::{debug_query, prelude::*, sqlite::Sqlite};
use error_handling::MyError;
use shared::msg::Msg;

pub fn model(id_to_delete: i32) -> Result<Msg, MyError> {
    let conn = crate::connection::establish_connection();

    let query = diesel::delete(tasks::table.find(id_to_delete));

    let debug = debug_query::<Sqlite, _>(&query);
    dbg!(debug.to_string());

    match query.execute(&conn) {
        Ok(_) => Ok(Msg::DELETED),
        Err(error) => Err(MyError::Diesel(error)),
    }
}
