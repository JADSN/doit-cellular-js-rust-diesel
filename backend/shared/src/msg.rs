use serde::Serialize;

#[derive(Debug, Serialize)]
pub enum Msg {
    CREATED,
    UPDATED,
    DELETED,
    AUTHORIZED,
    UNAUTHORIZED,
    ALREADYEXISTS,
    ERROR(String),
}
