use error_handling::MyError;
use shared::{doit_task::TaskInsert, msg::Msg};

use tide::Request;

pub async fn model(mut req: Request<()>) -> Result<Msg, MyError> {
    match req.body_json::<TaskInsert>().await {
        Ok(mut data) => {
            data.override_id(1);
            match db::doit_task::insert_one::presenter::handler(data) {
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
