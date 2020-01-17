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
    await driver.get("http://offerup.com" );

    // driver.wait(until.elementLocated(By.name("emailOrPhone"))).then(res => {

    //     driver.findElement(By.name("emailOrPhone")).sendKeys("mfjesnl@gmail.com").then(res => { console.log(res) }).catch(err => { console.log(err) });
    //     driver.findElement(By.name("fullName")).sendKeys("andrew jackson").then(res => { console.log(res) }).catch(err => { console.log(err) });;
    //     driver.findElement(By.name("username")).sendKeys("jckmisterjckxnxnxwkd").then(res => { console.log(res) }).catch(err => { console.log(err) });
    //     driver.findElement(By.name("password")).sendKeys("dffjg").then(res => { console.log(res) }).catch(err => { console.log(err) });
            
    // })

    // driver.findElement({id : " "})
}
example2()
