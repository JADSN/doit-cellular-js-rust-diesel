use serde::Serialize;

use super::msg::Msg;

#[derive(Debug, Serialize)]
pub struct StatusMessage {
    status: Msg,
}

impl StatusMessage {
    pub fn new(status: Msg) -> Self {
        Self { status }
    }
}
