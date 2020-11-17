const stateCreateTaskModel = async (taskDescription) => {
    debug(`stateCreateTaskModel()`)

    const data = {
        description: taskDescription,
        done: false
    }

    const bodyJson = JSON.stringify(data)

    const result = await fetch(`${BASE_ADDRESS}/api/tasks`,
        {
            "method": "POST",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            "body": bodyJson
        })
        .then(resp => resp.json())
        .catch(() => JSON.parse('{ "status": false }'))

    return result
}

