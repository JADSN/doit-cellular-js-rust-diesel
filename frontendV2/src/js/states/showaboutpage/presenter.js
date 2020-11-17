const stateShowAboutPagePresenter = async (message) => {
    debug(`stateShowAboutPagePresenter()`)
    const model = await stateShowAboutPageModel(message)
    const view = await stateShowAboutPageView(model)
    // AddEvenListener, innerHTML or Call Another State.

    const divMainContent = 'div#div-main-content'

    waitForElement({ "selector": divMainContent }, () => {
        // Render current state
        document.querySelector(divMainContent).innerHTML = view
    })
}

