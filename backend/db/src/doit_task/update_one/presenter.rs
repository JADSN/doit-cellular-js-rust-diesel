use error_handling::MyError;
use shared::{doit_task::TaskUpdate, msg::Msg};

pub fn handler(id: i32, records: TaskUpdate) -> Result<Msg, MyError> {
    match super::model::model(id, records) {
        Ok(data) => Ok(data),
        Err(error) => Err(error),
    }
}
