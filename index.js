const {Builder,By,Key,util} = require("selenium-webdriver");
async function example(){
    
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://google.com").catch((err)=>{
        console.log("error with connecting to google")
        console.log(err)
    });
    await driver.findElement(By.name("q")).sendKeys("Lazontez Gardner", Key.ENTER).catch((err)=>{
        console.log("error with serching for selenium")
        console.log(err)
    })
}
example()