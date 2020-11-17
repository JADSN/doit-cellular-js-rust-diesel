use serde::Deserialize;

#[derive(Debug, Clone, Deserialize)]
pub struct Auth {
    pub username: String,
    pub password: String,
}

impl Auth {
    pub fn new(username: String, password: String) -> Self {
        Self { username, password }
    }

    pub fn is_authorized(&self, username: String, password: String) -> bool {
        self.username == username && self.password == password
    }
}
