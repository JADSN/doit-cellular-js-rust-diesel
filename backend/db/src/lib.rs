pub mod connection;
pub mod doit_task;
pub mod user;

// use diesel::{RunQueryDsl, sql_query};
// use error_handling::MyError;

// #[derive(Debug, QueryableByName)]
// #[table_name = "tasks"]
// struct AffectedRow {
//     id: i32,
// }

// pub fn bootstrap() -> Result<bool, MyError> {
//     let conn = crate::connection::establish_connection();
//     let query = include_str!("setup.sql");
//     match sql_query(query).execute(&conn) {
//         Ok(_) => Ok(true),
//         Err(err) => {
//             dbg!(err.to_string());
//             Err(MyError::Diesel(err))
//         }
//     }
// }
