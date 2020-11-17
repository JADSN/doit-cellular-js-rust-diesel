use error_handling::MyError;
use shared::{msg::Msg, user::UserLogin};

use tide::Request;

pub async fn model(mut req: Request<()>) -> Result<Msg, MyError> {
    match db::user::read_count::presenter::handler() {
        Ok(data) => {
            if data.count >= 1 {
                Ok(Msg::ALREADYEXISTS)
            } else {
                match req.body_json::<UserLogin>().await {
                    Ok(data) => {
                        match db::user::insert_one::presenter::handler(data) {
                            Ok(data) => Ok(data),
                            Err(error) => Err(error),
                        }
                    }
                    Err(error) => {
                        // TODO: Error Handling for Tide::Error
                        Ok(Msg::ERROR(error.to_string()))
                    }
                }
            }
        }
        Err(error) => Err(error),
    }
}
