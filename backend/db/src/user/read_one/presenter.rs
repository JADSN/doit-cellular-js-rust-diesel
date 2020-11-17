use error_handling::MyError;
use shared::user::User;

pub fn handler() -> Result<User, MyError> {
    match super::model::model() {
        Ok(data) => Ok(data),
        Err(error) => Err(error),
    }
}
