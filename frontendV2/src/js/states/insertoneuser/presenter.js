const stateInsertOneUserPresenter = async (message) => {
    debug(`stateInsertOneUserPresenter()`)
    const model = await stateInsertOneUserModel(message)
    const view = await stateInsertOneUserView(model)
    // AddEvenListener, innerHTML or Call Another State.

    switch (model) {
        case "ALREADYEXISTS":
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
        case "CREATED":
            waitForElement({ "selector": "span#span-msg" }, () => {
                const spanMsg = document.querySelector('span#span-msg')
                spanMsg.classList.add('ok-msg')

                spanMsg.innerHTML = model

                setTimeout(() => {
                    spanMsg.classList.remove('ok-msg')
                    spanMsg.innerText = ''
                }, 3000);

            })
            setTimeout(() => {
                stateShowSignInPage(currentState, null)
            }, 2000);

            break;
        default:
            break;
    }
}

