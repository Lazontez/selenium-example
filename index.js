//--------------- EXAMPLE 1 

// const {Builder,By,Key,util} = require("selenium-webdriver");

// async function example(){

//     let driver = await new Builder().forBrowser("chrome").build();
//     await driver.get("https://google.com").then(res=>{
//         console.log(res)
//     }).catch((err)=>{
//         console.log("error with connecting to google")
//         console.log(err)
//     });
//     await driver.findElement(By.name("q")).sendKeys("Lazontez Gardner", Key.ENTER).catch((err)=>{
//         console.log("error with serching for selenium")
//         console.log(err)
//     })
// }
// example()
// ----------------EXAMPLE 2


const { Builder, By, Key, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const testWord = "jason"


const options = new chrome.Options({ args: ['--window-size=1280,800', '--auto-open-devtools-for-tabs'] })

const proxy = require("selenium-webdriver/proxy");
// const ipAddress = "172.58.84.158:8080";
// .setProxy(proxy.manual({
//     http: ipAddress,
//     https: ipAddress
// })
// )


async function example2() {
    const driver = new Builder()
        .setChromeOptions({ options: options })
        .forBrowser("chrome").build();
    await driver.get("http://vital-town.herokuapp.com/authentication/signup");

    driver.wait(until.elementLocated(By.id("businessnameInput"))).then(res => {

        console.log("Business name input field has been rendered")
        driver.findElement(By.name("accountUsername")).sendKeys(testWord).then(res => { console.log("Account Username has been entered ") }).catch(err => { console.log(err) });
        driver.findElement(By.name("accountPw")).sendKeys(testWord).then(res => { console.log("Account password has been entered") }).catch(err => { console.log(err) });
        driver.findElement(By.name("accountPwConfirm")).sendKeys(testWord).then(res => { console.log("Accouny Password was confirmed") })
        driver.findElement(By.id("signUpButton")).sendKeys(Key.ENTER)
    })
    driver.wait(until.elementLocated(By.name("loginPw"))).then(res => {

        console.log("Login Page Rendered")
        driver.findElement(By.name("loginName")).sendKeys(testWord).then(res => { console.log("Account Username has been entered") }).catch(err => { console.log(err) });
        driver.findElement(By.name("loginPw")).sendKeys(testWord).then(res => { console.log("Login Password password has been entered") }).catch(err => { console.log(err) });
        driver.findElement(By.id("loginBtn")).sendKeys(Key.ENTER)
    })
    driver.wait(until.elementLocated(By.name("loginPw"))).then(res => {

        console.log("Login Page Rendered")
        driver.findElement(By.name("loginName")).sendKeys(testWord).then(res => { console.log("Account Username has been entered") }).catch(err => { console.log(err) });
        driver.findElement(By.name("loginPw")).sendKeys(testWord).then(res => { console.log("Login Password password has been entered") }).catch(err => { console.log(err) });
        driver.findElement(By.id("loginBtn")).sendKeys(Key.ENTER)
    })


}
example2()

