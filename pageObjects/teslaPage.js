
module.exports = {
    url: 'https://www.tesla.com/',
    commands: [],
    elements: {
    
    teslaMain: '.tds-header-main--logo',
    
    //top header catagories
    modelS: {
        selector: '(//li/a[@href="/models"])[0]',
        locateStrategy: 'xpath',
    },
    model3: {
        selector: '//li/a[@href="/model3"])[0]',
        locateStrategy: 'xpath',
    },
    modelX: {
        selector: '//li/a[@href="/modelx"])[0]',
        locateStrategy: 'xpath',
    },
    modelY: {
        selector: '//li/a[@href="/modely"])[0]',
        locateStrategy: 'xpath',
    },
    cyberTruck: {
        selector: '//li/a[@href="/cybertruck"])[0]',
        locateStrategy: 'xpath',
    },
    roadster: {
        selector: '//li/a[@href="/roadster"])[0]',
        locateStrategy: 'xpath',
    },
    energy: {
        selector: '//li/a[@href="/energy"])[0]',
        locateStrategy: 'xpath',

    //burger button drop down catagories
    },
    existInventory: {
        selector: '//li/a[@href="/inventory/new/ms"])[1]',
        locateStrategy: 'xpath',
    },
    usedInventory: {
        selector: '//li/a[@href="/inventory/new/ms"])[1]',
        locateStrategy: 'xpath',
    },
    insurance: {
        selector: '//li/a[@href="/insurance"])[1]',
        locateStrategy: 'xpath',
    },
    testDrive: {
        selector: '//li/a[@href="/drive"])[1]',
        locateStrategy: 'xpath',
    },
    findUs: {
        selector: '//li/a[@href="/findus"])[1]',
        locateStrategy: 'xpath',
    },
    support: {
        selector: '//li/a[@href="/support"])[1]',
        locateStrategy: 'xpath',
    },
    newsletter: {
        selector: '//li/a[@href="/updates"])[0]',
        locateStrategy: 'xpath',
    },
    news: {
        selector: '//li/a[@href="/blog"])[0]',
        locateStrategy: 'xpath',
    },
    charging: {
        selector: '//li/a[@href="/charging"])[0]',
        locateStrategy: 'xpath',
    },
    semi: {
        selector: '//li/a[@href="/semi"])[0]',
        locateStrategy: 'xpath',
    },
    carbonImpact: {
        selector: '//li/a[@href="/carbonimpact"])[0]',
        locateStrategy: 'xpath',
    },
    customOrderButton: {
        selector: '//div/a[@title="Custom Order"])[1]',
        locateStrategy: 'xapth',
    },
    existInventoryButton: {
        selector: '//div/a[@title="Existing Inventory"])[1]',
        locateStrategy: 'xpath',
    },
    //Home page slide buttons
    middleSlide: {
        selector: '//li/button[@data-active-slide="item1"]',
        locateStrategy: 'xpath',
    },
    rightSlide: {
        selector: '//li/button[@data-active-slide="item2"]',
        locateStrategy: 'xpath',
    },
    leftSlide: {
        selector: '//li/button[@data-active-slide="item0"]',
        locateStrategy: 'xpath',
    },
    //Header Tabs
    carTab: {
        selector: '//li[contains(@arial-label,"battery")]',
        locateStrategy: 'xpath',
    },
    exteriorTab: {
        selector: '//li[contains(@arial-label,"paint")]',
        locateStrategy: 'xpath',
    },
    interiorTab: {
        selector: '//li[contains(@arial-label,"interior")]',
        locateStrategy: 'xpath',
    },
    autopilotTab: {
        selector: '//li[contains(@arial-label,"autopilot")]',
        locateStrategy: 'xpath',
    },
    paymentTab: {
        selector: '//li[contains(@arial-label,"payment")]',
        locateStrategy: 'xpath',
    },
    //Custom Colors
    whiteButton: {
        selector: '//div[@aria-label="Pearl White Multi-Coat"]',
        locateStrategy: 'xpath',
    },
    blackButton: {
        selector: '//div[@aria-label="Solid Black"]',
        locateStrategy: 'xpath',
    },
    midnightButton: {
        selector: '//div[@aria-label="Midnight Silver Metallic"]',
        locateStrategy: 'xpath',
    },
    blueButton: {
        selector: '//div[@aria-label="Deep Blue Metallic"]',
        locateStrategy: 'xpath',
    },
    redButton: {
        selector: '//div[@aria-label="Red Multi-Coat"]',
        locateStrategy: 'xpath',
    },
    //Drive
    performance: {
        selector: '//div[@aria-label="Performance"])[1]',
        locateStrategy: 'xpath',
    },
    longRange: {
        selector: '//div[@aria-label="Long Range"])[1]',
        locateStrategy: 'xpath',
    },
    //Wheels
    turbineWheels: {
        selector: '//div[contains(@aria-label,"21")]',
        locateStrategy: 'xpath',
    },
    onyxWheels: {
        selector: '//div[contains(@aria-label,"Onyx Black Wheels")]',
        locateStrategy: 'xpath',
    },
    aeroWheels: {
        selector: '//div[contains(@aria-label,"Aero Wheels")]',
        locateStrategy: 'xpath',
    },
    //Interior
    interiorCream: {
        selector: '//div[@aria-label="Cream"]',
        locateStrategy: 'xpath',
    },
    interiorAllBlack: {
        selector: '//div[@aria-label="All Black"])[0]',
        locateStrategy: 'xpath',
    },
    sevenSeat: {
        selector: '//div[@aria-label="Seven Seat Interior"])[0]',
        locateStrategy: 'xpath',
    },

    fulldrivingCheckBox: {
        selector: '//div/i[@class="icon-checkbox option-checkbox--icon icon-checkbox--blue"]',
        locateStrategy: 'xpath',
    },
    teslaHome: {
        selector: '//h1/a[@title="Tesla Motors"])[1]',
        locateStrategy: 'xpath',
    },
    nextButton: '[data-id="btn-navigation"]',
    titlePage: '.review-page--title',

}
}