use error_handling::MyError;
use shared::msg::Msg;

pub fn handler(id: i32) -> Result<Msg, MyError> {
    match super::model::model(id) {
        Ok(data) => Ok(data),
        Err(error) => Err(error),
    }
}
