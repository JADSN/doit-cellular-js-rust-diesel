const stateIsValidAuthModel = async (userLogin) => {
    debug(`stateIsValidAuthModel()`)

    const bodyJson = JSON.stringify(userLogin)

    const result = await fetch(`${BASE_ADDRESS}/login`,
        {
            "method": "POST",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            "body": bodyJson
        })
        .then(async resp => {
            const json = await resp.json()
            const status = json['status']

            return status
        })
        .catch(err => {
            return JSON.parse(err.toString())
        })

    return result
}

