const stateShowFooterPage = (sender, message) => {
    // DESC: ...
    debug(`stateShowFooterPage()`)
    const currentState = "ShowFooterPage"

    // ACL: Insert HERE all allowed senders.
    const AccessControlList = [
        "ShowBarebonePage"
    ]

    const errorMessage = `CELLULAR_JS - ACL Error: ${sender} cannot send message to ${currentState}. Try insert "${sender}" into ${currentState} AccessControlList at "${currentState.toLowerCase()}/state.js"`
    const isAllowedSender = (sender) => (AccessControlList.indexOf(sender) === -1) ? false : true
    if (isAllowedSender(sender)) {
        stateShowFooterPagePresenter(message)
    } else {
        debug(errorMessage, 'ERROR')
    }
}

