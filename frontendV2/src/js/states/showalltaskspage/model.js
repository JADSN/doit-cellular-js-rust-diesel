const stateShowAllTasksPageModel = async (message) => {
    debug(`stateShowAllTasksPageModel()`)
    const tasks = await fetch(`${BASE_ADDRESS}/api/tasks`)
        .then(response => response.json())
        .then(data => data['tasks'])

    return tasks

}

