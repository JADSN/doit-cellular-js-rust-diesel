const stateShowReleasesPagePresenter = async (message) => {
    debug(`stateShowReleasesPagePresenter()`)
    const model = await stateShowReleasesPageModel(message)
    const view = await stateShowReleasesPageView(model)
    // AddEvenListener, innerHTML or Call Another State.

    const divMainContent = 'div#div-main-content'

    waitForElement({ "selector": divMainContent }, () => {
        // Render current state
        document.querySelector(divMainContent).innerHTML = view
    })
}

