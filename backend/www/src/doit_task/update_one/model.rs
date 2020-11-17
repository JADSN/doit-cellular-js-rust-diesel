use error_handling::MyError;
use shared::{doit_task::TaskUpdate, msg::Msg};
use tide::Request;

pub async fn update_one(mut req: Request<()>) -> Result<Msg, MyError> {
    match req.param("id") {
        Ok(id) => match id.parse::<i32>() {
            Ok(id_to_update) => match req.body_json::<TaskUpdate>().await {
                Ok(data_to_update) => {
                    match db::doit_task::update_one::presenter::handler(
                        id_to_update,
                        data_to_update,
                    ) {
                        Ok(data) => Ok(data),
                        Err(error) => Err(error),
                    }
                }
                Err(error) => {
                    dbg!(error.to_string());
                    Ok(Msg::ERROR(error.to_string()))
                }
            },
            Err(error) => Err(MyError::ParseNum(error)),
        },
        Err(error) => {
            dbg!(error.to_string());
            Ok(Msg::ERROR(error.to_string()))
        }
    }
}
