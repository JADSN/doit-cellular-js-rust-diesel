const stateInsertOneUserModel = async (message) => {
    debug(`stateInsertOneUserModel()`)

    const bodyJson = JSON.stringify(message)

    const result = await fetch(`${BASE_ADDRESS}/api/users`,
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
        .catch(error => {
            JSON.parse(error.toString())
        })

    return result

}

