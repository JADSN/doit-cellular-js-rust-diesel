const stateShowQtdeChangeInputComponent = (sender, message) => {
    // DESC: ...
    debug(`stateShowQtdeChangeInputComponent()`)
    const currentState = "ShowQtdeChangeInputComponent"

    // ACL: Insert HERE all allowed senders.
    const AccessControlList = [
        "ShowSignInPage",
        "ShowSignUpPage"
    ]

    const errorMessage = `CELLULAR_JS - ACL Error: ${sender} cannot send message to ${currentState}. Try insert "${sender}" into ${currentState} AccessControlList at "${currentState.toLowerCase()}/state.js"`
    const isAllowedSender = (sender) => (AccessControlList.indexOf(sender) === -1) ? false : true
    if (isAllowedSender(sender)) {
        stateShowQtdeChangeInputComponentPresenter(message)
    } else {
        debug(errorMessage, 'ERROR')
    }
}

