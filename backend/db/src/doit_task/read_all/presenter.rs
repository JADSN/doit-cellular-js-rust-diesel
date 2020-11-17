use error_handling::MyError;
use shared::doit_task::Task;

pub fn handler() -> Result<Vec<Task>, MyError> {
    match super::model::model() {
        Ok(data) => Ok(data),
        Err(error) => Err(error),
    }
}
