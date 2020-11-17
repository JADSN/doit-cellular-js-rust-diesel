const stateInsertOneUser = (sender, message) => {
    // DESC: ...
    debug(`stateInsertOneUser()`)
    const currentState = "InsertOneUser"

    // ACL: Insert HERE all allowed senders.
    const AccessControlList = [
        "ShowSignUpPage"
    ]

    const errorMessage = `CELLULAR_JS - ACL Error: ${sender} cannot send message to ${currentState}. Try insert "${sender}" into ${currentState} AccessControlList at "${currentState.toLowerCase()}/state.js"`
    const isAllowedSender = (sender) => (AccessControlList.indexOf(sender) === -1) ? false : true
    if (isAllowedSender(sender)) {
        stateInsertOneUserPresenter(message)
    } else {
        debug(errorMessage, 'ERROR')
    }
}

