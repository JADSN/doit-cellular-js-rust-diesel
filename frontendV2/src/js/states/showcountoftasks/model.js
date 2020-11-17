const stateShowCountOfTasksModel = async (message) => {
    debug(`stateShowCountOfTasksModel()`)

    const resp = await fetch(`${BASE_ADDRESS}/api/tasks/count`)
    const json = await resp.json()
    const count = json['count']

    return count
}

