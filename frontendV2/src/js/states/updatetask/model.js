const stateUpdateTaskModel = async (idEl) => {
    debug(`stateUpdateTaskModel()`)

    const el = document.getElementById(idEl)
    const description = el.parentElement.firstElementChild.value
    const done = el.parentElement.children[1].firstElementChild.checked

    const idString = getElementIdFromString(idEl)
    const id = parseInt(idString, 10)

    const data = {
        description: description,
        done: done
    }

    const bodyJson = JSON.stringify(data)

    const result = await fetch(`${BASE_ADDRESS}/api/tasks/${id}`,
        {
            "method": "PUT",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            "body": bodyJson
        })
        .then(resp => resp.json())
        .catch(() => JSON.parse('{ "updated": false }'))

    return result

}

