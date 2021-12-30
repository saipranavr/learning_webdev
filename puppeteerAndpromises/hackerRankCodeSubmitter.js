const puppeteer = require("puppeteer");

let cTab
let browserOpenP = puppeteer.launch({
    headless:false,
    defaultViewport:null,
    args:["--start-maximized"]
})
browserOpenP
    .then(function(browser)
    {
        console.log("browser opened");

        let allTabsP = browser.pages();
        return allTabsP;
        
    })
    .then(function(tabs)
        {
            cTab = tabs[0];
            let HackerRankHomeP = cTab.goto("https://www.hackerrank.com/auth/login");
            return HackerRankHomeP;
                
        })
    .then(function(visitPage)
        {
            console.log("page opened")
            let enterEmailP = cTab.type('input[name=username]', 'rajoy15443@shirulo.com', {delay: 20});
            return enterEmailP;
        })
    .then(function()
        {
            console.log("email entered")
            let enterPassP = cTab.type('input[name=password]', 'password@1', {delay: 20});
            return enterPassP;
        })
    .then(function()
    {
        console.log("password entered");
        let clickLoginP = cTab.click('button[data-analytics=LoginPassword]');
        return clickLoginP;
    })
    .then(function(){
        let waitNClick = waitAndClick("a[data-event-label=StartPreparation]");
        return waitNClick;
    })
    .then(function(){
        console.log("reached ip page");
    })
    function waitAndClick(Selector)
{
    return new Promise(function(resolve, reject){
        let waitforClick = cTab.waitForSelector(Selector,{visible:true});
        waitforClick.then(function()
            {
                let elemClickP = cTab.click(Selector);
                return elemClickP;
            })
            .then(function(){
                resolve();
            })
            .catch(function(err)
            {
                reject(err);
            })
    })
}

