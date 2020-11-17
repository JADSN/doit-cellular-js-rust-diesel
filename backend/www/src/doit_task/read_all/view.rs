use shared::{doit_task::AllTasks, msg::Msg, status_message::StatusMessage};

use error_handling::MyError;
use tide::{http::mime, Body, Response};

pub fn view_ok(data: AllTasks) -> tide::Result {
    Ok(Response::builder(200)
        .body(Body::from_json(&data)?)
        .content_type(mime::JSON)
        .build())
}

pub fn view_err(error: MyError) -> tide::Result {
    let status_message = StatusMessage::new(Msg::ERROR(error.to_string()));

    Ok(Response::builder(200)
        .body(Body::from_json(&status_message)?)
        .content_type(mime::JSON)
        .build())
}
