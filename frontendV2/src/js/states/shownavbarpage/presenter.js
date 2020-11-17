const stateShowNavbarPagePresenter = async (message) => {
    debug(`stateShowNavbarPagePresenter()`)
    const model = await stateShowNavbarPageModel(message)
    const view = await stateShowNavbarPageView(model)
    // AddEvenListener, innerHTML or Call Another State.

    const divNavbar = 'div#div-navbar'

    waitForElement({ "selector": divNavbar }, () => {
        // Render current state
        document.querySelector(divNavbar).innerHTML = view
    })

    const aDoit = 'a#doit-logo'

    waitForElement({ "selector": aDoit }, () => {
        document.querySelector(aDoit).addEventListener('click', () => {
            stateShowHomePage(currentState, null)
        })
    })

    const aAbout = 'a#a-about'

    waitForElement({ "selector": aAbout }, () => {
        document.querySelector(aAbout).addEventListener('click', () => {
            stateShowAboutPage(currentState, null)
        })
    })

    const aSignIn = 'a#a-sign-in'

    if (document.querySelector(aSignIn) !== null) {
        document.querySelector(aSignIn).addEventListener('click', () => {
            stateShowSignInPage(currentState, null)
        })
    }

    const aSignUp = 'a#a-sign-up'

    if (document.querySelector(aSignUp) !== null) {
        document.querySelector(aSignUp).addEventListener('click', () => {
            stateShowSignUpPage(currentState, null)
        })
    }

    const aReleases = 'a#a-releases'

    waitForElement({ "selector": aReleases }, () => {
        document.querySelector(aReleases).addEventListener('click', () => {
            stateShowReleasesPage(currentState, null)
        })
    })

    const aLogout = 'a#a-logout'


    if (document.querySelector(aLogout) !== null) {


        waitForElement({ "selector": aLogout }, () => {
            document.querySelector(aLogout).addEventListener('click', () => {
                stateShowHomePage(currentState, null)
            })
        })
    }


}

