const stateUpdateTask = (sender, message) => {
    // DESC: ...
    debug(`stateUpdateTask()`)
    const currentState = "UpdateTask"

    // ACL: Insert HERE all allowed senders.
    const AccessControlList = [
        "ShowAllTasksPage"
    ]

    const errorMessage = `CELLULAR_JS - ACL Error: ${sender} cannot send message to ${currentState}. Try insert "${sender}" into ${currentState} AccessControlList at "${currentState.toLowerCase()}/state.js"`
    const isAllowedSender = (sender) => (AccessControlList.indexOf(sender) === -1) ? false : true
    if (isAllowedSender(sender)) {
        stateUpdateTaskPresenter(message)
    } else {
        debug(errorMessage, 'ERROR')
    }
}

