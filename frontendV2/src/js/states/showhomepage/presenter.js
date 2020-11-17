const stateShowHomePagePresenter = async (message) => {
    debug(`stateShowHomePagePresenter()`)
    const model = await stateShowHomePageModel(message)
    const view = await stateShowHomePageView(model)
    // AddEvenListener, innerHTML or Call Another State.

    const divMainContent = 'div#div-main-content'

    waitForElement({ "selector": divMainContent }, () => {
        // Render current state
        document.querySelector(divMainContent).innerHTML = view

        //* Array para definir os links que serão mostrados após algum evento
        const allow_links = ['SIGN IN', 'SIGN UP', 'ABOUT', 'RELEASES']
        stateShowNavbarPage(currentState, allow_links)
    })
}

