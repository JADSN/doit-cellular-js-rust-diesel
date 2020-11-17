const stateShowAboutPageView = async (modelResult) => {
    debug(`stateShowAboutPageView()`)
    const page = `
    <div class="content">
        <img class="img-me img-me-brightness" src="./assets/img/me.png" alt="me">
        <h1 class="about-identifier">MR.ELMUST</h1>
    </div>
    `
    return page
}

