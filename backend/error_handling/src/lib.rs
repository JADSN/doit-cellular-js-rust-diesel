// * ERRORS

use std::{error, fmt, io::Error as IoError, num::ParseIntError};
use validator::error::Error as ValidatorError;

use diesel::result::Error as DieselError;
use serde_json::error::Error as SerdeError;

// type MyResult<T> = std::result::Result<T, MyError>;

#[derive(Debug)]
pub enum MyError {
    Diesel(DieselError),
    Serde(SerdeError),
    Io(IoError),
    Validator(ValidatorError),
    ParseNum(ParseIntError),
}

impl fmt::Display for MyError {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        match &*self {
            MyError::Diesel(ref e) => e.fmt(f),
            MyError::Serde(ref e) => e.fmt(f),
            MyError::Io(ref e) => e.fmt(f),
            MyError::Validator(ref e) => e.fmt(f),
            MyError::ParseNum(e) => e.fmt(f),
        }
    }
}

impl error::Error for MyError {
    fn source(&self) -> Option<&(dyn error::Error + 'static)> {
        match *self {
            // MyError::... => None,
            MyError::Diesel(ref e) => Some(e),
            MyError::Serde(ref e) => Some(e),
            MyError::Io(ref e) => Some(e),
            MyError::Validator(ref e) => Some(e),
            MyError::ParseNum(ref e) => Some(e),
        }
    }
}

impl From<DieselError> for MyError {
    fn from(err: DieselError) -> MyError {
        MyError::Diesel(err)
    }
}

impl From<SerdeError> for MyError {
    fn from(err: SerdeError) -> MyError {
        MyError::Serde(err)
    }
}

impl From<IoError> for MyError {
    fn from(err: IoError) -> MyError {
        MyError::Io(err)
    }
}

impl From<ValidatorError> for MyError {
    fn from(err: ValidatorError) -> MyError {
        MyError::Validator(err)
    }
}

impl From<ParseIntError> for MyError {
    fn from(err: ParseIntError) -> MyError {
        MyError::ParseNum(err)
    }
}
