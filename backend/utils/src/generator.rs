use shared::password::GenPassword;

pub struct Generator {}

impl Generator {
    pub fn gen_password(qtde_chars: usize) -> GenPassword {
        use rand::Rng;
        const CHARSET: &[u8] = b"ABCDEFGHIJKLMNOPQRSTUVWXYZ\
                                abcdefghijklmnopqrstuvwxyz\
                                0123456789)(*&^%$#@!~";;
        let mut rng = rand::thread_rng();

        let password = (0..qtde_chars)
            .map(|_| {
                let idx = rng.gen_range(0, CHARSET.len());
                CHARSET[idx] as char
            })
            .collect();

        GenPassword { password }
    }
}
