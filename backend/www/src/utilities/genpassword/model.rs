use error_handling::MyError;
use shared::password::GenPassword;
use utils::generator::Generator;

use tide::Request;

pub async fn model(_req: Request<()>) -> Result<GenPassword, MyError> {
    Ok(Generator::gen_password(16))
}
