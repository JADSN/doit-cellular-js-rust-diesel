use super::error::Error;

#[derive(Debug)]
pub struct Validator;

impl Validator {
    pub fn min_max_int(
        input_min: u8,
        min: u8,
        input_max: u8,
        max: u8,
    ) -> Result<bool, Error> {
        if input_min >= min && input_max <= max {
            Ok(true)
        } else {
            Err(Error::MinMax(min, max))
        }
    }

    //* STRING

    //* Exact length
    pub fn equal_length_string<S>(input: S, length: usize) -> bool
    where
        S: Into<String>,
    {
        input.into().len() == length
    }

    pub fn max_length_string<S>(input: S, length: usize) -> Result<bool, Error>
    where
        S: Into<String>,
    {
        if input.into().len() <= length {
            Ok(true)
        } else {
            Err(Error::Length(length))
        }
    }

    //* Analyse bussiness logic - what characters is valid input (Ex.: username, password, email, age)
    pub fn is_valid_ascii<S>(input: S) -> bool
    where
        S: Into<String>,
    {
        input.into().chars().all(|x| {
            x.is_ascii_alphanumeric() == true
                && x.is_ascii_control() == false
                && x.is_ascii_punctuation() == false
        })
    }
}
