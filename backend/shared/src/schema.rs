table! {
    app (id) {
        id -> Integer,
        name -> Text,
        version -> Text,
    }
}

table! {
    tasks (id) {
        id -> Integer,
        done -> Bool,
        description -> Text,
        user_id -> Integer,
    }
}

table! {
    users (id) {
        id -> Integer,
        username -> Text,
        password -> Text,
    }
}

joinable!(tasks -> users (user_id));

allow_tables_to_appear_in_same_query!(app, tasks, users,);
