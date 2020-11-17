use auth::auth::Auth;
use shared::{msg::Msg, status_message::StatusMessage};

use tide::{http::mime, Body, Request, Response};

pub async fn handler(mut req: Request<()>) -> tide::Result {
    match req.body_json::<Auth>().await {
        Ok(data_auth) => match super::model::model(data_auth) {
            Ok(data) => super::view::view_ok(data),
            Err(error) => super::view::view_err(error),
        },
        Err(error) => {
            // TODO: Errror handlig for Tide::Error
            let data = StatusMessage::new(Msg::ERROR(error.to_string()));
            dbg!(error.to_string());

            Ok(Response::builder(200)
                .body(Body::from_json(&data)?)
                .content_type(mime::JSON)
                .build())
        }
    }
}
