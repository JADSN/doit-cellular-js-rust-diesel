const stateInitialState = (sender, message) => {
    // DESC: ...
    debug(`stateInitialState()`)
    const currentState = "InitialState"

    // ACL: Insert HERE all allowed senders.
    const AccessControlList = [
        "main"
    ]

    const errorMessage = `CELLULAR_JS - ACL Error: ${sender} cannot send message to ${currentState}. Try insert "${sender}" into ${currentState} AccessControlList at "${currentState.toLowerCase()}/state.js"`
    const isAllowedSender = (sender) => (AccessControlList.indexOf(sender) === -1) ? false : true
    if (isAllowedSender(sender)) {
        stateInitialStatePresenter(message)
    } else {
        debug(errorMessage, 'ERROR')
    }
}

