const stateShowSignInPage = (sender, message) => {
    // DESC: ...
    debug(`stateShowSignInPage()`)
    const currentState = "ShowSignInPage"

    // ACL: Insert HERE all allowed senders.
    const AccessControlList = [
        "ShowNavbarPage",
        "InsertOneUser"
    ]

    const errorMessage = `CELLULAR_JS - ACL Error: ${sender} cannot send message to ${currentState}. Try insert "${sender}" into ${currentState} AccessControlList at "${currentState.toLowerCase()}/state.js"`
    const isAllowedSender = (sender) => (AccessControlList.indexOf(sender) === -1) ? false : true
    if (isAllowedSender(sender)) {
        stateShowSignInPagePresenter(message)
    } else {
        debug(errorMessage, 'ERROR')
    }
}

