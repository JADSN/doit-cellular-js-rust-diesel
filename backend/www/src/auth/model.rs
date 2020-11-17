use auth::auth::Auth;
use error_handling::MyError;
use shared::{constants::USERNAME_MAX_LENGTH, msg::Msg};
use validator::validator::Validator;

pub fn model(auth: Auth) -> Result<Msg, MyError> {
    match Validator::max_length_string(
        auth.username.clone(),
        USERNAME_MAX_LENGTH,
    ) {
        Ok(_) => match db::user::read_one::presenter::handler() {
            Ok(data) => {
                if auth.is_authorized(data.username, data.password) {
                    Ok(Msg::AUTHORIZED)
                } else {
                    Ok(Msg::UNAUTHORIZED)
                }
            }
            Err(error) => {
                dbg!(error.to_string());
                Ok(Msg::ERROR(String::from("CREATE YOUR ACCOUNT FIRST")))
            }
        },

        Err(error) => Err(MyError::Validator(error)),
    }
}
