use std::error::Error as StdError;
use std::fmt;

#[derive(Debug)]
pub enum Error {
    Length(usize),
    MinMax(u8, u8),
}

impl fmt::Display for Error {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        match self {
            Error::Length(_) => {
                write!(f, "The input is not less than or equal to length")
            }
            Error::MinMax(min, max) => {
                write!(f, "The number isn't between {:?} and {:?}", min, max)
            }
        }
    }
}

impl StdError for Error {
    fn source(&self) -> Option<&(dyn StdError + 'static)> {
        None
    }
}
