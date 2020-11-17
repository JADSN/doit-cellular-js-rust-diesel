const stateShowSuggestionPasswordTooltip = (sender, message) => {
    // DESC: ...
    debug(`stateShowSuggestionPasswordTooltip()`)
    const currentState = "ShowSuggestionPasswordTooltip"

    // ACL: Insert HERE all allowed senders.
    const AccessControlList = [
        "ShowLoginPage",
        "ShowSignUpPage"
    ]

    const errorMessage = `CELLULAR_JS - ACL Error: ${sender} cannot send message to ${currentState}. Try insert "${sender}" into ${currentState} AccessControlList at "${currentState.toLowerCase()}/state.js"`
    const isAllowedSender = (sender) => (AccessControlList.indexOf(sender) === -1) ? false : true
    if (isAllowedSender(sender)) {
        stateShowSuggestionPasswordTooltipPresenter(message)
    } else {
        debug(errorMessage, 'ERROR')
    }
}

