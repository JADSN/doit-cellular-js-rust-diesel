-- Your SQL goes here
CREATE TABLE IF NOT EXISTS "app" (
    "id"	    INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
    "name"	    TEXT NOT NULL,
    "version"	TEXT NOT NULL
);

INSERT INTO "app" ("version", "name") VALUES ('0.1.1', 'doit');

-- TODO: Make relationship with tasks
CREATE TABLE IF NOT EXISTS "users" (
    "id"	    INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
    "username"	TEXT NOT NULL,
    "password"	TEXT NOT NULL
);

CREATE TABLE "tasks" (
	"id"	        INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	"done"      	BOOLEAN NOT NULL,
	"description"	TEXT NOT NULL,
    "user_id"	    INTEGER NOT NULL,

    FOREIGN KEY (user_id) REFERENCES users (id) 
);