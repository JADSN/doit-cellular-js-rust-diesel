const stateShowSuggestionPasswordTooltipView = async (modelResult) => {
    debug(`stateShowSuggestionPasswordTooltipView()`)
    return `
    <div class="tooltip" id="div-tooltip-password">
        <span id="div-tooltip-password-text" class="tooltiptext">${modelResult}</span>
    </div>`
}

