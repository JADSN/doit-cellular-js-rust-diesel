use shared::doit_task::AllTasks;
use tide::Request;

pub async fn handler(_req: Request<()>) -> tide::Result {
    match super::model::model() {
        Ok(data) => super::view::view_ok(AllTasks { tasks: data }),
        Err(error) => super::view::view_err(error),
    }
}
