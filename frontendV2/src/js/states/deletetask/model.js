const stateDeleteTaskModel = async (idEl) => {
    debug(`stateDeleteTaskModel()`)

    const idString = getElementIdFromString(idEl)
    const id = parseInt(idString, 10)

    const result = await fetch(`${BASE_ADDRESS}/api/tasks/${id}`,
        {
            "method": "DELETE",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        .then(resp => resp.json())
        .catch(() => JSON.parse('{ "deleted": false }'))

    return result
}

