const stateShowBarebonePageView = async (modelResult) => {
    debug(`stateShowBarebonePageView()`)
    const page = `
    <div class="container">
        <div id="div-navbar" class="div-navbar"></div>
        <div id="div-main-content" class="div-main-content"></div>
        <div id="div-footer" class="div-footer"></div>
    </div>
    `
    return page
}

