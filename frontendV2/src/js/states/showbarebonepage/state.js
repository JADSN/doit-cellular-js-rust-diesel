const stateShowBarebonePage = (sender, message) => {
    // DESC: ...
    debug(`stateShowBarebonePage()`)
    const currentState = "ShowBarebonePage"

    // ACL: Insert HERE all allowed senders.
    const AccessControlList = [
        "InitialState"
    ]

    const errorMessage = `CELLULAR_JS - ACL Error: ${sender} cannot send message to ${currentState}. Try insert "${sender}" into ${currentState} AccessControlList at "${currentState.toLowerCase()}/state.js"`
    const isAllowedSender = (sender) => (AccessControlList.indexOf(sender) === -1) ? false : true
    if (isAllowedSender(sender)) {
        stateShowBarebonePagePresenter(message)
    } else {
        debug(errorMessage, 'ERROR')
    }
}

