
var teslaCommands = {
    firstRun: function () {
        this 
        .click('@modelS')
        .waitForElementPresent('@sideModelS')
        .click('@sideSafety')
        .click('@sidePerformance')
        .click('@sideRange')
        .click('@sideAuto')
        .click('@sideInt')
        .click('@sideEx')
        .click('@sideSpec')
        .click('@sideOrder')
        .click('@teslaMain')
        .waitForElementPresent('@model3')
        .pause(5000)
        .click('@model3')
        .waitForElementPresent('@sideModel3')
        .click('@sideSafety')
        .click('@sidePerformance')
        .click('@sideAllWheel')
        .click('@sideRange')
        .click('@sideAuto')
        .click('@sideInt')
        .click('@sideSpec')
        .click('@sideOrder')
        .click('@backToTop')
        .waitForElementPresent('@modelX')
        .pause(5000)
        .click('@modelX')
        .waitForElementPresent('@sideModelX')
        .click('@sideSafety')
        .click('@sideUtility')
        .click('@sideRange')
        .click('@sideAuto')
        .click('@sidePerformance')
        .click('@sideInt')
        .click('@sideEx')
        .click('@sideSpec')
        .click('@sideOrder')
        .click('@backToTop')
        .waitForElementPresent('@modelY')
        .pause(5000)
        .click('@modelY')
        .waitForElementPresent('@sideModelY')
        .click('@sideSafety')
        .click('@sideUtility')
        .click('@sideAllWheel')
        .click('@sideRange')
        .click('@sideAuto')
        .click('@sideInt')
        .click('@sideSpec')
        .click('@sideOrder')
        .click('@backToTop')
        .waitForElementPresent('@cyberTruck')
        .pause(5000)
        .click('@cyberTruck')
        .waitForElementPresent('@energy')
        .pause(5000)
        .click('@roadster')
        return this
    },
     customModelS: function () {
        this
        .click('@leftSlide')
        .click('@customOrderLeft')
        .waitForElementPresent('@longRange')
        .click('@longRange')
        .click('@nextButton')
        .waitForElementPresent('@whiteButton')
        .click('@redButton')
        .click('@turbineWheels')
        .click('@nextButton')
        .waitForElementPresent('@interiorCream')
        .pause(5000)
        .click('@interiorCream')
        .click('@nextButton')
        .click('@checkBox')
        .click('@nextButton')
        return this
     },
     customModelX: function () {
        this
        .click('@rightSlide')
        .click('@customOrderRight')
        .waitForElementPresent('@performance')
        .click('@performance')
        .click('@nextButton')
        .waitForElementPresent('@blackButton')
        .click('@blackButton')
        .click('@onyxWheels')
        .click('@nextButton')
        .waitForElementPresent('@interiorAllBlack')
        .pause(5000)
        .click('@interiorAllBlack')
        .click('@sevenSeat')
        .click('@nextButton')
        .click('@checkBox')
        .click('@nextButton')
        return this
     },
     customModel3: function () {
         this
         .click('@middleSlide') 
         .click('@customOrderMiddle')
         .waitForElementPresent('@performance2')
         .pause(5000)
         .click('@performance2')
         .click('@nextButton')
         .click('@blueButton')
         .click('@nextButton')
         .click('@interiorBlkWhte')
         .click('@nextButton')
         return this
}

}


module.exports = {
    url: 'https://www.tesla.com/',
    commands: [teslaCommands],
    elements: {
    
    backToTop: '[aria-labelledby="btn--return_to_top"]',
    checkBox: '.icon-checkbox',
    teslaMain: {
        selector: '(//i[@aria-hidden="true"])[3]',
        locateStrategy: 'xpath',
    },
    
    //top header catagories
    modelS: {
        selector: '(//li/a[@href="/models"])[1]',
        locateStrategy: 'xpath',
    },
    model3: {
        selector: '(//li/a[@href="/model3"])[1]',
        locateStrategy: 'xpath',
    },
    modelX: {
        selector: '(//li/a[@href="/modelx"])[1]',
        locateStrategy: 'xpath',
    },
    modelY: {
        selector: '(//li/a[@href="/modely"])[1]',
        locateStrategy: 'xpath',
    },
    cyberTruck: {
        selector: '(//li/a[@href="/cybertruck"])[1]',
        locateStrategy: 'xpath',
    },
    roadster: {
        selector: '(//li/a[@href="/roadster"])[1]',
        locateStrategy: 'xpath',
    },
    energy: {
        selector: '(//li/a[@href="/energy"])[1]',
        locateStrategy: 'xpath',
    },
    //Side Navigation
    sideSafety: {
        selector: '//li[@data-title="safety"]',
        locateStrategy: 'xpath',
    },
    sidePerformance: {
        selector: '//li[@data-title="performance"]',
        locateStrategy: 'xpath',
    },
    sideRange: {
        selector: '//li[@data-title="range"]',
        locateStrategy: 'xpath',
    },
    sideAllWheel: {
        selector: '//li[@data-title="all-wheeldrive"]',
        locateStrategy: 'xpath',
    },
    sideUtility: {
        selector: '//li[@data-title="utility"]',
        locateStrategy: 'xpath',
    },
    sideAuto: {
        selector: '//li[@data-title="autopilot"]',
        locateStrategy: 'xpath',
    },
    sideInt: {
        selector: '//li[@data-title="interior"]',
        locateStrategy: 'xpath',
    },
    sideEx: {
        selector: '//li[@data-title="exterior"]',
        locateStrategy: 'xpath',   
    },
    sideSpec: {
        selector: '//li[@data-title="specs"]',
        locateStrategy: 'xpath',
    },
    sideOrder: {
        selector: '//li[@data-title="order"]',
        locateStrategy: 'xpath',
    },
    sideModelS: {
        selector: '//li[@data-title="models"]',
        locateStrategy: 'xpath',
    },
    sideModel3: {
            selector: '//li[@data-title="model3"]',
            locateStrategy: 'xpath',
    },
    sideModelX: {
        selector: '//li[@data-title="modelx"]',
        locateStrategy: 'xpath',
    },
    sideModelY: {
        selector: '//li[@data-title="modely"]',
        locateStrategy: 'xpath',

    //burger button drop down catagories
    },
    existInventory: {
        selector: '(//li/a[@href="/inventory/new/ms"])[1]',
        locateStrategy: 'xpath',
    },
    usedInventory: {
        selector: '(//li/a[@href="/inventory/new/ms"])[1]',
        locateStrategy: 'xpath',
    },
    insurance: {
        selector: '(//li/a[@href="/insurance"])[1]',
        locateStrategy: 'xpath',
    },
    testDrive: {
        selector: '(//li/a[@href="/drive"])[1]',
        locateStrategy: 'xpath',
    },
    findUs: {
        selector: '(//li/a[@href="/findus"])[1]',
        locateStrategy: 'xpath',
    },
    support: {
        selector: '(//li/a[@href="/support"])[1]',
        locateStrategy: 'xpath',
    },
    newsletter: {
        selector: '(//li/a[@href="/updates"])[0]',
        locateStrategy: 'xpath',
    },
    news: {
        selector: '(//li/a[@href="/blog"])[0]',
        locateStrategy: 'xpath',
    },
    charging: {
        selector: '(//li/a[@href="/charging"])[0]',
        locateStrategy: 'xpath',
    },
    semi: {
        selector: '(//li/a[@href="/semi"])[0]',
        locateStrategy: 'xpath',
    },
    carbonImpact: {
        selector: '(//li/a[@href="/carbonimpact"])[0]',
        locateStrategy: 'xpath',
    },
    //Main two homepage buttons
    customOrderLeft: {
        selector: '(//div/a[@title="Custom Order"])[1]',
        locateStrategy: 'xpath',
    },
    customOrderMiddle: {
        selector: '(//div/a[@title="Custom Order"])[2]',
        locateStrategy: 'xpath',
    },
    customOrderRight: {
        selector: '(//div/a[@title="Custom Order"])[3]',
        locateStrategy: 'xpath',
    },
    existInventoryButton: {
        selector: '(//div/a[@title="Existing Inventory"])[1]',
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
        selector: '(//div[@aria-label="Performance"])[1]',
        locateStrategy: 'xpath',
    },
    performance2: {
        selector: '(//div[@aria-label="Performance"])[2]',
        locateStrategy: 'xpath',
    },
    longRange: {
        selector: '(//div[@aria-label="Long Range"])[1]',
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
        selector: '(//div[@aria-label="All Black"])[2]',
        locateStrategy: 'xpath',
    },
    interiorBlkWhte: {
        selector: '(//div[@aria-label="Black and White"])[1]',
        locateStrategy: 'xpath',
    },
    sevenSeat: {
        selector: '(//div[@aria-label="Seven Seat Interior"])[1]',
        locateStrategy: 'xpath',
    },

    fullDrivingCheckBox: {
        selector: '//div/i[@class="icon-checkbox option-checkbox--icon icon-checkbox--blue"]',
        locateStrategy: 'xpath',
    },
    teslaHome: {
        selector: '(//h1/a[@title="Tesla Motors"])[1]',
        locateStrategy: 'xpath',
    },
    nextButton: '[data-id="btn-navigation"]',
    titlePage: '.review-page--title',

}
}