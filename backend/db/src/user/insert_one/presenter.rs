use error_handling::MyError;
use shared::msg::Msg;
use shared::user::UserLogin;

pub fn handler(data: UserLogin) -> Result<Msg, MyError> {
    match super::model::model(data) {
        Ok(data) => Ok(data),
        Err(error) => Err(error),
    }
}
