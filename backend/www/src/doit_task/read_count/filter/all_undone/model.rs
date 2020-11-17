use error_handling::MyError;
use shared::doit_task::ReadCount;

pub fn read_count() -> Result<ReadCount, MyError> {
    match db::doit_task::read_count::filter::all_undone::presenter::handler() {
        Ok(data) => Ok(data),
        Err(err) => Err(err),
    }
}
