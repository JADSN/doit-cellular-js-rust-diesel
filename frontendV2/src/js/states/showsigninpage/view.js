const stateShowSignInPageView = async (modelResult) => {
    debug(`stateShowSignInPageView()`)
    const page =
        `
        <div class="content"> 
            <span id="span-login" class="span-login">LOGIN</span>
            <span id="span-msg" class="span-msg"></span>

            <label for="inp-login-username">USERNAME (<span id="span-min-chars-username">0</span> / ${MAX_LEGTH_INPUT_USER})</label>
            <div class="div-inp-and-msg">
                <h6 id="h6-inp-username-msg"></h6>
                <input type="text" placeholder="USERNAME" id="inp-login-username">
            </div>

            <label for="inp-login-password">PASSWORD (<span id="span-min-chars-password">0</span> / ${MAX_LEGTH_INPUT_USER})</label>

            <div class="div-inp-and-msg">
                <h6 id="h6-inp-password-msg"></h6>
                <input type="password" placeholder="PASSWORD" id="inp-login-password">

                <div id="div-tooltip-entrypoint"></div>
            </div>

            <button type="button" id="btn-sign-in" class="btn-sign-in" >SIGN IN</button>
    </div>
    `
    return page
}

