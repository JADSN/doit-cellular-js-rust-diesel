use error_handling::MyError;
use shared::msg::Msg;
use shared::{
    doit_task::{Task, TaskUpdate},
    schema::tasks,
};

use diesel::{debug_query, prelude::*, sqlite::Sqlite};

pub fn model(id_to_update: i32, data: TaskUpdate) -> Result<Msg, MyError> {
    let conn = crate::connection::establish_connection();

    let data_to_update = Task {
        id: id_to_update,
        done: data.done,
        description: data.description,
        user_id: 0,
    };

    let query = diesel::update(tasks::table.find(data_to_update.id))
        .filter(tasks::user_id.eq(1))
        .set(data_to_update);

    let debug = debug_query::<Sqlite, _>(&query);
    dbg!(debug.to_string());

    match query.execute(&conn) {
        Ok(_) => Ok(Msg::UPDATED),
        Err(error) => Err(MyError::Diesel(error)),
    }
}
