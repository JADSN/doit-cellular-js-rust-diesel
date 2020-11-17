const stateShowFooterPagePresenter = async (message) => {
    debug(`stateShowFooterPagePresenter()`)
    const model = await stateShowFooterPageModel(message)
    const view = await stateShowFooterPageView(model)
    // AddEvenListener, innerHTML or Call Another State.

    const divFooter = 'div#div-footer'

    waitForElement({ "selector": divFooter }, () => {
        // Render current state
        document.querySelector(divFooter).innerHTML = view
    })
}

