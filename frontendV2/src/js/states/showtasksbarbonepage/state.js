const stateShowTasksBarbonePage = (sender, message) => {
    // DESC: ...
    debug(`stateShowTasksBarbonePage()`)
    const currentState = "ShowTasksBarbonePage"

    // ACL: Insert HERE all allowed senders.
    const AccessControlList = [
        "IsValidAuth"
    ]

    const errorMessage = `CELLULAR_JS - ACL Error: ${sender} cannot send message to ${currentState}. Try insert "${sender}" into ${currentState} AccessControlList at "${currentState.toLowerCase()}/state.js"`
    const isAllowedSender = (sender) => (AccessControlList.indexOf(sender) === -1) ? false : true
    if (isAllowedSender(sender)) {
        stateShowTasksBarbonePagePresenter(message)
    } else {
        debug(errorMessage, 'ERROR')
    }
}

