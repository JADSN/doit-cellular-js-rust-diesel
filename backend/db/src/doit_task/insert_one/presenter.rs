use error_handling::MyError;
use shared::msg::Msg;

use shared::doit_task::TaskInsert;

pub fn handler(records: TaskInsert) -> Result<Msg, MyError> {
    match super::model::model(records) {
        Ok(data) => Ok(data),
        Err(error) => Err(error),
    }
}
