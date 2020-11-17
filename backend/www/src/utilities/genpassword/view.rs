use shared::password::GenPassword;
use tide::{http::mime, Body, Response};

pub fn view_ok(data: GenPassword) -> tide::Result {
    Ok(Response::builder(200)
        .body(Body::from_json(&data)?)
        .content_type(mime::JSON)
        .build())
}

pub fn view_err() -> tide::Result {
    Ok(Response::builder(200)
        .body(Body::empty())
        .content_type(mime::JSON)
        .build())
}
