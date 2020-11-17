use crate::schema::tasks;
use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize)]
pub struct ReadCount {
    pub count: i64,
}

#[derive(Debug, Queryable, AsChangeset, Serialize)]
pub struct Task {
    pub id: i32,
    pub done: bool,
    pub description: String,
    #[serde(skip_deserializing, skip_serializing)]
    pub user_id: i32,
}

#[derive(Debug, Deserialize)]
pub struct TaskUpdate {
    pub done: bool,
    pub description: String,
}

#[derive(Debug, Serialize)]
pub struct AllTasks {
    pub tasks: Vec<Task>,
}

#[table_name = "tasks"]
#[derive(Debug, Insertable, Deserialize)]
pub struct TaskInsert {
    done: bool,
    description: String,
    #[serde(skip_deserializing, skip_serializing)]
    user_id: i32,
}

impl TaskInsert {
    pub fn override_id(&mut self, new_value: i32) {
        self.user_id = new_value
    }
}
