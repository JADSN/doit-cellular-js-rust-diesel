const stateShowNavbarPage = (sender, message) => {
    // DESC: ...
    debug(`stateShowNavbarPage()`)
    const currentState = "ShowNavbarPage"

    // ACL: Insert HERE all allowed senders.
    const AccessControlList = [
        "ShowBarebonePage",
        "ShowSignInPage",
        "ShowSignUpPage",
        "ShowHomePage",
        "IsValidAuth"
    ]

    const errorMessage = `CELLULAR_JS - ACL Error: ${sender} cannot send message to ${currentState}. Try insert "${sender}" into ${currentState} AccessControlList at "${currentState.toLowerCase()}/state.js"`
    const isAllowedSender = (sender) => (AccessControlList.indexOf(sender) === -1) ? false : true
    if (isAllowedSender(sender)) {
        stateShowNavbarPagePresenter(message)
    } else {
        debug(errorMessage, 'ERROR')
    }
}

