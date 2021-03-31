//--------------- Enter Fields For Twitter Sign In Pop 1 

const { Builder, By, Key, until } = require("selenium-webdriver");

const chrome = require("selenium-webdriver/chrome");
const signInData = {
    'username' : "Joshua" ,
    "phonenumber": "6154753959" ,
    "Date":['Dec' , '12' , '1999']

}

const options = new chrome.Options({ args: ['--window-size=1280,800', '--auto-open-devtools-for-tabs'] })

const proxy = require("selenium-webdriver/proxy");
// const ipAddress = "172.58.84.158:8080";
// .setProxy(proxy.manual({
//     http: ipAddress,
//     https: ipAddress
// })
// )


async function twitterSignIn() {
    const driver = new Builder()
        .setChromeOptions({ options: options })
        .forBrowser("chrome").build();

       await driver.get("https://twitter.com/i/flow/signup");

    driver.wait(until.elementLocated(By.name("name"))).then(res => {

        console.log("Starting to fill out log-in page")
        driver.findElement(By.name("name")).sendKeys(signInData.username).then(res => { console.log(`Account Username has been entered as ${signInData.username}`) }).catch(err => { console.log(err) });
        driver.findElement(By.name("phone_number")).sendKeys(signInData.phonenumber).then(res => { console.log("Account password has been entered") }).catch(err => { console.log(err) });
        driver.findElement(By.id("Month")).sendKeys(signInData.Date[0]).then(res => { console.log("Month has been entered") })
        driver.findElement(By.id("Day")).sendKeys(signInData.Date[1]).then(res => { console.log("Day has been entered") })
        driver.findElement(By.id("Year")).sendKeys(signInData.Date[2]).then(res => { console.log("Year has been entered") 
    })       
    })
    

}

twitterSignIn()