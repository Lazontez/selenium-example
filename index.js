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


const { Builder , By } = require("selenium-webdriver");
const proxy = require("selenium-webdriver/proxy");
// const ipAddress = "172.58.84.158:8080";
// .setProxy(proxy.manual({
//     http: ipAddress,
//     https: ipAddress
// })
// )
async function example2() {
    const driver = new Builder()

        .forBrowser("chrome").build();
    await driver.get("https://instagram.com");
    await driver.findElement(By.name("emailOrPhone")).sendKeys("mrJackson1232@gmail.com");
    await driver.findElement(By.name("fullName")).sendKeys("andrew jackson");
    await driver.findElement(By.name("username")).sendKeys("jckmisterjckxnxnxwkd");
    await driver.findElement(By.name("password")).sendKeys("dffjg");



    // driver.findElement({id : " "})
}
example2()