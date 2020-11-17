const stateShowAllTasksPage = (sender, message) => {
    // DESC: ...
    debug(`stateShowAllTasksPage()`)
    const currentState = "ShowAllTasksPage"

    // ACL: Insert HERE all allowed senders.
    const AccessControlList = [
        "ShowTasksBarbonePage",
        "CreateTask",
        "UpdateTask",
        "DeleteTask"
    ]

    const errorMessage = `CELLULAR_JS - ACL Error: ${sender} cannot send message to ${currentState}. Try insert "${sender}" into ${currentState} AccessControlList at "${currentState.toLowerCase()}/state.js"`
    const isAllowedSender = (sender) => (AccessControlList.indexOf(sender) === -1) ? false : true
    if (isAllowedSender(sender)) {
        stateShowAllTasksPagePresenter(message)
    } else {
        debug(errorMessage, 'ERROR')
    }
}

