const stateInitialStatePresenter = async (message) => {
    debug(`stateInitialStatePresenter()`)
    const model = await stateInitialStateModel(message)
    const view = await stateInitialStateView(model)
    // AddEvenListener, innerHTML or Call Another State.
    stateShowBarebonePage(currentState, null)
}

