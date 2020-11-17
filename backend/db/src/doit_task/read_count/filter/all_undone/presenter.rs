use error_handling::MyError;
use shared::doit_task::ReadCount;

pub fn handler() -> Result<ReadCount, MyError> {
    match super::model::model() {
        Ok(data) => Ok(data),
        Err(error) => Err(error),
    }
}
