use serde::Serialize;

#[derive(Debug, Serialize)]
pub struct GenPassword {
    pub password: String,
}
