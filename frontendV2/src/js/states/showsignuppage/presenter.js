const stateShowSignUpPagePresenter = async (message) => {
    debug(`stateShowSignUpPagePresenter()`)
    const model = await stateShowSignUpPageModel(message)
    const view = await stateShowSignUpPageView(model)
    // AddEvenListener, innerHTML or Call Another State.

    const divMainContent = 'div#div-main-content'

    waitForElement({ "selector": divMainContent }, () => {
        // Render current state
        document.querySelector(divMainContent).innerHTML = view

        stateShowQtdeChangeInputComponent(currentState, 'input#inp-login-username')
        stateShowQtdeChangeInputComponent(currentState, 'input#inp-login-password')

        //* Show tooltip - Suggestion password
        stateShowSuggestionPasswordTooltip(currentState, null)
    })

    const buttonSignUp = 'button#btn-sign-up'

    waitForElement({ "selector": buttonSignUp }, () => {

        document.querySelector(buttonSignUp).addEventListener('click', () => {
            //* Array para definir os links que serão mostrados após algum evento
            const allow_links = ["SIGN IN", "ABOUT", 'RELEASES', 'LOGOUT']

            stateShowNavbarPage(currentState, allow_links)

            const username = document.querySelector('#inp-login-username').value;
            const password = document.querySelector('#inp-login-password').value;

            const data = {
                username: username,
                password: password
            }

            stateInsertOneUser(currentState, data)
        })
    })
}

