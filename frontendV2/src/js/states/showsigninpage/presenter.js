const stateShowSignInPagePresenter = async (message) => {
    debug(`stateShowSignInPagePresenter()`)
    const model = await stateShowSignInPageModel(message)
    const view = await stateShowSignInPageView(model)
    // AddEvenListener, innerHTML or Call Another State.

    const divMainContent = 'div#div-main-content'

    waitForElement({ "selector": divMainContent }, () => {
        // Render current state
        document.querySelector(divMainContent).innerHTML = view

        stateShowQtdeChangeInputComponent(currentState, 'input#inp-login-username')
        stateShowQtdeChangeInputComponent(currentState, 'input#inp-login-password')

    })

    const buttonSignIn = 'button#btn-sign-in'

    waitForElement({ "selector": buttonSignIn }, () => {

        document.querySelector(buttonSignIn).addEventListener('click', () => {
            //* Array para definir os links que serão mostrados após algum evento
            const allow_links = ['SIGN IN', 'SIGN UP', 'ABOUT', 'RELEASES']
            stateShowNavbarPage(currentState, allow_links)

            const username = document.querySelector('#inp-login-username').value;
            const password = document.querySelector('#inp-login-password').value;

            const data = {
                username: username,
                password: password
            }

            stateIsValidAuth(currentState, data)

        })
    })
}

