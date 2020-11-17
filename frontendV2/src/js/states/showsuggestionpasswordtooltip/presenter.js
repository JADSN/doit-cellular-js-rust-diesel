const stateShowSuggestionPasswordTooltipPresenter = async (message) => {
    debug(`stateShowSuggestionPasswordTooltipPresenter()`)
    const model = await stateShowSuggestionPasswordTooltipModel(message)
    const view = await stateShowSuggestionPasswordTooltipView(model)
    // AddEvenListener, innerHTML or Call Another State.

    waitForElement({ "selector": "input#inp-login-password" }, () => {

        let count_of_mouse_hovers = 0

        document.querySelector('input#inp-login-password').addEventListener('mouseover', (evt) => {

            count_of_mouse_hovers = count_of_mouse_hovers + 1

            if (count_of_mouse_hovers === 1) {

                const el = document.querySelector("div#div-tooltip-entrypoint");

                el.insertAdjacentHTML('afterbegin', view)

                document.querySelector('div#div-tooltip-entrypoint > div > span').style.visibility = "visible"

                document.querySelector('div#div-tooltip-entrypoint > div > span').addEventListener('copy', async (evt) => {
                    const generatedPassword = await navigator.clipboard.readText();

                    const elTarget = document.querySelector('input#inp-login-password')
                    elTarget.value = generatedPassword

                    // TODO: Update length password
                    document.querySelector('span#span-min-chars-password').textContent = generatedPassword.length
                    document.querySelector("div#div-tooltip-entrypoint > div > span").remove();
                })

            } else {
                count_of_mouse_hovers = 2
            }
        })
    })
}

