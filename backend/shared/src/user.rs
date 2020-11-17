use crate::schema::users;
use auth::auth::Auth;
use serde::Deserialize;

#[derive(Debug, Deserialize, Default, Queryable)]
pub struct User {
    pub id: i32,
    pub username: String,
    pub password: String,
}

#[derive(Debug, Deserialize, Queryable, Insertable)]
#[table_name = "users"]
pub struct UserLogin {
    pub username: String,
    pub password: String,
}

impl User {
    pub fn new(id: i32, username: String, password: String) -> Self {
        Self {
            id,
            username,
            password,
        }
    }

    pub fn from_auth(auth: Auth) -> UserLogin {
        UserLogin {
            username: auth.username,
            password: auth.password,
        }
    }
}
