const stateShowCountOfTasks = (sender, message) => {
    // DESC: ...
    debug(`stateShowCountOfTasks()`)
    const currentState = "ShowCountOfTasks"

    // ACL: Insert HERE all allowed senders.
    const AccessControlList = [
        "ShowTasksBarbonePage",
        "CreateTask",
        "DeleteTask"
    ]

    const errorMessage = `CELLULAR_JS - ACL Error: ${sender} cannot send message to ${currentState}. Try insert "${sender}" into ${currentState} AccessControlList at "${currentState.toLowerCase()}/state.js"`
    const isAllowedSender = (sender) => (AccessControlList.indexOf(sender) === -1) ? false : true
    if (isAllowedSender(sender)) {
        stateShowCountOfTasksPresenter(message)
    } else {
        debug(errorMessage, 'ERROR')
    }
}

