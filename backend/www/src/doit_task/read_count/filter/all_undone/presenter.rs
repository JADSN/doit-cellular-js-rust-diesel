use tide::Request;

pub async fn handler(_req: Request<()>) -> tide::Result {
    match super::model::read_count() {
        Ok(data) => super::view::view_ok(data),
        Err(error) => super::view::view_err(error),
    }
}
