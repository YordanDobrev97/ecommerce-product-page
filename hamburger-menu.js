$('.hamburger-btn').click(() => {
    const navItemsContainer = $('.nav-items')
    navItemsContainer.show()

    const closeBtn = $('.close-btn')
    closeBtn.show()

    closeBtn.click(() => {
        navItemsContainer.hide()
        closeBtn.hide()
    })
})