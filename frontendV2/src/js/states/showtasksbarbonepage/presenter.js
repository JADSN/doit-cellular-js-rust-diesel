const stateShowTasksBarbonePagePresenter = async (message) => {
    debug(`stateShowTasksBarbonePagePresenter()`)
    const model = await stateShowTasksBarbonePageModel(message)
    const view = await stateShowTasksBarbonePageView(model)
    // AddEvenListener, innerHTML or Call Another State.

    const divMainContent = 'div#div-main-content'

    waitForElement({ "selector": divMainContent }, () => {
        document.querySelector(divMainContent).innerHTML = view

        stateShowCountOfTasks(currentState, null)
        stateShowAllTasksPage(currentState, null)

    })

}

