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

const { Builder } = require("selenium-webdriver");
const proxy = require("selenium-webdriver/proxy");
const proxyServer = "172.58.84.244"

const driver = new Builder(
    proxy.manual(
        {
          http: proxyServer,
          https: proxyServer
        }
    )
).forBrowser("chrome").build();

driver.get("https://vital-town.herokuapp.com/")

