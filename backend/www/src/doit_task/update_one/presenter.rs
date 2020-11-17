use tide::Request;

pub async fn handler(req: Request<()>) -> tide::Result {
    match super::model::update_one(req).await {
        Ok(data) => super::view::view_ok(data),
        Err(error) => super::view::view_err(error),
    }
}
