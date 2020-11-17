const stateShowSuggestionPasswordTooltipModel = async (message) => {
    debug(`stateShowSuggestionPasswordTooltipModel()`)

    const resp = await fetch(`${BASE_ADDRESS}/api/password`)
    const json = await resp.json()
    const count = json['password']

    return count
}

