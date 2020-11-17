use error_handling::MyError;
use tide::{http::headers::HeaderValue, security::Origin};

use async_std::task;
use tide::{security::CorsMiddleware, Redirect};

// ! ENTRYPOINT
pub fn entrypoint() -> Result<(), MyError> {
    tide::log::start();

    let mut app = tide::new();

    //* CORS
    let cors = CorsMiddleware::new()
        .allow_methods("GET, POST, PUT, DELETE".parse::<HeaderValue>().unwrap())
        .allow_origin(Origin::from("*"))
        .allow_credentials(false);

    app.with(cors);

    // * STATIC FILES
    app.at("/").get(Redirect::new("/static/index.html"));
    app.at("/static")
        .serve_dir("static/")
        .expect("Error to load static directory");

    // * API
    app.at("/login").post(crate::auth::presenter::handler);

    app.at("/api").nest({
     let mut api = tide::new();

     api.at("/password").get(crate::utilities::genpassword::presenter::handler);

     api.at("/tasks").nest({
         let mut api_tasks = tide::new();

         api_tasks
             .at("/")
             .get(crate::doit_task::read_all::presenter::handler)
             .post(crate::doit_task::insert_one::presenter::handler);

         api_tasks.at("/count").nest({
             let mut api_tasks_count = tide::new();

             api_tasks_count
             .at("/")
             .get(crate::doit_task::read_count::count::presenter::handler);

             api_tasks_count
             .at("/all_done")
             .get(crate::doit_task::read_count::filter::all_done::presenter::handler);

             api_tasks_count
             .at("/all_undone")
             .get(crate::doit_task::read_count::filter::all_undone::presenter::handler);


             api_tasks_count
         });

         api_tasks
             .at("/:id")
             .put(crate::doit_task::update_one::presenter::handler)
             .delete(crate::doit_task::delete_one::presenter::handler);

         api_tasks
     });

     api.at("/users").nest({
         let mut api_users = tide::new();

         api_users
             .at("/")
             // .get(crate::doit_task::read_all::presenter::handler)
             .post(crate::user::insert_one::presenter::handler);

         api_users
     });

     api
 });

    task::block_on(async {
        app.listen("0.0.0.0:8080").await?;
        Ok(())
    })
}
