#![warn(clippy::all)]
#![deny(unsafe_code)]

use error_handling::MyError;

#[async_std::main]
async fn main() -> Result<(), MyError> {
    // match db::bootstrap() {
    //     Ok(_) => www::run::entrypoint(),
    //     Err(err) => {
    //         dbg!(err.to_string());
    //         Err(err)
    //     }
    // }

    www::run::entrypoint()
}
