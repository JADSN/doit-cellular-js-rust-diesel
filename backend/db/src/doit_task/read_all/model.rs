use shared::{
    doit_task::Task,
    schema::tasks::{self, id},
};

use diesel::{debug_query, prelude::*, sqlite::Sqlite};

use error_handling::MyError;

pub fn model() -> Result<Vec<Task>, MyError> {
    let conn = crate::connection::establish_connection();
    let query = tasks::table
        .select(tasks::table::all_columns())
        .order(id.desc());

    let debug = debug_query::<Sqlite, _>(&query);
    dbg!(debug.to_string());

    match query.load::<Task>(&conn) {
        Ok(data) => Ok(data),
        Err(error) => Err(MyError::Diesel(error)),
    }
}
