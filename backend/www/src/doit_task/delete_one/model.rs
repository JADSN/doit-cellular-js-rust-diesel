use error_handling::MyError;
use shared::msg::Msg;
use tide::Request;

pub async fn delete_one(req: Request<()>) -> Result<Msg, MyError> {
    match req.param("id") {
        Ok(id) => match id.parse::<i32>() {
            Ok(data) => {
                match db::doit_task::delete_one::presenter::handler(data) {
                    Ok(data) => Ok(data),
                    Err(error) => Err(error),
                }
            }
            Err(error) => Err(MyError::ParseNum(error)),
        },
        Err(error) => {
            dbg!(error.to_string());
            Ok(Msg::ERROR(error.to_string()))
        }
    }
}
