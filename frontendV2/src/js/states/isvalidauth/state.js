const stateIsValidAuth = (sender, message) => {
    // DESC: ...
    debug(`stateIsValidAuth()`)
    const currentState = "IsValidAuth"

    // ACL: Insert HERE all allowed senders.
    const AccessControlList = [
        "ShowSignInPage",
        "ShowTasksBarbonePage"
    ]

    const errorMessage = `CELLULAR_JS - ACL Error: ${sender} cannot send message to ${currentState}. Try insert "${sender}" into ${currentState} AccessControlList at "${currentState.toLowerCase()}/state.js"`
    const isAllowedSender = (sender) => (AccessControlList.indexOf(sender) === -1) ? false : true
    if (isAllowedSender(sender)) {
        stateIsValidAuthPresenter(message)
    } else {
        debug(errorMessage, 'ERROR')
    }
}

