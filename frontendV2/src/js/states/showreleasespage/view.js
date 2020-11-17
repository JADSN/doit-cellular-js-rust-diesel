const stateShowReleasesPageView = async (modelResult) => {
    debug(`stateShowReleasesPageView()`)
    const page = `
    <div class="content">
        <div class="changelog">
            <span class="changelog-date">1.1.1 (October 20, 2020)</span>

            <ul>
                <br>

                <li class="changelog-item">
                    <span class="changelog-status-added">ADDED: </span>
                    <span class="changelog-description">Sit anim reprehenderit sit laborum aute non non
                    </span>
                </li>
                <li class="changelog-item">
                    <span class="changelog-status-changed">CHANGED: </span>
                    <span class="changelog-description">Sit anim reprehenderit sit laborum aute non non
                        Lorem tempor ad laboris est Lorem.</span>
                </li>
                <li class="changelog-item">
                    <span class="changelog-status-fixed">FIXED: </span>
                    <span class="changelog-description">Sit anim reprehenderit sit laborum aute non non
                        Lorem tempor ad laboris est Lorem.</span>
                </li>
                <li class="changelog-item">
                    <span class="changelog-status-deprecated">DEPRECATED: </span>
                    <span class="changelog-description">Sit anim reprehenderit sit laborum aute non non
                        Lorem tempor ad laboris est Lorem.</span>
                </li>
            </ul>
        </div>

        <hr />

        <div class="changelog">
            <span class="changelog-date">1.1.1 (October 20, 2020)</span>

            <ul>
                <br>

                <li class="changelog-item">
                    <span class="changelog-status-added">ADDED: </span>
                    <span class="changelog-description">Sit anim reprehenderit sit laborum aute non non
                    </span>
                </li>
                <li class="changelog-item">
                    <span class="changelog-status-changed">CHANGED: </span>
                    <span class="changelog-description">Sit anim reprehenderit sit laborum aute non non
                        Lorem tempor ad laboris est Lorem.</span>
                </li>
                <li class="changelog-item">
                    <span class="changelog-status-fixed">FIXED: </span>
                    <span class="changelog-description">Sit anim reprehenderit sit laborum aute non non
                        Lorem tempor ad laboris est Lorem.</span>
                </li>
                <li class="changelog-item">
                    <span class="changelog-status-deprecated">DEPRECATED: </span>
                    <span class="changelog-description">Sit anim reprehenderit sit laborum aute non non
                        Lorem tempor ad laboris est Lorem.</span>
                </li>
            </ul>
        </div>

        <hr />


    </div>
    `
    return page
}

