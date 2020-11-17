const stateShowQtdeChangeInputComponentPresenter = async (idElInputText) => {
    debug(`stateShowQtdeChangeInputComponentPresenter()`)
    const model = await stateShowQtdeChangeInputComponentModel(message)
    const view = await stateShowQtdeChangeInputComponentView(model)
    // AddEvenListener, innerHTML or Call Another State.

    // * Min and max of characters in input and span - [USERNAME | PASSWORD]
    waitForElement({ "selector": idElInputText }, () => {

        document.querySelector(idElInputText).addEventListener('input', (evt) => {
            const elValue = evt.target.value.length

            const inpName = `span#span-min-chars-${view}`

            document.querySelector(inpName).textContent = elValue

            if (elValue >= MAX_LEGTH_INPUT_USER + 1) {
                document.querySelector(inpName).textContent = MAX_LEGTH_INPUT_USER
            }

            if (elValue > MAX_LEGTH_INPUT_USER) {
                let arr = evt.target.value.split('')
                arr.pop()

                const arrJoin = arr.join('')
                evt.target.value = arrJoin
            }
        })

    })

}

