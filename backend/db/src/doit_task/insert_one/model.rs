use shared::{doit_task::TaskInsert, schema::tasks};

use error_handling::MyError;
use shared::msg::Msg;

use diesel::{debug_query, prelude::*, sqlite::Sqlite};

pub fn model(records: TaskInsert) -> Result<Msg, MyError> {
    let conn = crate::connection::establish_connection();

    let query = diesel::insert_into(tasks::table).values(records);

    let debug = debug_query::<Sqlite, _>(&query);
    dbg!(debug.to_string());

    match query.execute(&conn) {
        Ok(_) => Ok(Msg::CREATED),
        Err(error) => Err(MyError::Diesel(error)),
    }
}
