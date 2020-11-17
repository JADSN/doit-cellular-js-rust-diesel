const stateShowBarebonePagePresenter = async (message) => {
    debug(`stateShowBarebonePagePresenter()`)
    const model = await stateShowBarebonePageModel(message)
    const view = await stateShowBarebonePageView(model)
    // AddEvenListener, innerHTML or Call Another State.

    const divApp = 'div#app'

    waitForElement({ "selector": divApp }, () => {
        // Render current state
        document.querySelector(divApp).innerHTML = view

        //* Array para definir os links que serão mostrados após algum evento
        const allow_links = ["SIGN IN", 'SIGN UP', 'ABOUT', 'RELEASES']
        stateShowNavbarPage(currentState, allow_links)

        stateShowHomePage(currentState, null)
        // stateShowAboutPage(currentState, null)

        stateShowFooterPage(currentState, null)
    })




}

