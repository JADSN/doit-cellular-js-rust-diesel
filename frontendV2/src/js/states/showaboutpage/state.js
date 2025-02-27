const stateShowAboutPage = (sender, message) => {
    // DESC: ...
    debug(`stateShowAboutPage()`)
    const currentState = "ShowAboutPage"

    // ACL: Insert HERE all allowed senders.
    const AccessControlList = [
        "ShowBarebonePage",
        "ShowNavbarPage"
    ]

    const errorMessage = `CELLULAR_JS - ACL Error: ${sender} cannot send message to ${currentState}. Try insert "${sender}" into ${currentState} AccessControlList at "${currentState.toLowerCase()}/state.js"`
    const isAllowedSender = (sender) => (AccessControlList.indexOf(sender) === -1) ? false : true
    if (isAllowedSender(sender)) {
        stateShowAboutPagePresenter(message)
    } else {
        debug(errorMessage, 'ERROR')
    }
}

