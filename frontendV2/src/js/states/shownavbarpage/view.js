const stateShowNavbarPageView = async (links) => {
    debug(`stateShowNavbarPageView()`)

    let links_navbar = ``
    links.forEach(link => {

        const link_lower = link.toLowerCase()
        const link_split = link_lower.split(' ')

        const href = link_split.join('')

        const link_join = link_split.join('-')
        const link_result = 'a-' + link_join

        links_navbar +=
            `<a id="${link_result}" "href="/${href}">
                ${link}
            </a>`
    })


    const page = `
    <span class="span-doit"> <a id="doit-logo" href="#">DOIT</a></span>
    <nav class="nav-right">
        ${links_navbar}
    </nav>
    `
    return page
}

