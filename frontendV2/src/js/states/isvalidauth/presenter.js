const stateIsValidAuthPresenter = async (message) => {
    debug(`stateIsValidAuthPresenter()`)
    const model = await stateIsValidAuthModel(message)
    const view = await stateIsValidAuthView(model)
    // AddEvenListener, innerHTML or Call Another State.

    switch (model) {
        case "AUTHORIZED":
            stateShowTasksBarbonePage(currentState, null)

            //* Array para definir os links que serão mostrados após algum evento
            const allow_links = ['ABOUT', 'RELEASES', 'LOGOUT']
            stateShowNavbarPage(currentState, allow_links)

            break;
        case "UNAUTHORIZED":
            waitForElement({ "selector": "span#span-msg" }, () => {
                const spanMsg = document.querySelector('span#span-msg')
                spanMsg.classList.add('error-msg')

                spanMsg.innerHTML = model

                setTimeout(() => {
                    spanMsg.classList.remove('error-msg')

                    spanMsg.innerText = ''
                }, 3000);

            })
            break;
        default:
            waitForElement({ "selector": "span#span-msg" }, () => {
                const spanMsg = document.querySelector('span#span-msg')
                spanMsg.classList.add('error-msg')

                spanMsg.innerHTML = model['ERROR']

                setTimeout(() => {
                    spanMsg.classList.remove('error-msg')

                    spanMsg.innerText = ''
                }, 3000);

            })

            break;
    }
}

