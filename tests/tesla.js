
var theFuture = {}
module.exports = {
    beforeEach: browser => {
        theFuture = browser.page.teslaPage()
        theFuture.navigate()
    },
    after: browser => {
        theFuture.end()
    },
    'First': browser => {
        theFuture.firstRun()
    },
    'Second': browser => {
        theFuture.customModelS()
    },
    'Third': browser => {
        theFuture.customModelX()
    },
    'Forth': browser => {
        theFuture.customModel3()
    }
    
    
}
