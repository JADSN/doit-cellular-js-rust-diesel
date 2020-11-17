use error_handling::MyError;
use shared::doit_task::Task;

pub fn model() -> Result<Vec<Task>, MyError> {
    match db::doit_task::read_all::presenter::handler() {
        Ok(data) => Ok(data),
        Err(error) => Err(error),
    }
}
